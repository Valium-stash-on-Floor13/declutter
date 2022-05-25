import { useParams } from "react-router-dom";

const HeroLocation = () => {
  let {locationname} = useParams()
    return (
    
      <section className="pt-[100px] pb-[120px] max-w-6xl mx-auto flex justify-around px-30 items-">
      
      <img className="absolute z-[-2] left-0 t-[-20px] w-[170px] mt-10" src="../images/graphic.png" alt="" /> 
       
  <div className="shadow-black/20 shadow-lg form  bg-white rounded-[10px] ">
         
  <form action="">
  <p className="borderradiusformtop inline-block text-white font-semibold px-4 py-4 bg-[#FFAD00] w-[100%] ">Complete these steps and leave the rest on us!</p>
  <div className="inside px-[30px] py-[20px]">
  <p className="text-center  text-sm mb-2 text-[#4A4A4A]">Step 1 of 3</p>
  
    <div className="bar mb-3 bg-[#E4E4E4] relative rounded-lg h-[6px]">
    <span className="absolute bg-[#61CEFB] rounded-lg h-[6px] w-[33.33%] l-0 t-0 b-0"></span>
    </div>
    <li className="list-disc font-semibold text-[#333333]"> Select the volume that needs to be cleared out
  </li>
  <small className="block mb-5 text-[#B6B6B6] font-semibold">Pick a rough estimate, our employees will assist you further</small>
  <div className="boxes mb-3  flex justify-around">
    <div> 
      <div className="mr-3 flex flex-col justify-end h-[100px] w-[100px] bg-white  border-2 border-[#FFAD00] box">
        <span className=" block bg-[#FFAD00] w-[100%] h-[30px] border-[2px] border-[#FFAD00]"></span>
      </div>
      <small className="mt-1 text-center block text-[#4A4A4A]">Low</small>
    </div>
  
    <div>
      <div className="mr-3 flex flex-col justify-end h-[100px] w-[100px] bg-white  border-2 border-[#FFAD00] box">
        <span className=" block bg-[#FFAD00] w-[100%] h-[50px] border-[2px] border-[#FFAD00]"></span>
      </div>
      <small className="mt-1 text-center block text-[#4A4A4A]">Average</small>
    </div>
  
    <div>
      <div className="mr-3 flex flex-col justify-end h-[100px] w-[100px] bg-white  border-2 border-[#FFAD00] box">
        <span className=" block bg-[#FFAD00] w-[100%] h-[80px] border-[2px] border-[#FFAD00]"></span>
      </div>
      <small className="mt-1 text-center block text-[#4A4A4A]">High</small>
    </div>
  
    
  </div>
  
  <li className="list-disc text-[#333333] font-semibold">Upload some pictures of your place</li>
  <small className="block mb-5 text-[#B6B6B6] font-semibold">You can upload  three images of your place at maximum</small>
  <div className="box relative mb-2">
  <input className=" filehide" type="file" name="file" id="file" accept="image/*"/>
  <label className="bg-[#FFAD00]/90 h-[80px] w-[100%] font-semibold text-lg px-[25px] rounded-lg border-2 border-solid border-black/20 text-white mb-[10px] t-0 b-0 l-0 r-0 flex justify-center items-center" htmlFor="file">Drag your images here or click to upload</label>
  </div>
  <button className=" block w-[100%] bg-[#5E94EB] py-1 text-white font-semibold">Submit</button>
  </div>
          </form>
        </div>
  
        <div className="details w-[40%]">
        <h2 className='text-[#142266] font-bold text-3xl mx-auto mb-[20px] max-w-xl'>Clearing & disposal in {locationname}</h2>
  <ul className="points list-none mb-[100px]">
    <li className="">
      <img className="w-[18px] mr-1 inline-block mb-3 pt-2" src="../images/tick.png" alt="" />
      Professional Teams. Available all
  across Germany
    </li>
    <li className="">
      <img className="w-[18px] mr-1 inline-block mb-3 pt-2"src="../images/tick.png" alt="" />
      Fast Delivery, Cheap Rates.
    </li>
    <li className="">
      <img className="w-[18px] mr-1 inline-block mb-3 pt-2"  src="../images/tick.png" alt="" />
      Vareity of Services
    </li>
    <li className="">
      <img  className="w-[18px] mr-1 inline-block mb-3 pt-2" src="../images/tick.png" alt="" />
      Secure Contracts and Invoicing
    </li>
    <li className="">
      <img className="w-[18px] mr-1 inline-block mb-3 pt-2" src="../images/tick.png" alt="" />
      Fast price determination
    </li>
    <li className="">
      <img className="w-[18px] mr-1 inline-block mb-3 pt-2" src="../images/tick.png" alt="" />
      100% Customer Satisfaction
    </li>
  
  </ul>
  <div className="disc relative flex justify-center items-center">
    <p className="absolute z-10 px-[60px] text-white font-semibold">40% OFF! ON ALL OUR SERVICES. OFFER VAILD TILL 6 JUNE</p>
    <img className="absolute z-0" src="../images/discount.png" alt="" />
  </div>
  
  
        </div>
      </section>
    )
  }
  
  export default HeroLocation