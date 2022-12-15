import React from 'react'
import { AppRouter } from './router/AppRouter'

const App = () => {
  return (
    <>
      <header className='bg-dark text-center text-light py-3'>
          <div className='container'>
              <p className='display-4'>
                Práctica Calendario Eventos
              </p>
          </div>
      </header>

      <AppRouter/>

      <footer className='bg-dark text-center text-light'>
          <div className='container'>
              <p className='my-1'>
                Footer Eventos
              </p>
          </div>
      </footer>

    </>
  )
}

export default App
