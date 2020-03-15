const url = 'https://hn.algolia.com/api/v1/search?query=';
const fetchNews = query => fetch(url + query).then(res => res.json());

 export { fetchNews };