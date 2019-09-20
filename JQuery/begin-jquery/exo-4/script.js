console.log("exercice 4");

$('.btn-danger').click(function(){
    var message = $('input[type=email]').val();
    alert ('Merci ' + message + 'nous vous tiendrons informé des différentes offres');
});

$('ul:first li:last').dblclick(function(){
    $(this).hide();
});

/*
var cart = 0;
$('img').click(function(){
    cart++;
   $('ul:last li:last a').text('Cart ('+ cart + ')');
});
*/
$('img').on('mouseover',function(){
    if($(this).attr('src') === "ipad.jpg"){
        console.log("l'utilisateur regarde " + $(this).attr('src'));
    }
   else if($(this).attr('src') === "computer.jpeg"){
        console.log("l'utilisateur regarde " + $(this).attr('src'));
    }
   else{
        console.log("l'utilisateur regarde " + $(this).attr('src'));
    }
});

$('input').on('click', function(){
    console.log("l'utilisateur veut s'inscrire")
});

$('input').on('keyup', function(){
   console.log($(this).val());
});

//var cart =0;

/*$('img').on('click',function(){

    if($(this).attr('src') === "ipad.jpg"){
        console.log("l'utilisateur regarde " + $(this).attr('src'));
        cart = cart + 25;
        $('ul:last li:last a').html('<span class="glyphicon glyphicon-shopping-cart"></span>Cart ('+ cart + ')');
    }
    else if($(this).attr('src') === "computer.jpeg"){
        console.log("l'utilisateur regarde " + $(this).attr('src'));
        cart = cart + 20;
        $('ul:last li:last a').html('<span class="glyphicon glyphicon-shopping-cart"></span>Cart ('+ cart + ')');
    }
    else{
        console.log("l'utilisateur regarde " + $(this).attr('src'));
        cart = cart + 50;
        $('ul:last li:last a').html('<span class="glyphicon glyphicon-shopping-cart"></span>Cart ('+ cart + ')');
    }
});*/

var cart = 0;
$('img').on('click',function() {
    let panel = $(this).parentsUntil('.col-sm-4').children('.panel-footer').text().replace(/[^0-9\.]+/g, '');
    panel= parseInt(panel);
    cart = cart + panel;
    $('ul:last li:last a').html('<span class="glyphicon glyphicon-shopping-cart"></span>Cart ('+ cart + ')');

});