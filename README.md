## Hacker News Reader using Vue.js

#### [Link to Application](https://anubhav7495.github.io/hnpwa-vue)

A hacker news reader pwa (Progressive Web App) built using Vue.js and Vue-router.

<p align="center">
  <img src="main-view.png" width="226" />
</p>

### Features

* Performance Scores
  * LightHouse: 91/100 [LightHouse Link](https://www.webpagetest.org/lighthouse.php?test=170717_C8_230384878d6c07f66bb59cf11f15ad24&run=3)
  * Faster_3G: 3.4s [WebpPageTest Link](https://www.webpagetest.org/result/170717_C8_230384878d6c07f66bb59cf11f15ad24/)
  * 3G_EM: 4.3s [WebpPageTest Link](https://www.webpagetest.org/result/170717_TC_8b6a7c9d33d6687172ff9104a78cbae3/)


* Built using Vue.js & Vue-router
  * route-level code splitting
  * preload / prefetch resources
  * dns-prefetch for api endpoint
  * api data preloading


* Progressive Web App
  * app manifest
  * service worker using SWPrecachePlugin
  * app shell


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

- [ ] API data caching using service worker (`networkFirst` strategy)
- [ ] Conditionally load `fetch` & `promise` polyfills
- [ ] Implement PRPL
- [ ] Server Side Rendering (Maybe)
- [ ] Add Tests
