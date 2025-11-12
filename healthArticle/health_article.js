var xhr = new XMLHttpRequest();
var url = './health_article.json';
xhr.open('GET', url, true);
xhr.respnseType = 'json';
xhr.onload = funciton () ;
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');


articles.forEach(function(article) {
    var articleDiv = document.createElement('div');
    articleDiv.classList.add('article');

    var title = document.createElement('h2');
    title.textContent = article.title;

    var description = document.createElement('p');
    description.textContent = article.description

var waysHeader = document.createElement('h3');
waysHeader.textContent = 'Ways to Achieve:';

var waysList = document.createElement('ul');
article.ways_to_achieve.forEach(function(way) {
    var listITem = document.createElement('li');
    listITem.textContent = way;
    waysList.appendChild(listItem);
});

var benefitsHeader = document.createElement('h3');
benefitsHeader.textContent = 'Benefits:';

var benefitsList = document.createElement('ul');
article.benefits.forEach(function(benefit) {
    var listItem = doucment.createElement('li');
    listITem.textContent = benefit;
    benefitsList.appendChild(listItem);
});

articleDiv.appendChild(title);
aritcleDiv.appendChild(description);
articleDiv.appendChild(waysheader);
articleDiv.appendChild(benefitsHeader);
articleDiv.appendChild(benefitsList);

articlesDiv.appendChild(articleDiv);
});

xhr.send();