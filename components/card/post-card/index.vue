<template lang="pug">
vs-card.post-card
  // Header
  .post-card__header(slot="header")
    app-logo.post-card__avatar.mr-base(:width="32" :height="32")
    strong.post-card__userFirstName Kaç Birim?

  // Media
  .post-card__media(slot="media")
    v-lazy-image.post-card__image.aspect-ratio(
      :src="post.image"
      draggable="false"
      style="--ar: 1/1"
      :src-placeholder="require('@/assets/img/elements/preloader.gif')"
      :alt="post.description || 'kacbirim.com'"
    )

  // Info
  .post-card__info
    p.post-card__description(v-if="post.description" v-html="description")
    template(v-for="country in post.products_countries")
      .post-card__country
        span.d-block {{ country.name }} Asgari Ücret:
          strong &nbsp; {{ numberSeperator(country.wage) }}{{ country.currency }}
        span(
          v-html="calculatePurchasingPower({ productName: country.product_name, productType: country.product_type, purchasingPower: country.purchasing_power })"
        )
    small Değerler sistem tarafından otomatik hesaplanmıştır.

    // Tags
    template(v-if="post.tags && post.tags.length > 0")
      .post-card__tags
        template(v-for="tag in post.tags")
          nuxt-link.post-card__tag(:to="`/etiket/${tag.slug}`" :title="tag.name") {{ `#${tag.name}` }}
    time.post-card__time
      vs-icon(color="var(--color-text-03)" icon="access_time" size="16px")
      | Karşılaştırma Tarihi: {{ $moment(post.comparison_date).format('DD.MM.YYYY') }}

    vs-divider

    // Comments
    .post-card__comments
      h3.my-base Yorum yaz
      client-only
        lazy-component
          VueCusdis(:attrs="cusdis.config" :lang="cusdis.lang")
          template(v-slot:placeholder)
            span Loading comments...

  // Actions
  vs-row.post-card__actions(vs-justify="flex-end")
    post-social-share-dropdown(:url="`https://${domain}/${post.slug}`" :title="post.title" :tags="tags")
</template>

<script>
import VLazyImage from 'v-lazy-image'
import VueCusdis from '@evillt/vue-cusdis/dist/vue2.es'
import { numberSeperator } from '@/mixins'

export default {
  components: {
    VLazyImage,
    VueCusdis
  },
  mixins: [numberSeperator],
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      domain: process.env.DOMAIN,
      cusdis: {
        config: {
          host: 'https://cusdis.com',
          appId: '778b3aae-eca3-433a-b04e-7c5e2ba11daa',
          pageId: this.post.slug,
          pageTitle: this.post.title,
          pageUrl: this.$route.fullPath
        },
        lang: 'tr'
      }
    }
  },
  computed: {
    description() {
      let description

      if (this.post.description) {
        description = this.post.description.replace('\n', '<br>')
      }

      return description
    },
    tags() {
      let tags = []

      this.post.tags.forEach(tag => {
        tags.push(tag.slug)
      })

      return tags
    }
  },
  methods: {
    calculatePurchasingPower({ productName, productType, purchasingPower }) {
      let text = ''

      if (purchasingPower.month_in) {
        text = `1 ay içinde ${purchasingPower.month_in} ${productType} ${productName} alınabilir.`
      } else {
        if (purchasingPower.year) {
          text = `${purchasingPower.year} ${purchasingPower.month ? `yıl&nbsp;` : `yılda ${productName} alınabilir.`}`
        }

        if (purchasingPower.month) {
          text += `${purchasingPower.month} ayda ${productName} alınabilir.`
        }
      }

      return text
    }
  }
}
</script>

<style lang="scss">
.post-card {
  position: relative;
  border: 1px solid var(--color-border-01);
  box-shadow: var(--box-shadow-base);

  &__header {
    display: flex;
    align-items: center;
  }

  &__image {
    width: 100%;
    height: auto;
    background-color: var(--color-ui-01);
  }

  &__info {
    padding: var(--base-p-y) var(--base-p-x);
    padding-bottom: 0;
  }

  &__description {
    margin-bottom: var(--base-m-y);
    color: var(--color-text-03);
    font-size: 14px;
  }

  &__country {
    margin-bottom: var(--base-m-y);
    padding-left: 1rem;
    color: var(--color-text-02);
    font-size: 12px;
    border-left: 3px solid var(--color-border-01);
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(var(--base-m-y) * 2);
    word-wrap: break-word;
  }

  &__tag {
    margin-right: 0.4rem;

    &:hover {
      text-decoration: underline !important;
    }
  }

  &__time {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    color: var(--color-text-03);
    font-size: 12px;

    i {
      margin-right: 0.4rem;
    }
  }

  &__comments {
    // cusdis override
    .comment-main {
      position: relative;
      font-size: 0.9rem !important;

      .cusdis {
        &-reply-info {
          input {
            height: 2.4rem;
            font-size: 0.8rem;
            border: 2px solid var(--color-border-01);
          }
        }

        &-field {
          textarea {
            font-size: 0.8rem;
            border: 2px solid var(--color-border-01);
            resize: vertical;
          }

          .submit-btn {
            padding: 0.4rem 1rem;
            color: #eee;
            font-weight: normal;
            font-size: 0.8rem;
            background: #640064;
            background-image: linear-gradient(30deg, rgba(var(--vs-dark), 1), rgba(var(--vs-dark), 0.5)) !important;
            border-radius: var(--border-radius-base);
            box-shadow: var(--box-shadow-1);
          }
        }

        &-padding {
          margin-top: var(--base-m-y) !important;
          margin-bottom: 0 !important;
          padding: 1rem;
          background-color: rgba(243, 243, 243, 0.4);
          border-radius: calc(var(--border-radius-base) * 4);
        }

        &-paginator {
          margin-top: 1rem;
        }

        &-footer {
          position: absolute;
          top: -9999vh;
          left: -9999vw;
          visibility: hidden;
          opacity: 0;
          pointer-events: none;
        }
      }
    }
  }

  &__actions {
    position: absolute;
    right: 1rem;
    bottom: -1.4rem;
  }
}
</style>
