<template>
  <div class="comments">
    <div class="loader loader-margin" v-if="!post"></div> <!-- .loader -->
    <div v-else>
      <p>
        <a :href="post.url" target="_blank" rel="noopener" class="title">
          {{post.title}}
        </a>
        <small v-if="post.domain">({{post.domain}})</small>
      </p>
      <div class="comment-info">
        <span v-if="post.points !== null">{{pluralize(post.points, 'point')}}</span>
        <span v-if="post.user">by <b>{{post.user}}</b></span>
        <span>{{post.time_ago}} |</span>
        <span>{{pluralize(post.comments_count, 'comment')}}</span>
      </div>
      <ul class="list-unstyled">
        <comment v-for="comment in post.comments" :comment="comment" :key="comment.id" />
      </ul>
    </div>
  </div><!-- .comments -->
</template>

<script>
import pluralize from '../utils';
import Comment from './Comment';

export default {
  name: 'comments-list',
  components: {
    Comment,
  },
  data() {
    return {
      id: this.$route.params.id,
      post: null,
    };
  },
  created() {
    this.fetchPost();
  },
  methods: {
    pluralize,
    fetchPost() {
      fetch(`https://node-hnapi.herokuapp.com/item/${this.id}`)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error('Network response was not ok');
      })
      .then((res) => {
        this.post = res;
      })
      .catch(e => console.error(e));
    },
  },
};
</script>

<style>

.comments {
  margin-top: 60px;
  background: #fff;
  padding: 6px 12px;
  overflow: hidden;
}

.title {
  font-size: 1.5em;
  color: #333;
}

.loader-margin {
  margin: calc(50vh - 60px) auto;
}

.list-unstyled {
  list-style: none;
  padding-left: 0;
}

.comment-info {
  padding-bottom: 12px;
  border-bottom: 1px solid #ccc;
}
</style>
