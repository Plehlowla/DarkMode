

const btn = document.querySelector('.btn');
const articlesDOM = document.querySelector('.articles')

btn.addEventListener('click', () => {
    // console.log('test')
    document.documentElement.classList.toggle('dark-theme');
});

const articlesData = articles.map((item) => {
    // console.log(item)
    const {title, date, length, snippet} = item;
    // format date
    return `<article class="post">
    <h2>${title}</h2>
    <div class="post-info">
      <span>${date}</span>
      <span${length}</span>
    </div>
    <p>${snippet}</p>
  </article>`
}).join('');

articlesDOM.innerHTML = articlesData;


console.log(articles)