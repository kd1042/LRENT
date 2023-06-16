
// toast ui calendar 
const Calendar = tui.Calendar;
const container = document.getElementById('calendar');

const options = {
  usageStatistics: false,
  defaultView: 'month',
  timezone: {
    zones: [

      {
        timezoneName: 'Asia/Dili',
        displayLabel: 'Delhi',
      },
      
    ],
  },
  calendars: [
    
    {
      id: 'cal1',
      name: 'Work',
      backgroundColor: '#00a9ff',
    },

  ],
};

const calendar = new Calendar(container, options);

//change calendar views
document.querySelector('#pills-month-tab').addEventListener('click',() => {
  calendar.changeView('month')
} )

document.querySelector('#pills-week-tab').addEventListener('click',() => {
  calendar.changeView('week')
} )

document.querySelector('#pills-day-tab').addEventListener('click',() => {
  calendar.changeView('day')
} )


//update calendar
const updatCalendar = async () => {
  const res = await axios.get('http://192.168.1.4:3000/calendar-update');
   const calendarData = res.data;
   console.log(calendarData);
   let calId = 0
   for(let calendarE of calendarData){
    calId += 1;
    calendar.createEvents([
      {
        id: calId ,
        calendarId: 'cal1',
        title: calendarE.name,
        start: calendarE.date,
        end: calendarE.date,
      },
    ])
   }
}

updatCalendar();

document.querySelector('#m-btn').addEventListener('click', async () => {
     updatCalendar();
})

//
const dayCell = setTimeout(() => {
  document.querySelectorAll('.toastui-calendar-daygrid-cell');
},2000)
dayCell.addEventListener('click', () => {
  console.log('click');
})