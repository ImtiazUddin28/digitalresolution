import { ShopContextProvider } from './context/ScheduleContext'
import ScheduleCalendar from './ScheduleCalendar/ScheduleCalendar'
import ScheduleDetails from './ScheduleDetails/ScheduleDetails'

const Schedule = () => {
  return (
    <ShopContextProvider>
      <div>
        <h1 className="font-bold text-3xl lg:text-5xl text-center text-blue-600 m-10">
          Schedule Call
        </h1>
        <div className="w-full lg:w-3/4 grid grid-cols-1 lg:grid-cols-2 mx-auto border-[1px] rounded">
          <div>
            <ScheduleDetails />
          </div>
          <div>
            <ScheduleCalendar />
          </div>
        </div>
      </div>
    </ShopContextProvider>
  )
}

export default Schedule
