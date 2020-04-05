
////////mutable variables//////////

var currentTime = moment().format('LT');
var filler = '';
var block = '';
var now = '';
var h1El = $('<h1>');


function getTime() {
    currentTime = moment().format('LT')
}

getTime();

now = currentTime.toString();
if (now.length === 7) {
    now = '0' + now;
}

now = now.split("");
now.splice(2, 4);
console.log(now);

hour = now[0] + now[1];
hour = parseInt(hour);
amPm = now[2] + now[3];






h1El.text(moment().format('ll'))
//fill in todayDate h1
$('#todayDate').append(h1El)
$('#todayDate').addClass('mb-5')
$('#my-modal').hide()

for (let i = 0; i < 9; i++) {
    var newRow = $('<div>');
    newRow.addClass('row mx-auto mt-1');
    newRow.attr('id', 'row' + i)
    newRow.height('25vh');


    var timeBlock = $('<div>');
    timeBlock.addClass('col-1 timeBlock rowcont fontDefault');
    timeBlock.text('timeBlock')
    timeBlock.attr('id', 'timeBlock' + i)

    var notesBlock = $('<div>');
    notesBlock.addClass('col-9 notesBlock rowcont fontDefault');
    notesBlock.text('Events');
    notesBlock.attr('id', 'notesBlock' + i);

    var noteId = notesBlock.attr('id');
    

    if (localStorage.getItem(noteId) === null) {
        localStorage.setItem(noteId, '');
    } else {
        notesBlock.text(localStorage.getItem(noteId));
    }

    var saveBlock = $('<div>');
    saveBlock.addClass('col-2 saveBlock rowcont text-left fontDefault')
    saveBlock.text('SAVE INFO')
    saveBlock.attr('id', 'saveBlock' + i)



    if (i < 3) {
        count = i + 9
        timeBlock.attr('data-hour', count)
        count = count + ' AM'
        timeBlock.text(count);

    } else if (i == 3) {
        count = i + 9
        timeBlock.attr('data-hour', count)
        count = count + ' PM'
        timeBlock.text(count);
    } else if (i > 3 && i < 9) {
        count = i - 3
        timeBlock.attr('data-hour', count)
        count = count + ' PM'
        timeBlock.text(count);
    }


    $('#main').append(newRow);
    newRow.append(timeBlock);
    newRow.append(notesBlock);
    newRow.append(saveBlock);


}

////////////SET INTERVAL FOR BACKGROUND COLOR OF TIME BLOCKS\\\\\\\\\\\\\

setInterval(function () {
    getTime();

    now = currentTime.toString();
    if (now.length === 7) {
        now = '0' + now;
    }

    now = now.split("");
    now.splice(2, 4);
    console.log(now);

    hour = now[0] + now[1];
    hour = parseInt(hour);
    amPm = now[2] + now[3];
    ;

    for (let i = 0; i < 9; i++) {
        var rowB = 'row' + i;
        var timeB = 'timeBlock' + i;
        var notesB = 'notesBlock' + i;
        var saveB = 'saveBlock' + i;
        timeBText = $('#' + timeB).text()

        if (timeBText === (hour + ' ' + amPm)) {

            $('#' + rowB).addClass('currentTimeRow')
            $('#' + saveB).addClass('timeNotesStyle')
            $('#' + timeB).addClass('timeNotesStyle')
            $('#' + notesB).addClass('timeNotesStyle')

            // $('#' + rowB).css({
            //     'height': '35vh',
            //     'margin-top': '5px',
            //     'margin-bottom': '5px',
            //     'border-style': 'solid',
            //     'border-width': '2px',
            //     'border-color': 'black',
            //     'border-radius': '3px',
            //     'padding-right': '4px',
            //     'padding-left': '4px'


            // })

            // $('#' + timeB).css({
            //     'background-color': 'whitesmoke',
            //     'font-weight': 'bolder',
            //     'border-style': 'solid',
            //     'border-width': '5px',
            //     'border-color': 'tomato',
            //     'margin-top': '4px',
            //     'margin-bottom': '4px',
            // });

            // $('#' + notesB).css({
            //     'background-color': 'whitesmoke',
            //     'font-weight': 'bolder',
            //     'border-style': 'solid',
            //     'border-width': '5px',
            //     'border-color': 'tomato',
            //     'margin-top': '4px',
            //     'margin-bottom': '4px',
            // });

            // $('#' + saveB).css({
            //     'background-color': 'whitesmoke',
            //     'font-weight': 'bolder',
            //     'border-style': 'solid',
            //     'border-width': '5px',
            //     'border-color': 'tomato',
            //     'margin-top': '4px',
            //     'margin-bottom': '4px',
            //     'color': 'tomato'
            // });
        } else {
            $('#' + rowB).removeClass('currentTimeRow');
            $('#' + saveB).removeClass('timeNotesStyle');
            $('#' + timeB).removeClass('timeNotesStyle');
            $('#' + notesB).removeClass('timeNotesStyle');
        }
    }
}, 500);




/////////// .ON CLICK EVENTS///////////////////////

$('.notesBlock').on('click', function (event) {
    ///making block variable global
    block = event.currentTarget.id;
    var filler = $('#' + block).text();
    $('#noteInfo').val(filler);
    $('#my-modal').show();
})




$('#enterInfo').on('click', function (event) {
    var noteInfo = $('#noteInfo').val();
    $('#' + block).text(noteInfo);
    $('#my-modal').hide();
    $('#noteInfo').val('Enter notes')
})



$('.saveBlock').on('click', function (event) {
    console.log(event.currentTarget);
    sBlock = event.currentTarget.id;
    block = 'notesBlock' + sBlock[sBlock.length - 1];
    var filler = $('#' + block).text();
    console.log(block);
    console.log(filler);
    localStorage.setItem(block, filler)
});
