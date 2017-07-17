const q = window.location.hash ? window.location.hash.slice(1) : '/news';
fetch('https://node-hnapi.herokuapp.com' + q)
  .then((r) => {
    if (r.ok) return r.json();
    throw new Error('api data preload failed');
  })
  .then((r) => {sessionStorage.setItem(q, JSON.stringify(r))})
  .catch(e => console.error(e.message));
