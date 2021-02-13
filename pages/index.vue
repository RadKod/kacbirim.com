<template lang="pug">
.page.main-page
  t-feed-post-list(:posts="posts")
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          image: 'https://source.unsplash.com/1600x900/?nature,water',
          title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          body:
            'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
        },
        {
          id: 2,
          image: 'https://source.unsplash.com/1200x1200/?newspaper,books',
          title: 'qui est esse',
          body:
            'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
        },
        {
          id: 3,
          image: 'https://source.unsplash.com/1600x900/?dance,party',
          title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
          body:
            'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
        },
        {
          id: 4,
          image: 'https://source.unsplash.com/1600x900/?festival,rock',
          title: 'eum et est occaecati',
          body:
            'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'
        },
        {
          id: 5,
          image: 'https://source.unsplash.com/900x1600/?mobile,phone',
          title: 'nesciunt quas odio',
          body:
            'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  position: relative;

  .t-rk-feed-post-list {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
}
</style>
