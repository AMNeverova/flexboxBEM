import './src/styles/style.scss';

let promiseWithArticles = new Promise( (resolve, reject) => {
    fetch('https://baconipsum.com/api/?type=all-meat&paras=6')
    .then(response => response.json())
    .then( response => resolve(response))
    .catch( er => reject(new Error(er)))
})

promiseWithArticles.then( data => {
    const articlesSegment = document.querySelector('.articles');
    let articles = data;
    articles.forEach((text, index) => {
        let textToPaste = text;
        if (textToPaste.length > 410) {
            textToPaste = text.slice(0, 410)
        }
        let article = createArticle(textToPaste, index);    
        articlesSegment.append(article);
    })
})

function createArticle(text, index) {
    let newArticle = document.createElement('div');
    newArticle.classList.add('article');
    let heading = createHeading(index);
    let img = createImage(index);
    let articleContent = createArticleContent(text);
    newArticle.append(heading);
    newArticle.append(img);
    newArticle.append(articleContent);
    return newArticle;
}

function createHeading(index) {
    let heading = document.createElement('h4');
    let headingClass = index % 4 === 0 || index % 4 === 3 ? 'heading_orange' : 'heading_purple';
    heading.classList.add('heading', headingClass);
    let headingText = document.createElement('p');
    headingText.classList.add('heading__text');
    headingText.innerHTML = 'about super logo';
    heading.append(headingText);
    return heading;
}

function createImage(index) {
    let img = document.createElement('img');
    img.classList.add('article__image');
    img.setAttribute('alt', 'image');
    img.setAttribute('src', `https://picsum.photos/140?random=${index}`);
    return img;
}

function createArticleContent(text) {
    let articleContent = document.createElement('div');
    articleContent.classList.add('article__content');
    let articleText = document.createElement('p');
    articleText.classList.add('article__text');
    articleText.innerHTML = text;
    let articleLink = document.createElement('a');
    articleLink.classList.add('article__link-read-more');
    articleLink.setAttribute('href', '#');
    articleLink.innerHTML = 'Read more...';
    articleContent.append(articleText);
    articleContent.append(articleLink);
    return articleContent;
}
