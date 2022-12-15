import React from 'react'

export const EventBox = ({event}) => {
  return (
    <>
        <span>{event.title} - {event.user.name} </span>
    </>
  )
}
