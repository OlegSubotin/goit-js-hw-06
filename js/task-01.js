const categoryEl = document.querySelectorAll('.item');
console.log('Number of categories: ', categoryEl.length);

categoryEl.forEach(element => {
    const categoryTitleEl = element.querySelector('h2');
    console.log('Category: ', categoryTitleEl.innerText);
    const categoryTextEl = element.querySelectorAll('li');
    console.log('Elements: ', categoryTextEl.length);
}
)

