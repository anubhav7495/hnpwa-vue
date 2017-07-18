const q = window.location.hash ? window.location.hash.slice(1) : '/news';

fetch('https://node-hnapi.herokuapp.com' + q)
  .then((res) => {
    if (res.ok) return res.json();
    throw new Error('api data preload failed');
  })
  .then((res) => { window.hnpwaVueApiRes = res; })
  .catch(e => console.error(e.message));
