console.log("exercice 6");

$('.btn-success').on('click', function () {

    //alert ('Veuillez saisir votre adresse email');
    var mail = $('input[type=email]').val();
    var mdp = $('input[type=password]').val();
    console.log(mail);
    console.log(mdp);

    verifierChampVide(mail, "email");
    verifierChampVide(mdp, "mot de passe");

    if (mdp.length < 6) {
        $('<div>').addClass('alert-warning').appendTo('form').text("Votre mot de passe doit comprendre au moins 6 lettres");
    }

    var validEmail = mail.match('[^@]+@[^@]+\.[a-zA-Z]{2,6}');
    if(!validEmail){
        $('<div>').addClass('alert-warning').appendTo('.container').text("L'adresse email n'est pas valide");
    }


    if(mail === 'hello@me.com' && mdp === "secret8"){
        $('.container').text("Vous êtes connecté").css('font-weight','bold');
    }

});


function verifierChampVide(champ, variable) {
    if (champ === "") {
        $('<div>').addClass('alert-warning').appendTo('form').text("La saisie de votre " + variable + " est obligatoire");
    }
}

