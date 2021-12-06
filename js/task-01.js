const categoryQty = document.querySelectorAll('.item');
console.log('Number of categories: ', categoryQty.length);
//=========

categoryQty.forEach(category =>{
    const getCategoryTitle = category.querySelector('h2');
    console.log('Category: ', getCategoryTitle.textContent);

    const getCategoryQnt = category.querySelectorAll('li');
    console.log('Elements: ', getCategoryQnt.length);
});