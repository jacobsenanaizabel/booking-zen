import React from 'react'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"

export default () => (
	<FullCalendar
	  plugins={[interactionPlugin, timeGridPlugin]}
	  initialView='timeGridWeek'
	  nowIndicator={true}
	  editable={true}
	  initialEvents={[
		{ title: 'nice event', start: new Date() }
	  ]}
	/>
  )