import React, {useState} from 'react'
import { EventBox, Navbar } from '../components/'

import { dateFnsLocalizer } from 'react-big-calendar'
import Calendar from 'react-big-calendar/lib/Calendar'

import { format, parse, startOfWeek, getDay, addHours } from 'date-fns'
import esEs from 'date-fns/locale/es'
import {translateMessages} from '../helpers/translateMessages'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import { CalendarModal } from '../components/CalendarModal'



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

const eventsList = [
  {
    title:'titulo desde eventList',
    description:'Descripción desde eventList',
    start: new Date(),
    end: addHours(new Date(),2),
    user:{
      _id:'1234',
      name:'Usuario'
    }
  }
]

export const CalendarPages = () => {

  const [lastView, setLastView] =     
  useState(localStorage.getItem('lastView') || 'week')

  const eventStyleGetter=(event,start,end,isSelected)=>{

    const style={
      backgroundColor:'green',
    }

    return style
  }

  const onDblClick=(ev)=>{
    console.log(ev)
  }

  const onSelect=(ev)=>{
    console.log({click:ev})
  }

  const onViewChange=(ev)=>{
    console.log(ev)
    localStorage.setItem('lastView',ev)
  }

  return (
    <>
        <Navbar/>
        <div className='container my-5'>
           <Calendar
            culture='es'
            localizer={localizer}
            events={eventsList}
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

        </div>
    </>
  )
}

