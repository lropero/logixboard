import React from 'react'
import { IoMdAirplane, IoMdBoat, IoMdGlobe, IoMdTrain } from 'react-icons/io'

const modeToIcon = (mode) => {
  switch (mode.trim().toLowerCase()) {
    case 'air': return <IoMdAirplane />
    case 'rail': return <IoMdTrain />
    case 'sea': return <IoMdBoat />
    default: return <IoMdGlobe />
  }
}

export default modeToIcon
