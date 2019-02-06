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
$(function () {
    $('#task3 li:contains("pine")').text('almonds');
    $('#task3 li.hot').html(function () {
        return '<em>' + $(this).text() + '</em>';
    });
    $('#task3 li#one').remove();
})

//ADDING NEW CONTENT
$(function () {
    $('#task4 ul').before('<p class="notice">Just update</p>');
    $('#task4 li.hot').prepend('+ ');
    var $newListItem = $('<li><em>gluten-free</em> soy souce</li>');
    $('#task4 li:last').after($newListItem);
})

//WORKING WITH ATTRIBUTES
$(function () {
    $('#task5 li#three').removeClass('hot');
    $('#task5 li.hot').addClass('far');
    $('#task5 li.hot').addClass('fa-heart');
    $('#task5 ul').attr('id', 'group');
})

//CHANGING CSS RULES
$(function () {
    var backgroundColor = $('#task6 li').css('background-color');
    $('#task6 ul').append('<p>Color was: ' + backgroundColor + '</p>');
    $('#task6 li').css({
        'background-color': '#c5a996',
        'border': '2px solid #fff',
        'color': '#000',
        'font-family': 'Georgia',
        'padding-left': '+=75'
    })
})

//USING .EACH()
$(function () {
    $('#task7 li').each(function () {
        var ids = this.id;
        $(this).append('<span class="order">' + ' ' + ids + '</span>');
    });
});

//EVENTS
$(function () {
    var ids = '';
    var $listItems = $('#task8 li');

    $listItems.on('mouseover', function () {
        ids = this.id;
        $listItems.children('span').remove();
        $(this).append(' <span class="priority">' + ids + '</span>');
    });

    $listItems.on('mouseout', function () {
        $(this).children('span').remove();
    });
});

//EVENT OBJECT
$(function () {
    $('#task9 li').on('click', function (e) {
        $('#task9 li span').remove();
        var date = new Date();
        //date.setTime(e.timeStamp); //Dont work on Chrome, but works without
        var clicked = date.toDateString();
        $(this).append('<span class="date"> ' + clicked + ' ' + e.type + ' ' + e.which + '</span>');
    });
});

//DELEGATING EVENTS
$(function () {
    var listItem, itemStatus, eventType;

    $('#task10 ul').on(
        'click mouseover',
        ':not(#four)', {
            status: 'important'
        },
        function (e) {
            listItem = 'Item: ' + e.target.textContent + '<br />';
            itemStatus = 'Status: ' + e.data.status + '<br />';
            eventType = 'Event: ' + e.type;
            $('#scriptResult10').html(listItem + itemStatus + eventType);
        }
    );
});

//BASIC EFFECTS
$(function () {
    $('#task11 h2').hide().slideDown(700);
    var $li = $('#task11 li');
    $li.hide().each(function (index) {
        $(this).delay(700 * index).slideDown(500).fadeIn(700);
    });
    $li.on('click', function () {
        $(this).slideUp(300).fadeOut(700);
    });
});

//USING ANIMATION
$(function () {
    $('#task12 li').on('click', function () {
        $(this).animate({
            opacity: 0.0,
            paddingLeft: '+=80'
        }, 1100, function () {
            $(this).remove();
        });
    });
});

//TRAVERSING
$(function () {
    var $h2 = $('#task13 h2');
    $('#task13 ul').hide();
    $h2.append(' <a>show</a>');

    $h2.on('click', function () {
        $h2.next().fadeIn(1100).children('.hot').addClass('complete');
        $h2.find('a').fadeOut(2000);
    });
});

//FILTERS IN USE
var $listItems14 = $('#task14 li');
$listItems14.filter('.hot:last').removeClass('hot');
$('#task14 li:not(.hot)').addClass('cool');
$listItems14.has('em').addClass('complete');

$listItems14.each(function () {
    var $this = $(this);
    if ($this.is('.hot')) {
        $this.prepend('Priority item: ');
    }
});

$('li:contains("honey")').append(' (local)');

//USING INDEX NUMBERS
$(function () {
    $('#task15 li:lt(2)').removeClass('hot');
    $('#task15 li').eq(0).addClass('complete');
    $('#task15 li:gt(2)').addClass('cool');
});

//WORKING WITH FORMS
$(function () {
    var $newItemButton = $('#newItemButton');
    var $newItemForm = $('#newItemForm');
    var $textInput = $('input:text');

    $newItemButton.show();
    $newItemForm.hide();

    $('#showForm').on('click', function () {
        $newItemButton.hide();
        $newItemForm.show();
    });

    $newItemForm.on('submit', function (e) {
        e.preventDefault();
        var newText = $('input:text').val();
        $('#task16 li:last').after('<li>' + newText + '</li>');
        $newItemForm.hide();
        $newItemButton.show();
        $textInput.val('');
    });
});

//CUT, COPY, PASTE
$(function () {
    var $p = $('#task17 p');
    var $cloneQuote = $p.clone();
    $p.remove();
    $cloneQuote.insertAfter('#task17 h2');

    var $moveItem = $('#task17 #one').detach();
    $moveItem.appendTo('#task17 ul');
})

//CHANGING DIMENSIONS
$(function () {
    var listHeight = $('#task17').height();
    $('#task18 ul').append('<p>Height: ' + listHeight + 'px</p>');
    $('#task18 li').width('50%');
    $('#task18 li#one').width(125);
    $('#task18 li#two').width('75%');
});

//Determing position of items on the page
//This didnt work for me
$(function () {
    var $window = $(window);
    var $slideAd = $('#slideAd');
    var endZone = $('#footer').offset().top - $window.height() - 500;

    $window.on('scroll', function () {

        if (endZone < $window.scrollTop()) {
            $slideAd.animate({
                'right': '0px'
            }, 250);
        } else {
            $slideAd.stop(true).animate({
                'right': '-360px'
            }, 250);
        }

    });

});


/* THIS IS THE FINAL EXAMPLE
OF CHAPTER 7 - jQuery!!!
Tasks for this example:
 | Users can add new item
 | When click on item, it changes to "complete" and move item to bottom
 | Onece itesm is marked as "Complete", second click remove item*/



$(function () {

    //Declare variables
    var $li = $('#final li');
    var $list = $('#final ul');
    var item = '';
    var $newItemForm = $('#newItemFormF');
    var $newItemButton = $('#newItemButtonF');

    //FIRST ANIMATION
    $newItemForm.hide();
    $li.hide().each(function (index) {
        $(this).delay(500 * index).fadeIn(1100);
    })

    //COUNTER
    function updateCount() {
        var count = $('#final li[class!=complete]').length; 
        $('#counter').text(count);
    };
    updateCount();

    //DeLETE ITEM
    $list.on('click', 'li', function () {
        var $this = $(this);
        var complete = $this.hasClass('complete');

        if (complete === true) {
            $this.animate({
                opacity: 0.0,
                paddingLeft: '+100'
            }, 1000, 'swing', function () { 
                $this.remove();
            })
        } else {
            item = $this.text();
            $this.remove();
            $list.append('<li class="complete">' + item + '</li>').hide().fadeIn(500);
        }
        updateCount();
    })

    //SHOW FORM
    $('#showFormF').on('click', function () {
        $newItemForm.show();
        $newItemButton.hide();
    });

    //ADD NEW ITEM
    $newItemForm.on('submit', function (e) {
        e.preventDefault();
        var newText = $('#final input:text').val();
        $list.append('<li>' + newText + '</li>');
        $newItemForm.hide();
        $newItemButton.show();
        $('#final input:text').val('');
        updateCount();
    })
})
