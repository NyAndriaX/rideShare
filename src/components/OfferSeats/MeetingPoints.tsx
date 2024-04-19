import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ListMeetingPoints from './MeetingPoints/ListMeetingPoints'
import ChangeMeetingPoints from './MeetingPoints/ChangeMeetingPoints'

const MeetingPoints: React.FC = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<ListMeetingPoints />} />
        <Route path='/change' element={<ChangeMeetingPoints />} />
      </Routes>
    </React.Fragment>
  )
}

export default MeetingPoints
