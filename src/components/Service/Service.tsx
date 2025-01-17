'use client'
import ServiceCard from "../Card/ServiceCard"
import Typography from "../Typography"

const Service = () => {
  return (
    <div className="" id="service">
      <div className="h-full bg-slate-800 dark:bg-slate-300 text-slate-800 min-h-[90vh] dark:text-white px-0 pt-20 xl:px-20 lg:px-10 md:px-0 xm:px-0">
        <div className="flex justify-center items-center h-full">
          <Typography className="dark:text-slate-800 text-white" size="h3">Our Services</Typography>
        </div>
        <div className="flex p-10 h-full gap-10">
          
          <ServiceCard />
          
        </div>
      </div>
    </div>
  )
}

export default Service