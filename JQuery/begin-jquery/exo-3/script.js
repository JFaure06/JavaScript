console.log("exercice 3");
$('h1').text('Marlène');
$('#tagline').text("Le jour où tout a commencé ");
$('nav ul:first').remove();
$('.glyphicon-log-in').removeClass('glyphicon-log-in').addClass('glyphicon-user');

$('footer').text('copyright 2017').css('font-weight','bold');

$('#work1 p').text(function(index){
    return "Mon projet " + (index +1);
});

//$('img').attr ('src','image8.jpeg');

$('img').each(function (index) {
   $(this).attr('src','image' + (index +1) + '.jpeg')
});

//$('h3').append('<p>Ma nouvelle destination?  Peut être!</p><img src="image9.jpeg" class="image-responsive" style="height: 250px" alt="Image">');

$('<p>',{
    id:'newText',
    text:'Ma nouvelle destination?  Peut être!'
}). appendTo('h3');

$('<img>' ,{
   id : 'newProject',
    src:"image9.jpeg",
    class:"image-responsive",
    style:"height: 250px",
    alt:"Image"
}).appendTo('h3');



$('footer').addClass('intro');