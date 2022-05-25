import Gmap from "./Gmap"
import { useParams } from "react-router-dom";

const Locationservices = () => {
    let {locationname} = useParams()
  return (
      <>
    <section className='locationbg-1'>
    <h2 className='text-white font-bold text-3xl text-center  max-w-xl'>
    Clearing out, household resolutions and also estate administration in {locationname}.
</h2>

   </section>
   <section className="text-gray-700 font-semibold text-base text-center mx-auto mb-[100px] max-w-3xl">
        <div>
           <p className="my-[30px] max-w-4xl">We  take care of the complete dissolution of your household and the clean clearing of individual or complete residential and object areas. Professional disposal is also our top priority in {locationname}</p>
            <div className="box">
                <p className="border-t-[10px] border-orange-400 py-[20px] px-[30px] shadow-md shadow-gray-600/40 rounded-sm mb-[30px]">After a free inspection of your property or the residential or business areas to be cleared out, in {locationname} or the surrounding area of ​​{locationname} - we will discuss all the important details with you and make you a non-binding offer.
                </p>
            </div>
            <p  className="my-[30px] max-w-4xl">Our location in {locationname} and all other locations within a radius of 30 km can be found on this map.</p>
      <Gmap/>
        </div>
   </section>

    <section className='locationbg-2'>
    <h2 className='text-white font-bold text-3xl text-center  max-w-xl'>
    Clearing out and household liquidations - {locationname} at a glance

</h2>

   </section>

   <section>
   <section className="flex justify-between items-center pb-[150px] pt-[80px]">

<h3 className=" relative before-box text-4xl font-bold text-white w-[30%] bg-[#FFAD00] text-center py-[100px] px-[50px]">Services we Offer in {locationname}</h3>
<ul className="points list-none mr-[300px]">
        <li className="">
            <img className="w-[18px] mr-1 inline-block mb-3 pt-2" src="../images/tick.png" alt="" />
            Apartment Liquadation
        </li>
        <li className="">
            <img className="w-[18px] mr-1 inline-block mb-3 pt-2"src="../images/tick.png" alt="" />
            Cleaning out
        </li>
        <li className="">
            <img className="w-[18px] mr-1 inline-block mb-3 pt-2"  src="../images/tick.png" alt="" />
            House Clearance
        </li>
        <li className="">
            <img  className="w-[18px] mr-1 inline-block mb-3 pt-2" src="../images/tick.png" alt="" />
            Disposal of Kitchen
        </li>
        <li className="">
            <img className="w-[18px] mr-1 inline-block mb-3 pt-2" src="../images/tick.png" alt="" />
            Clearing out the Basement
        </li>
        <li className="">
            <img className="w-[18px] mr-1 inline-block mb-3 pt-2" src="../images/tick.png" alt="" />
            Clear out the garbage
        </li>

        </ul>
</section>

   </section>
   <section  className="text-gray-700 font-semibold text-base text-center mx-auto mb-[100px] max-w-3xl">
        <div>
           <p  className="my-[30px] max-w-4xl">Clearing out {locationname} –  The city of {locationname} looks back on a long tradition and is firmly rooted in {locationname} and all of  North Rhine-Westphalia . But because we don't want to stand still: As a result, we are constantly looking for the best solutions for {locationname} and North Rhine-Westphalia and its citizens when it comes to clearing out.</p>
            <div className="box border-t-[10px] border-orange-400 py-[20px] px-[30px] shadow-md shadow-gray-600/40 rounded-sm mb-[30px]">
                <p>In {locationname} and everywhere in the surrounding area, we take over the complete clearing out of your house, your apartment, but also the basement and the attic for you and guarantee you a professional and appropriate disposal. We would also be happy to make you an individual offer.</p>
            </div>
            <p className="my-[30px] max-w-4xl">We carry your bulky waste and/or old electronic devices out of your apartment in {locationname}, your basement or your attic. We do not leave the items carried  out  at the curb. Because the employees of the collection service always remove the bulky goods/old electronic devices directly. That's why you can easily order our clearing service in {locationname} and everywhere in the surrounding area.</p>
        
            <div className="box border-t-[10px] border-orange-400 py-[20px] px-[30px] shadow-md shadow-gray-600/40 rounded-sm mb-[30px]">
                <p>Clearing service always including arrival and departure.
                Working hours are not calculated by us in  {locationname} and the surrounding area. These are already included in the fixed price offer. </p>
            </div>
        </div>



   </section>

   </>
  )
}

export default Locationservices