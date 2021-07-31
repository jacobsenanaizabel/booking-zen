import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'


let FullCalendar
export let events2;
export default function Home(props) {
  const [calendarLoaded, setCalendarLoaded] = useState(false)
  useEffect(() => {
    FullCalendar = dynamic({
      modules: () => ({
        calendar: import('@fullcalendar/react'),
        dayGridPlugin: import('@fullcalendar/daygrid'),
        timeGridPlugin: import('@fullcalendar/timegrid'),
        googleCalendarPlugin: import('@fullcalendar/google-calendar')
      }),
      render: (props, { calendar: Calendar, ...plugins }) => (
        <Calendar {...props}
          plugins={[timeGridPlugin, interactionPlugin, googleCalendarPlugin]} 

          allDaySlot={false}
          initialView="timeGridWeek"
          slotMinTime="08:00:00"
					slotMaxTime="18:00:00"
        />
      ),
      ssr: false
    })
    setCalendarLoaded(true)
  })
  let showCalendar = (props) => {
    if ( !calendarLoaded ) return <div>Loading ...</div>
    return (
      <FullCalendar {...props} />
    )
  }
  return (
    <div>
      {showCalendar(props)}
    </div>
  )
}