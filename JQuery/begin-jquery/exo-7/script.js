console.log("exercice 7");


function getData() {
    return data; // data is defined in DATA.js file
}

var infos = getData();

function addLineTotable(utilisateur) {

    $('tbody').append('<tr><td> ' + utilisateur.email + '</td><td>' + utilisateur.name.last + '</td><td>' + utilisateur.name.first + '</td><td>' + utilisateur.phone + '</td></tr>');
    //  console.log($('tbody'));
}

/*for (i = 0; i < infos.length; i++) {
    addLineTotable(infos[i]);
}*/

//Bonus 1
var elements = infos.length;
var elementsPage = 50;
var NbPage = elements / elementsPage;

$('.container').after('<nav class="text-center active" aria-current="page"> ');
$('nav').append('<ul class="pagination pagination-sm">');
for(i=1;i<=NbPage;i++) {
    $('ul').append('<li class="page-item"><a class="page-link" href="#">' + i +'</a></li>');

}

Page(1);

$('.page-link').on('click', function () {
    $('tbody').empty();
    Page(parseInt($(this).text()));
});




function Page(pageEnCours) {
    var elementPremier = (pageEnCours - 1) * 50 + 1;
    var elementDernier = pageEnCours * 50;
    for (i = elementPremier - 1; i < elementDernier; i++) {
        addLineTotable(infos[i]);
    }

    console.log(elementPremier);
}
