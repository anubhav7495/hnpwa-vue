<template>
  <div class="main">
    <div class="pagination">
      <router-link v-if="page > 1" :to="'/' + type + '/' + (page - 1)" class="pagination-link">
        &lt; Prev
      </router-link>
      <a v-else class="pagination-link disabled">&lt; Prev</a>
      <router-link v-if="hasMore" :to="'/' + type + '/' + (page + 1)" class="pagination-link">
        Next &gt;
      </router-link>
      <a v-else class="pagination-link disabled">Next &gt;</a>
    </div><!-- .pagination -->
    <div class="loader" v-if="!posts.length"></div> <!-- .loader -->
    <posts-list :posts="posts" :start="start" />
  </div><!-- .main -->
</template>

<script>
import PostsList from './PostsList';

export default {
  name: 'home',
  components: {
    PostsList,
  },
  data() {
    return {
      posts: [],
      type: this.$route.name,
      page: this.$route.params.page ? parseInt(this.$route.params.page, 10) : 1,
      hasMore: true,
    };
  },
  computed: {
    start: function start() {
      return ((this.page - 1) * 30) + 1;
    },
  },
  created: function created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch(`https://node-hnapi.herokuapp.com/${this.type}?page=${this.page}`)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error('Network response was not ok');
      })
      .then((res) => {
        this.posts = res;
        this.hasMore = res.length === 30;
      })
      .catch(e => console.error(e));
    },
  },
};
</script>

<style>

.main {
  margin-top: 100px;
  background: #fff;
  margin-bottom: 12px;
  overflow: hidden;
}

.pagination {
  position: fixed;
  top: 49px;
  left: 0;
  right: 0;
  background: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);
  text-align: center;
  z-index: 5;
}

.pagination-link {
  padding: 8px 12px;
  display: inline-block;
  font-size: 16px;
}

.disabled {
  color: #ccc;
}

.no-overflow {
  overflow: hidden;
}
</style>
