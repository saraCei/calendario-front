import React, {useState} from 'react'
import { EventBox, Navbar, CalendarModal } from '../components/'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { format, parse, startOfWeek, getDay, addHours } from 'date-fns'

import esEs from 'date-fns/locale/es'
import {translateMessages} from '../helpers/translateMessages'

import { useUiStore, useCalendarStore } from '../hooks'
import { BtnAddEvent } from '../components/BtnAddEvent'
import { BtnDeleteEvent } from '../components/BtnDeleteEvent'

import 'react-big-calendar/lib/css/react-big-calendar.css'

const locales = {
  'es': esEs,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

// const eventsList = [
//   {
//     title:'titulo desde eventList',
//     description:'Descripción desde eventList',
//     start: new Date(),
//     end: addHours(new Date(),2),
//     user:{
//       _id:'1234',
//       name:'Usuario'
//     }
//   }
// ]

export const CalendarPages = () => {

  const [lastView, setLastView] =     
  useState(localStorage.getItem('lastView') || 'week')

  const {openModal} = useUiStore()
  const {events, setActiveEvent}=useCalendarStore()

  const eventStyleGetter=(event,start,end,isSelected)=>{

    const style={
      backgroundColor:'green',
    }
    return style
  }

  const onDblClick=(ev)=>{
    // console.log(ev)
    openModal()
  }

  const onSelect=(ev)=>{
    console.log({click:ev})
    setActiveEvent(ev)
  }

  const onViewChange=(ev)=>{
    console.log(ev)
    localStorage.setItem('lastView',ev)
  }

  return (
    <>
        <Navbar/>
        <div className='container my-5'>
          <BtnAddEvent/>
           <Calendar
            culture='es'
            localizer={localizer}
            // events={eventsList}
            events={events}
            starAccessor="start"
            endAccessor="end"
            style={{ height:500 }}
            defaultView = {lastView}
            eventPropGetter={eventStyleGetter}
            messages={translateMessages()}
            components={
              {event: EventBox}
            }
            onDoubleClickEvent={onDblClick}
            onSelectEvent={onSelect}
            onView={onViewChange}

           />

            <CalendarModal/>

            <BtnDeleteEvent/>

        </div>
    </>
  )
}

