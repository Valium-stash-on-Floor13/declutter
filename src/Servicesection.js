import React from 'react'
import { useParams } from "react-router-dom";

 

const Servicesection = () => {
  let props = useParams()
  return (
   <section className='servbg'>
    <h2 className='text-white font-bold text-3xl text-center  max-w-xl'>
{props.servicename}, not a challange anymore
</h2>

   </section>
  )
}

export default Servicesection