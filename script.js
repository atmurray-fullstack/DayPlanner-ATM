
var currentTime = moment().format('LT');
function getTime() {
    currentTime = moment().format('LT')
}
getTime();

console.log(currentTime);



var now = currentTime.toString();
if (now.length === 7) {
    now = '0' + now;
}

console.log(now.length)

now = now.split("");
now.splice(2, 4);
console.log(now);

hour = now[0] + now[1];
hour = parseInt(hour);
amPm = now[2] + now[3];
console.log(typeof hour);
console.log(amPm);




var h1El = $('<h1>');
h1El.text(moment().format('ll'))
//fill in todayDate h1
$('#todayDate').append(h1El)
$('#todayDate').addClass('mb-3')
$('#my-modal').hide()




for (let i = 0; i < 9; i++) {
    var newRow = $('<div>');
    newRow.addClass('row mx-auto mt-1');
    newRow.attr('id', 'row' + i)
    console.log(newRow.attr('id'))


    var timeBlock = $('<div>');
    timeBlock.addClass('col-1 timeBlock rowcont');
    timeBlock.text('timeBlock').css('font-size', '2vw')
    timeBlock.attr('id', 'timeBlock' + i)
    timeBlock.height('25vh');

    var notesBlock = $('<div>');
    notesBlock.addClass('col-9 notesBlock rowcont ');
    notesBlock.text('notesBlock').css('font-size', '2vw');
    notesBlock.attr('id', 'notesBlock' + i);
    notesBlock.height('25vh');

    var noteId = notesBlock.attr('id');
    console.log(noteId)

    if (localStorage.getItem(noteId) === null) {
        localStorage.setItem(noteId, '');
        console.log(noteId);
    }

    var saveBlock = $('<div>');
    saveBlock.addClass('col-2 saveBlock rowcont text-left')
    saveBlock.text('saveBlock').css('font-size', '1.5vw');
    saveBlock.attr('id', 'saveBlock' + i)
    saveBlock.height('25vh');

    var ulElem = $('<ul>');
    ulElem.attr('id',i);
    console.log(ulElem.attr('id'))

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
    notesBlock.append(ulElem);

}





$('.notesBlock').on('click', function (event) {
    ///making block variable global
    block = event.target.id;
    // var blockObj = document.getElementById(block);
    console.log(block);

    $('textarea').css('height', '150')
    $('textarea').text('Enter new notes');
    $('#my-modal').show()
})

$('#enterInfo').on('click', function (event) {
    
    var noteInfo = $('#noteInfo').val();
    
    $('#my-modal').hide()
    $('#noteInfo').text('Enter notes')
    
    var newLiEl = $('<li>');
    newLiEl.text(noteInfo);
    ulId =block[block.length-1];
    console.log(ulId);
   $('#'+ulId).append(newLiEl);

    
})
