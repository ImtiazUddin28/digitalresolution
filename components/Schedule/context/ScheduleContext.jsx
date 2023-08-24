import { format } from 'date-fns'
import { createContext, useState } from 'react'

export const ScheduleContext = createContext(null)

export const ShopContextProvider = ({ children }) => {
  const [selected, setSelected] = useState(null)
  const [takenSchedule, setTakenSchedule] = useState('')
  const [selectedTimezone, setSelectedTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  )

  let footer = (
    <p className="mt-6 text-lg font-semibold text-blue-600">Pick a date</p>
  )
  if (selected) {
    footer = <p> {format(selected, 'PP')}</p>
  }

  const contextValue = {
    footer,
    selected,
    setSelected,
    takenSchedule,
    setTakenSchedule,
    selectedTimezone,
    setSelectedTimezone
  }

  return (
    <ScheduleContext.Provider value={contextValue}>
      {children}
    </ScheduleContext.Provider>
  )
}
