import { Calendar } from "https://cdn.skypack.dev/@fullcalendar/core@6.1.8";
import dayGridPlugin from "https://cdn.skypack.dev/@fullcalendar/daygrid@6.1.8";

document.addEventListener('DOMContentLoaded', function() {
  const calendarEl = document.getElementById('calendar')
  const calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin],
          headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
          }
  })
  calendar.render()
})