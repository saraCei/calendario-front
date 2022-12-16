import { createSlice } from "@reduxjs/toolkit"
import { addHours } from "date-fns";

const temporalEvent={

    _id: new Date().getTime(),
    title:'titulo desde store',
    description:'Descripción desde store',
    start: new Date(),
    end: addHours(new Date(),2), 
    user:{
    _id:'1234',
    name:'Usuario'
        }
    }

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [temporalEvent],
        activeEvent:null
    },
    reducers:{
        onSetActiveEvent:(state,{payload})=>{
            state.activeEvent=payload
        },
        onAddEvent:(state,{payload})=>{
            state.events.push(payload)
            state.activeEvent=null
        },
        onEditEvent:(state,{payload})=>{
            state.events=state.events.map(event=>{
                if(event._id===payload._id){
                    return payload
                }
                return event
            })
        },
        onDeleteEvent:(state)=>{
            if(state.activeEvent){
                state.events=state.events.filter(event=>event._id !== state.activeEvent._id)
                state.activeEvent=null
            }
        }

    }
})

export const {onSetActiveEvent, onAddEvent, onEditEvent, onDeleteEvent} = calendarSlice.actions;