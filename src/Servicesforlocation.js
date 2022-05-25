import { useParams } from "react-router-dom";


const Servicesforlocation = () => {
    let {locationname} = useParams()
  return (
    
<>
<h2 className='text-[#142266] font-bold text-3xl text-center mx-auto mb-[100px] max-w-xl'>Services We Provide</h2>
<section className="h-[350px] mb-[80px] mt-[50px] flex items-center justify-center mx-auto">
        <ul className="flex flex-col justify-center items-start  bg-gray-100 h-[350px] points list-none py-[20px] px-[30px]"> 
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

        <div className="box h-[350px] bg-[#FFAD00]  text-white font-semibold  py-[20px] px-[30px]">
            <h2 className="font-bold text-3xl text-center mx-auto mb-[50px] ">Contact Us</h2>

            <div className="mb-[30px]">
                <div className="flex  items-center mb-2">
            <img className=" w-[20px] block mr-2" src="../images/mailicon.png" alt="" />
                <p>services@entsorg-meister.com</p>
                </div>

            <div className="flex  items-center mb-2">
            <img className=" w-[20px] block mr-2" src="../images/clockicon.png" alt="" />
          <p>Mon – Sat  ||  8 a.m. – 8 p.m</p>
            </div>
            </div>
            <p className="font-bold mb-[20px]">BOOK YOUR SPOT! CALL US TODAY</p>
            <button className="transition-all shadow-lg shadow-[#0e59d3]-500/40 hover:shadow-[#5E94EB]/40 text-lg  bg-white py-2 font-semibold px-8 text-[#FFAD00] rounded-lg" ><img src="../images/phonealticon.png" className="w-[28px] inline mr-3"  alt="" /> Call us</button>

        </div>
    </section>
    </>
    
  )
}

export default Servicesforlocation