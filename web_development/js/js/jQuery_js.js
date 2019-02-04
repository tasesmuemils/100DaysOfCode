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

//CHANGING CONTENT
$(function() {
    $('#task3 li:contains("pine")').text('almonds');
    $('#task3 li.hot').html(function() {
        return '<em>' + $(this).text() + '</em>';
    });
    $('#task3 li#one').remove();
})

//ADDING NEW CONTENT
$(function() {
    $('#task4 ul').before('<p class="notice">Just update</p>');
    $('#task4 li.hot').prepend('+ ');
    var $newListItem = $('<li><em>gluten-free</em> soy souce</li>');
    $('#task4 li:last').after($newListItem);
})

//WORKING WITH ATTRIBUTES
$(function() {
    $('#task5 li#three').removeClass('hot');
    $('#task5 li.hot').addClass('far');
    $('#task5 li.hot').addClass('fa-heart');
    $('#task5 ul').attr('id', 'group');
})

//CHANGING CSS RULES
$(function() {
    var backgroundColor = $('#task6 li').css('background-color');
    $('#task6 ul').append('<p>Color was: ' + backgroundColor + '</p>');
    $('#task6 li').css({
        'background-color' : '#c5a996',
        'border' : '2px solid #fff',
        'color' : '#000',
        'font-family' : 'Georgia',
        'padding-left' : '+=75'
    })
})

//USING .EACH()
$(function() {
    $('#task7 li').each(function() {
        var ids = this.id;
        $(this).append('<span class="order">' + ' ' + ids + '</span>');
    });
});

//EVENTS
$(function() {
    var ids = '';
    var $listItems = $('#task8 li');

    $listItems.on('mouseover', function() {
        ids = this.id;
        $listItems.children('span').remove();
        $(this).append(' <span class="priority">' + ids + '</span>');
    });

    $listItems.on('mouseout', function() {
        $(this).children('span').remove();
    });
});

//EVENT OBJECT
$(function () { 
    $('#task9 li').on('click', function(e) {
        $('#task9 li span').remove();
        var date = new Date();
        //date.setTime(e.timeStamp); //Dont work on Chrome, but works without
        var clicked = date.toDateString();
        $(this).append('<span class="date"> ' + clicked + ' ' + e.type + ' ' + e.which + '</span>');
    });
 });
