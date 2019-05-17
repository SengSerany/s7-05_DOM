console.log("Combien y a-t-il d'éléments <p> présents dans la page HTML ? Imprime-le résultat dans la console.")

let myCollection = document.getElementsByTagName("p");
console.log(myCollection.length);


console.log("Quel est le contenu texte de l'élément portant l'id coucou ? Imprime-le dans la console.")
console.log(document.getElementById('coucou').textContent);


console.log("Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? Imprime-la dans la console.")
let myVariable = document.querySelectorAll('a')[2].href;
console.log(myVariable);


console.log("Combien d'éléments portent la classe compte-moi ? Imprime le résultat dans la console.")
console.log(document.getElementsByClassName("compte-moi").length);


console.log("Combien d'éléments <li> portent la classe compte-moi ? Imprime le résultat dans la console.")
console.log(document.querySelectorAll("li.compte-moi").length);


console.log("Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? Imprime le résultat dans la console.")
console.log(document.querySelectorAll("ol>li.compte-moi").length);


console.log("La page contient un seul élément <div>. Celui-ci contient 2 éléments 'unordered list' ou <ul>. Dans le second <ul>, le premier élément de la liste (tag <li>) est caché visuellement de l'utilisateur mais toi, tu peux en récupérer le contenu. Affiche-le dans la console.")
let myUl2 = document.getElementsByTagName("div")[0].getElementsByTagName("ul")[1].getElementsByTagName("li")[0]
console.log(myUl2.textContent)

