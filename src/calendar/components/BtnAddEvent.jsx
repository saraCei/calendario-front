import { addHours } from "date-fns"
import { useUiStore, useCalendarStore } from "../hooks"


export const BtnAddEvent = () => {

    const {openModal} = useUiStore()
    const {setActiveEvent}=useCalendarStore()

    const handleNewEvent=()=>{
        setActiveEvent({
            title:'',
            description:'',
            starte: new Date(),
            end: addHours(new Date(),2),
            user:{
                _id:'1234',
                name:'Usuario'
            }
        })
        openModal()
            
    }

  return (
    <div className='d-grid'>
        <button
            className='btn btn-dark mb-5'
            onClick={handleNewEvent}
            >
            Crear nuevo evento</button>
    </div>  
  )
}
