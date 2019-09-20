/*
Javascript est un langage de programmation de scripts, orienté objet qui permet de créer des pages web dynamiques
JQuery est un framework, c'est un fichier javascript, une bibliothèque de fonctions javascript
qui permettent de simplifier et alléger le code

 */

console.log('exercice 1');

// on crée un objet avec la methode ready qui permet d'attendre que tout soit telechargé pour éxécuter le programme

$(document).ready(function(){
    console.log('Je peux maintenant écrire du code jQuery');
});