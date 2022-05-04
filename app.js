const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    // console.log('test')
    document.documentElement.classList.toggle('dark-theme');
});