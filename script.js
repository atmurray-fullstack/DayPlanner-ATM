
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

console.log(currentTime);

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
console.log(typeof hour);
console.log(amPm);





h1El.text(moment().format('ll'))
//fill in todayDate h1
$('#todayDate').append(h1El)
$('#todayDate').addClass('mb-3')
$('#my-modal').hide()




for (let i = 0; i < 9; i++) {
    var newRow = $('<div>');
    newRow.addClass('row mx-auto mt-1');
    newRow.attr('id', 'row' + i)
    newRow.height('25vh');
    // console.log(newRow.attr('id'))


    var timeBlock = $('<div>');
    timeBlock.addClass('col-1 timeBlock rowcont fontDefault');
    timeBlock.text('timeBlock')
    timeBlock.attr('id', 'timeBlock' + i)
    // timeBlock.height('25vh');

    var notesBlock = $('<div>');
    notesBlock.addClass('col-9 notesBlock rowcont fontDefault');
    notesBlock.text('Events');
    notesBlock.attr('id', 'notesBlock' + i);
    // notesBlock.height('25vh');

    var noteId = notesBlock.attr('id');
    // console.log(noteId)

    if (localStorage.getItem(noteId) === null) {
        localStorage.setItem(noteId, '');
    } else {
        notesBlock.text(localStorage.getItem(noteId));
    }

    var saveBlock = $('<div>');
    saveBlock.addClass('col-2 saveBlock rowcont text-left fontDefault')
    saveBlock.text('saveBlock')
    saveBlock.attr('id', 'saveBlock' + i)
    // saveBlock.height('25vh');



    if (i < 3) {
        count = i + 9
        count = count + ' AM'
        timeBlock.text(count);
    } else if (i == 3) {
        count = i + 9
        count = count + ' PM'
        timeBlock.text(count);
    } else if (i > 3 && i < 9) {
        count = i - 3
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
    console.log(typeof hour);
    console.log(amPm);

    

}, 1000);




/////////// .ON CLICK EVENTS///////////////////////

$('.notesBlock').on('click', function (event) {
    ///making block variable global
    block = event.currentTarget.id;
    console.log(block);
    var filler = $('#' + block).text();
    console.log(filler);
    $('textarea').css('height', '150')
    $('#noteInfo').val(filler);

    $('#my-modal').show();
})




$('#enterInfo').on('click', function (event) {
    var noteInfo = $('#noteInfo').val();
    $('#' + block).text(noteInfo);
    console.log(noteInfo)

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
