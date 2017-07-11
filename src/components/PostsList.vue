<template>
  <ol :start="start">
    <li v-for="post in posts" class="list-item">
      <router-link
        :to="{ name: 'commentsList', params: { id: post.id } }"
        class="post-title"
        v-if="isShortUrl(post.url)"
      >
        {{post.title}}
      </router-link>
      <a v-else :href="post.url" target="_blank" rel="noopener" class="post-title">
        {{post.title}}
      </a><!-- .post-title -->
      <span class="txt-grey" v-if="post.domain">
        ({{post.domain}})
      </span><!-- .txt-grey -->
      <div class="txt-grey">
        <span v-if="post.points !== null">
          {{pluralize(post.points, 'point')}}
        </span>
        <span v-if="post.user">by <b>{{post.user}}</b></span>
        <span>{{post.time_ago}} |</span>
        <router-link
          :to="{ name: 'commentsList', params: { id: post.id } }"
          class="comment-link"
        >
          {{pluralize(post.comments_count, 'comment')}}
        </router-link><!-- .comment-link -->
      </div><!-- .txt-grey -->
    </li><!-- .list-item -->
  </ol>
</template>

<script>
import { pluralize, isShortUrl } from '../utils';

export default {
  name: 'posts-list',
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
    start: {
      type: Number,
      default: () => 1,
    },
  },
  methods: {
    pluralize,
    isShortUrl,
  },
};
</script>

<style>
.list-item {
  padding: 15px 10px;
}

.post-title {
  font-size: 16px;
  color: #333;
}

.comment-link {
  color: inherit;
}
.comment-link:hover {
  color: #4dba87;
}
</style>
