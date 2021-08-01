import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useSnackbar } from 'react-simple-snackbar';
import { OPTIONS_SNACKBAR, CLIENT_ID, API_KEY, CALENDAR_ID, DISCOVERY_DOCS, SCOPES } from "@constants/index"
import {  colors } from '@styles/index';

import dataEvents from "./mockedCalendar.json";

import {
	ContainerCalendar
} from './styles';

var gapi = false;
const Booking = () => {
	let [convertedEvents, setConverted] = useState([]);
	const [openSnackbar] = useSnackbar(OPTIONS_SNACKBAR)

	useEffect(() => {
		gapi = window.gapi;
	});

	useEffect(() => {
		dataEvents.map((c) => {
			if (!c.available) {
				c.color = colors.violet;
			}
		});
		setConverted(dataEvents);
	}, []);

	function sendAppointmentToCalendar(info) {
		return new Promise((resolve, reject) => {
			gapi.load("client:auth2", () => {

				gapi.client.init({
					apiKey: API_KEY,
					clientId: CLIENT_ID,
					discoveryDocs: DISCOVERY_DOCS,
					scope: SCOPES,
				});

				gapi.load("calendar", "v3");
				gapi.auth2
					.getAuthInstance()
					.signIn()
					.then(() => {
						let event = {
							summary: `Sessão Terapeuta`,
							start: {
								dateTime: info.event.startStr,
								timeZone: "America/Sao_Paulo",
							},
							end: {
								dateTime: info.event.endStr,
								timeZone: "America/Sao_Paulo",
							},
						};
						var request = gapi.client.calendar.events.insert({
							calendarId: CALENDAR_ID,
							resource: event,
						});

						request.execute((response) => {
							if (response.code == 400) {
								reject((err) =>
								openSnackbar("A error is ocurred")
								);
							} else {
								resolve(response);
							}
						});
					})
					.catch((err) => reject(err));
			});
		});
	}

	function handleEventClick(info) {
		toggleAvailabilityByProps(info);
	}

	function getAppointmentDate(info) {
		const day = String(info.event.start.getDate()).padStart(2, "0");
		const month = String(info.event.start.getMonth() + 1).padStart(2, "0");
		const year = String(info.event.start.getFullYear()).padStart(2, "0");
		const hour = String(info.event.start.getHours()).padStart(2, "0");
		const minutes = String(info.event.start.getMinutes()).padStart(2, "0");
		return `${day}/${month}/${year} ${hour}:${minutes}hrs`;
	}

	function toggleAvailabilityByProps(info) {
		if (info.event.extendedProps.available) {
			info.el.style.backgroundColor = colors.violet;
			info.el.style.borderColor = colors.violet;
			info.event.setExtendedProp("available", false);
			const appointment = getAppointmentDate(info);
			sendAppointmentToCalendar(info)
				.then((event) => {
					openSnackbar(`Scheduled time: ${appointment}`);
					window.open(event.htmlLink);
				})
				.catch(() =>
					openSnackbar("There was an error saving to your calendar ")
				);
		} else {
			openSnackbar("Unavailable hours");
		}
	}

	return (
		<>
			{convertedEvents && gapi && (
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
							end: 'prev,next',
						}}
						slotMinTime="08:00:00"
						slotMaxTime="18:00:00"
						events={convertedEvents}
						eventColor={colors.purple}
						eventClick={handleEventClick}
					/>
				</ContainerCalendar>
			)}
		</>
	);
};
export default Booking;
