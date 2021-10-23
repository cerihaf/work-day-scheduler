
var currentDay= moment().format("dddd, MMMM Do")
$("#currentDay").text(currentDay)
var schedule = $('#schedule')
var hour = 9
var currentHour = moment().format("H")

var hourTasks=[]

for(i=0; i<9; i++) {
    var timeColor;
    
        if(hour<currentHour){
            timeColor="past"
        }
        else if (hour==currentHour){
            timeColor="present"
        }
        else {
            timeColor="future"
        }
    
    var timeblock = `<div class="row">
    <div class="col-lg-1 col-md-3 col-sm-12 border border-left-0 hour"><p>${moment(hour, 'H').format('hA')}</p></div>
    <div class="col-lg-10 col-md-6 col-sm-12 border px-0 ${timeColor}"><textarea data-hour=${hour}>${localStorage.getItem(hour) ? localStorage.getItem(hour) : ''}</textarea></div>
    <div class="col-lg-1 col-md-3 col-sm-12 saveBtn"><i class="fas fa-save"></i></div>
    </div>`
    schedule.append(timeblock);
    hour++
}

function saveItem(event){
   var textAreaElement = $(this).parent().children()[1].firstElementChild
   localStorage.setItem(textAreaElement.getAttribute('data-hour'),textAreaElement.value)
}

$('.saveBtn').on('click', saveItem)