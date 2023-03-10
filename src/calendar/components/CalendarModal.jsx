import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import DatePicker, {registerLocale} from "react-datepicker";
import { addHours, differenceInSeconds } from 'date-fns';
import es from 'date-fns/locale/es';


import "react-datepicker/dist/react-datepicker.css";
import './CalendarModal.css'
import { useUiStore, useCalendarStore } from '../hooks';



registerLocale('es', es)

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
Modal.setAppElement('#root')

export const CalendarModal = () => {

  const {isModalOpen, closeModal} = useUiStore()
  // const [isOpen, setIsOpen] = useState(true)

  const {activeEvent,startSavingEvent}=useCalendarStore()

  const [error, setError] = useState([])

  const [formValues, setFormValues] = useState({
    title: 'titulo del evento',
    description: 'descripcion del evento',
    start: new Date(),
    end: addHours(new Date(), 2)
  })

  useEffect(()=>{
    if(activeEvent!==null){  // = cuando haya un evento seleccionado
      setFormValues({
        ...activeEvent})
    }
  },[activeEvent]) 

  const onCloseModal=()=>{
    console.log('cerrando modal')
    closeModal()
  }

  const handleInputChange=({target})=>{
    setFormValues({
      ...formValues, [target.name]:target.value
    })
  }

  const handleDateChange=(date,field)=>{
    setFormValues({
      ...formValues,
      [field]:date
    })
  }

  const handleSubmit=(ev)=>{
    ev.preventDefault()

    setError([]); //setear los errores

    const difference = differenceInSeconds(formValues.end, formValues.start);


    if(isNaN(difference) || difference<=0 || formValues.title.trim().length<=0){

      if(isNaN(difference) || difference<=0) setError((er)=>[...er, 'Las fechas no son correctas'])
      if(formValues.title.trim().length<=0) setError((er)=>[...er, 'Debes escribir el título'])
      return 
    }

    startSavingEvent(formValues)
    // setIsOpen(false)
    closeModal()
  }


  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={onCloseModal}
        // onAfterOpen={afterOpenModal}
        style={customStyles}
        contentLabel="Example Modal"
        className="modal"
        overlayClassName="modal-fondo"
      >

        <h2>Añadir Evento</h2>
        <hr />
        
        <form onSubmit={handleSubmit} className='container' autoComplete='off'>
          <div className='form-group mb-4'>
            <label>Inicio</label>
            <DatePicker 
              selected={formValues.start} 
              className='form-control'
              dateFormat='Pp'
              locale="es"
              showTimeSelect
              timeCaption='Hora'
              onChange={(date) => handleDateChange(date,'start')}
               />
          </div>

          <div className='form-group mb-4'>
            <label>Finalización</label>
            <DatePicker 
              minDate={formValues.start}
              selected={formValues.end} 
              className='form-control'
              dateFormat='Pp'
              locale="es"
              showTimeSelect
              timeCaption='Hora'
              onChange={(date) => handleDateChange(date,'end')}
               />
          </div>

          <div className='form-group mb-4'>
            <label>Título</label>
            <input 
              type="text"
              className= "form-control"
              placeholder='Título del evento'
              name='title'
              value={formValues.title}
              onChange={handleInputChange}
              />
          </div>

          <div className='form-group mb-4'>
            <label>Descripción</label>
            <textarea
              type="text"
              rows='4'
              className= "form-control"
              placeholder='Descripción del evento'
              name='description'
              value={formValues.description}
              onChange={handleInputChange}
              />
          </div>

          <div className='mb-4'>
              <ul>
                {
                  error.length>0 && (
                    error.map(er=>(
                      <li key='er'>{er}</li>
                      ))
                  )
                }
              </ul>
          </div>

          <div className='d-grid'>
            <button 
              className='btn btn-dark sm'
              type='submit'
              >Guardar
            </button>
          </div>


          
        </form>

      </Modal>
      
      
    </>
  )
}
