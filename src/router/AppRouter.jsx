import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPages } from '../auth/pages'
import { CalendarPages } from '../calendar/pages'

export const AppRouter = () => {

    const authStatus= 'authenticated'//authenticate/not-authenticated

  return (
    <>
    <Routes>

        {
            (authStatus==='not-authenticated')
            ? <Route path='/auth/*' element={<LoginPages/>}/>
            : <Route path='/*' element={<CalendarPages/>}/>
        }
            <Route path='/*' element={<Navigate to='/auth/login'/>}/>
       
    </Routes>
    </>
  )
}
