<template>
  <li v-if="comment">
    <p class="txt-grey">
      <b>{{comment.user}}</b> {{comment.time_ago}}
      <a @click="toggle" class="toggle">
        {{open ? '[-]' : `[+${children}]`}}
      </a>
    </p>
    <div v-show="open">
      <div v-html="comment.content" class="content"></div>
      <ul class="list-unstyled child-padding">
        <comment v-for="comment in comment.comments" :comment="comment" :key="comment.id" />
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  name: 'comment',
  props: {
    comment: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      open: true,
    };
  },
  computed: {
    children() {
      return (this.comment.comments.length ? this.comment.comments.length : '');
    },
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>

<style>
  .content {
    border-bottom: 1px solid #eee;
    overflow-wrap: break-word;
  }

  .content pre {
    white-space: pre-wrap;
  }

  .child-padding {
    padding-left: 15px;
  }

  .toggle {
    color: inherit;
    padding-left: 5px;
  }
</style>
