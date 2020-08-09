
let NewNews = function () {
    if (document.getElementById("form-new-news").hidden === true) {
    document.getElementById('form-new-news').hidden = false;
    }
    else {document.getElementById('form-new-news').hidden = true;
    document.getElementById("headerNews").value = "";
    document.getElementById("articleNews").value = "";
    }
};

let news = [];

let createNews = function () {
    news.length++;
    news.header = document.getElementById('headerNews').value;
    news.article = document.getElementById("articleNews").value;
    localStorage.setItem(news[news.length].header, news.header);
    localStorage.setItem(news[news.length].article, news.article);
    document.getElementById('form-new-news').hidden = true;
    document.getElementById("headerNews").value = "";
    document.getElementById("articleNews").value = "";
};








