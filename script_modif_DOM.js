function changeTitles() {
	let title = document.getElementsByTagName("h1");
	title[0].textContent = "Ce que j'ai appris à THP";

	let subTitle = document.querySelectorAll("p.lead");
	subTitle[0].textContent = "Dormir, c'est bien.";
};

function changeCallToActions() {
	let callToAction = document.querySelectorAll("a.btn-primary");
	callToAction[0].textContent = "Coucou THP";
	callToAction[0].href = "http://www.thehackingproject.org";

	let callToActionSecondary = document.querySelectorAll("a.btn-secondary");
	callToActionSecondary[0].textContent = "Coucou Pôle Emploi";
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

function changeCardsText() {

	let cardText = document.querySelectorAll("p.card-text");
	for(i = 0; i < 3; i++) {
		switch(i){
			case 0: 
			cardText[i].textContent = "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web"
			break;
			case 1:
			cardText[i].textContent = "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML"
			break;
			case 2:
			cardText[i].textContent = "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."
			break;
		}
	}
}

function changeViewButtons() {
	let parent = document.querySelectorAll("div.btn-group");

	parent.forEach((div, index) => {
		let child = div.firstElementChild;
		child.classList.remove('btn-outline-secondary');
		child.classList.add('btn-success');
	})
}

function changeViewButtonsCaro() {
	let btnGroup = document.getElementsByClassName("btn-group")
	
	for(i = 0; i <= btnGroup.length; i++) {
		btnGroup[i].getElementsByTagName("button")[0].classList.remove('btn-outline-secondary')
		btnGroup[i].getElementsByTagName("button")[0].classList.add('btn-success')
	}
}



function addRow() {

	let row1 = document.querySelectorAll("div.album")[0].getElementsByClassName("container")[0].getElementsByClassName("row")[0];
	row1.insertAdjacentHTML('afterend', '<div class="row"></div>');
	row2 =  document.querySelectorAll("div.album")[0].getElementsByClassName("container")[0].getElementsByClassName("row")[1];
	let thirdCard = row1.childNodes[5];
	row2.appendChild(thirdCard);
}

changeTitles();
changeCallToActions();
changeLogoName();
populateImages();
deleteLastCards();
changeCardsText();
changeViewButtons();
addRow();


