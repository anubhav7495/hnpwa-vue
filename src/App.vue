<template>
  <div id="app">
    <div class="header">
      <div class="container-fixed">
        <router-link to="/" class="header-link brand">HN</router-link>
        <router-link to="/news" class="header-link">Top</router-link>
        <router-link to="/newest" class="header-link">New</router-link>
        <router-link to="/show" class="header-link">Show</router-link>
        <router-link to="/ask" class="header-link">Ask</router-link>
        <router-link to="/jobs" class="header-link">Jobs</router-link>
      </div><!-- container-fixed -->
    </div><!-- .header -->
    <div class="container-fixed">
      <router-view :key="$route.path"></router-view>
    </div><!-- .main -->
  </div><!-- #app -->
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
  html {
    line-height: 1.5;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #333;
    background-color: #f5f5f5;
    margin: 0;
    overflow-y: scroll;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color:#4dba87;
  }

  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #4dba87;
    z-index: 5;
    overflow: hidden;
  }

  .header-link {
    padding: 12px 6px;
    color: #eee;
    display: inline-block;
    transition: all 0.3s ease;
    border-bottom: 1px solid #4dba87;
    font-size: 16px;
  }

  .header-link-active {
    color: #fff;
    border-color: #fff;
  }

  .brand {
    font-size: 14px;
    font-weight: 700;
    border: 2px solid #f5f5f5;
    padding: 4px;
    margin: 0 10px;
    letter-spacing: 1px;
  }

  .container-fixed {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .loader {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 4px solid #eee;
    border-top: 4px solid #4dba87;
    animation: spin 1s linear infinite;
    margin: calc(50vh - 75px) auto;
  }

  .txt-grey { color: #757575; }

  @keyframes spin {
    from  { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @media (min-width: 960px) {
    .container-fixed { max-width: 960px; }
    .header-link { padding-left: 12px; padding-right: 12px; }
    .brand { padding: 4px; margin-left: 0; }
  }
</style>
