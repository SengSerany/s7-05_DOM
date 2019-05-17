function changeTitles() {
	let title = document.getElementsByTagName("h1");
	title[0].textContent = "Ce que j'ai appris à THP";

	let subTitle = document.querySelectorAll("p.lead");
	subTitle[0].textContent = "Dormir, c'est bien.";
};

function changeCallToActions() {
	let callToAction = document.querySelectorAll("a.btn-primary");
	callToAction[0].textContent = "Fuyez";
	callToAction[0].href = "http://www.thehackingproject.org";

	let callToActionSecondary = document.querySelectorAll("a.btn-secondary");
	callToActionSecondary[0].textContent = "Mais vraiment, même ici c'est mieux";
	callToActionSecondary[0].href = "https://www.pole-emploi.fr/accueil/";
};

function changeLogoName() {
	let brandName = document.querySelectorAll("a.navbar-brand")[0].getElementsByTagName("strong");
	brandName[0].textContent = "The THP Experience";
	brandName[0].style.fontSize = "2em";
};

function populateImages() {
	let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
	let images = document.querySelectorAll("img.card-img-top");
	imagesArray.forEach((value, index) => {
		images[index].src = value;
	})
};

function deleteLastCards() {
	for(i = 0; i <= 6; i++) {
		let parent = document.querySelectorAll("div.album")[0].getElementsByClassName("container")[0].getElementsByClassName("row")[0];
		let child = parent.lastChild;
		parent.removeChild(child);
	}
}


changeTitles();
changeCallToActions();
changeLogoName();
populateImages();
deleteLastCards();