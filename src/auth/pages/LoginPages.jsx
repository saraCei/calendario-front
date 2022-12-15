import React from 'react'

export const LoginPages = () => {
  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='col-md-6 border p-5'>
            <h2 className='mb-4'>Login</h2>
            <form action="">
              <input type="text" name='email' id='email' placeholder='email' className='form-control mb-2'/>
              <input type="text" name='password' id='password' placeholder='Contraseña' className='form-control mb-4'/>
              <div className='d-grid'>
                <button className='btn btn-dark btn-sm'>Registro</button>
              </div>
            </form>
        </div>

        <div className='col-md-6 border p-5'>
            <h2 className='mb-4'>Registro</h2>
            <form action="">
              <input type="text" name='nombre' id='nombre' placeholder='nombre' className='form-control mb-2'/>
              <input type="text" name='email' id='email' placeholder='email' className='form-control mb-2'/>
              <input type="text" name='password' id='password' placeholder='Contraseña' className='form-control mb-2'/>
              <input type="text" name='password' id='password' placeholder='Repite contraseña' className='form-control mb-4'/>
              <div className='d-grid'>
                <button className='btn btn-dark btn-sm'>Registro</button>
              </div>
            </form>
        </div>
      </div>

    </div>
  )
}
