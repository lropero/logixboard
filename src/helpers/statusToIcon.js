import React from 'react'
import { IoIosSad, IoIosShareAlt, IoMdCheckmarkCircleOutline, IoMdCloseCircleOutline, IoMdGlobe, IoMdTime, IoMdWarning } from 'react-icons/io'

import theme from 'logixboard/theme'

const statusToIcon = (status) => {
  switch (status.trim().toLowerCase()) {
    case 'arrived': return <IoMdCheckmarkCircleOutline style={{ color: theme.status.arrived }} />
    case 'cancelled': return <IoMdCloseCircleOutline style={{ color: theme.status.cancelled }} />
    case 'customs hold': return <IoMdWarning style={{ color: theme.status.customsHold }} />
    case 'in transit': return <IoMdTime style={{ color: theme.status.inTransit }} />
    case 'roll-over': return <IoIosShareAlt style={{ color: theme.status.rollOver }} />
    case 'transporterror': return <IoIosSad style={{ color: theme.status.transporterror }}  />
    default: return <IoMdGlobe />
  }
}

export default statusToIcon
