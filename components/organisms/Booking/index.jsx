import React, { useState, useEffect } from "react";
import { useSnackbar } from 'react-simple-snackbar';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import dataEvents from "./mockedCalendar.json";


import {
	ContainerCalendar
  } from './styles';

const unavailable = "rgb(177, 160, 238)";

export const options = {
	position: 'top-center',
	style: {
	  backgroundColor: '#4a31a1',
	  color: '#ffffff',
	  fontSize: '20px',
	  textAlign: 'center',
	},
	closeStyle: {
	  color: '#ffffff',
	  fontSize: '16px',
	},
  };

const Booking = () => {
	let [convertedEvents, setConverted] = useState();
	const [openSnackbar] = useSnackbar(options)

	function handleDateClick() {
	}

	function handleEventClick(info) {
		toggleAvailabilityByProps(info);
	}

	function toggleAvailabilityByProps(info) {
		if (info.event.extendedProps.available) {
			info.el.style.backgroundColor = unavailable;
			info.el.style.borderColor = unavailable;
			const day = String(info.event.start.getDate()).padStart(2, "0");
			const month = String(info.event.start.getMonth()).padStart(2, "0");
			const year = String(info.event.start.getFullYear()).padStart(2, "0");
			const hour = String(info.event.start.getHours()).padStart(2, "0");
			const minutes = String(info.event.start.getMinutes()).padStart(2, "0");
			info.event.setExtendedProp("available", false);

			openSnackbar(`scheduled: ${day}/${month}/${year} ${hour}:${minutes}hrs`)
		} else {
			openSnackbar("Unavailable time");
		}
	}

	useEffect(() => {
		dataEvents.map((c) => {
			if (!c.available) {
				c.color = unavailable;
			}
		});

		setConverted(dataEvents);
	}, [dataEvents]);

	return (
		<>
			{convertedEvents && (
				<ContainerCalendar>
				<FullCalendar
					plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
					initialView="timeGridWeek"
					hiddenDays={[0, 6]}
					allDaySlot={false}
					height= "22rem"
					width="31rem"
					aspectRatio="3"
					expandRows={true}
					header={{
						center: 'title',
						right: 'prev,next'
					}}
					headerToolbar={{
						start: 'title', 
						end: 'prev,next', // will normally be on the right. if RTL, will be on the left
					  }}
					slotMinTime="08:00:00"
					slotMaxTime="18:00:00"
					events={convertedEvents}
					eventColor="#7655e9"
					dateClick={handleDateClick}
					eventClick={handleEventClick}
				/>
				</ContainerCalendar>
			)}
		</>
	);
};
export default Booking