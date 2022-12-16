import { useDispatch, useSelector } from "react-redux"
import { onAddEvent, onSetActiveEvent, onEditEvent, onDeleteEvent } from "../../store/calendar/calendarSlice"

export const useCalendarStore = () => {

    const {events,activeEvent} = useSelector((state)=>state.calendar)
    const dispatch = useDispatch()

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent))
    }

    const startSavingEvent = async (calendarEvent) => {
        //TODO: solicitud a la API

        if(calendarEvent._id){
            //actualizar
            dispatch(onEditEvent({...calendarEvent})) //no es necesario dispersarlo
        }else{
            //creando
            dispatch(onAddEvent({_id:new Date().getTime(),...calendarEvent}))
        }

    }
        const startDeletingEvent=async()=>{
            dispatch(onDeleteEvent())
        }
    

  return {
    events, 
    activeEvent,
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
    hasActiveEvent:!!activeEvent
  }

}
