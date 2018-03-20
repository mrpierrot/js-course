console.log("Exercice 1 -------------");

var title = document.querySelector(".article-title");
console.log(title.innerHTML);

console.log("Exercice 2 -------------");

var list = document.querySelectorAll(".top5 li");

for (var i = 0, c = list.length; i < c; i++) {
  console.log(i + 1 + " : " + list[i].innerHTML);
}

console.log("Exercice 3 -------------");

var titles = [
  "Faut-il interdire les frites ?",
  "Les 10 tendances 2018 de la chipolata",
  "Les 10 types de chats",
  "10 questions à vous poser avant de vous cogner contre un mur",
  "10 secrets pour marcher droit"
];

var top10 = document.querySelector(".top10");
var listStr = "";
for (var i = 0, c = titles.length; i < c; i++) {
  listStr += "<li>" + titles[i] + "</li>";
}

top10.innerHTML = listStr;
title.innerHTML = "Le top 10 des titres putaclic";

console.log("Exercice 4 -------------");

var toggleColorsButton = document.querySelector(".js-toggle-colors-button");
var article = document.querySelector("article");
toggleColorsButton.addEventListener("click", function(event) {
  if (article.className == "red-color") {
    article.className = "";
  } else {
    article.className = "red-color";
  }
});

console.log("Exercice 5 -------------");

var addTitleButton = document.querySelector(".js-add-title-button");
var addTitleInput = document.querySelector(".js-add-title-input");
var titlesCountElem = document.querySelector(".js-titles-count");

addTitleButton.addEventListener("click", function(event) {
  top10.innerHTML += "<li>" + addTitleInput.value + "</li>";
  titlesCountElem.innerHTML = document.querySelectorAll("li").length;
});

console.log("Exercice 6 -------------");
titlesCountElem.innerHTML = document.querySelectorAll("li").length;
