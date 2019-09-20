console.log("exercice 5");

$('img').on('click',function(){

    var computerChoice=getComputerChoice()
    {
        $('#computerChoice').text("le choix de l'ordinateur est : " + computerChoice);

        if ($(this).attr('alt') === "pierre") {
            console.log("l'utilisateur a choisi " + $(this).attr('alt'));
            $('#userChoice').text("L'utilisateur a choisi " + $(this).attr('alt')).css('font-weight', 'bold');

            if ($(this).attr('alt') === computerChoice) {
                $('#resultat').text('Egalité').css('color','grey');
            } else if (computerChoice === 'ciseaux'){
                $('#resultat').text('Gagné').css('color','green');
            } else {
                $('#resultat').text('Perdu').css('color','red');
            }

        } else if ($(this).attr('alt') === "feuille") {
            console.log("l'utilisateur a choisi " + $(this).attr('alt'));
            $('#userChoice').text("L'utilisateur a choisi " + $(this).attr('alt')).css('font-weight', 'bold');

            if ($(this).attr('alt') === computerChoice) {
                $('#resultat').text('Egalité').css('color','grey');
            } else if (computerChoice === 'pierre'){
                $('#resultat').text('Gagné').css('color','green');
            } else {
                $('#resultat').text('Perdu').css('color','red');
            }

        } else {
            console.log("l'utilisateur a choisi " + $(this).attr('alt'));
            $('#userChoice').text("L'utilisateur a choisi " + $(this).attr('alt')).css('font-weight', 'bold');

            if ($(this).attr('alt') === computerChoice) {
                $('#resultat').text('Egalité').css('color','grey');
            } else if (computerChoice === 'feuille'){
                $('#resultat').text('Gagné').css('color','green');
            } else {
                $('#resultat').text('Perdu').css('color','red');
            }
        }
    }
});


function getComputerChoice() {
    var choiceComputer = Math.floor(Math.random() * 3);
    if (choiceComputer === 0) {
        choiceComputer = 'pierre';
        return choiceComputer;
    } else if (choiceComputer === 1) {
        choiceComputer = 'feuille';
        return choiceComputer;
    } else {
        choiceComputer = 'ciseaux';
        return choiceComputer;
    }
}
