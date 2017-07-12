## Hacker News Reader using Vue.js

#### [Link to Application](https://anubhav7495.github.io/hnpwa-vue)

A hacker news reader pwa (Progressive Web App) built using Vue.js and Vue-router.

<p align="center">
  <img src="main-view.png" width="226" />
</p>

### Features

* Built using Vue.js & Vue-router
  * route-level code splitting
  * preload / prefetch resources
  * dns-prefetch for api endpoint


* Progressive Web App
  * app manifest
  * service worker using SWPrecachePlugin
  * app shell
  * 100/100 lighthouse score


* Single-file vue components
  * hot reload in development
  * css extraction for production


* Hosted using Github Pages

* Uses [node-hnapi](https://github.com/cheeaun/node-hnapi)

### Development

```
# install dependencies
$ npm install

# serve locally with HMR at localhost:3001
$ npm run dev

# build for production
$ npm run build

# build for production with bundle analyzer report
$ npm run build --report
```

### ToDo

- [ ] Api data caching using service worker
- [ ] Set up CDN to solve Github Pages caching issue
- [ ] Server Side Rendering (Maybe)
- [ ] Add Tests
