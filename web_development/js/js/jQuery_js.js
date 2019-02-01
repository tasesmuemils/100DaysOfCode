$('#header').addClass('headline');
$('li:lt(3)').hide().fadeIn(3000);
$('li').on('click', function () {
    $('this').remove();
});

//LOOPING
$('#task1 li em').addClass('fa-calendar-alt');
$('#task1 li em').addClass('far');
$('#task1 li.hot').addClass('far');
$('#task1 li.hot').addClass('fa-heart');

//CHAINING and getting at content
$('#task2 li[id !="one"]').hide().fadeIn(1400);

//$listHTML = $('#task2 ul').html();
//$('#task2 ul').append($listHTML);

var $listText = $('#task2 ul').text();
$('#scriptResult2').append($listText);

//var $listItemHTML = $('#task2 li').html();
//$('#task2 li').append(' <i>' + $listItemHTML + '</i>');

var $listItemText = $('#task2 li').text();
$('#task2 li').append('<i>' + $listItemText + '</i>');