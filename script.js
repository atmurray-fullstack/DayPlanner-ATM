
var currentTime = moment().format('LT');

console.log(currentTime);
var now = currentTime.toString();
now = now.split("");
now.splice(2, 4);
hour = now[0] + [1];
amPm = now[2] + now[3];
console.log(hour);
console.log(amPm);


var h1El = $('<h1>');
h1El.text(moment().format('ll'))
//fill in todayDate h1
$('#todayDate').append(h1El)
$('#todayDate').addClass('mb-3')





for (let i = 0; i < 9; i++) {
    var newRow = $('<div>');
    newRow.addClass('row text-center mx-auto mt-1');
    newRow.attr('id', 'row' + i)
    console.log(newRow.attr('id'))


    var timeBlock = $('<div>');
    timeBlock.addClass('col-2 timeBlock rowcont');
    timeBlock.text('timeBlock')
    timeBlock.attr('id', 'timeBlock' + i)
    timeBlock.height('15vh');

    var notesBlock = $('<div>');
    notesBlock.addClass('col-8 notesBlock rowcont');
    notesBlock.text('notesBlock');
    notesBlock.attr('notesBlock', 'row' + i);
    notesBlock.height('15vh');

    var saveBlock = $('<div>');
    saveBlock.addClass('col-1 saveBlock rowcont')
    saveBlock.text('saveBlock');
    saveBlock.attr('id', 'saveBlock' + i)
    saveBlock.height('15vh');

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


