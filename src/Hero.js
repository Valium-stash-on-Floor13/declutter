import Form from "./components/Form.js"


const Hero = () => {


  return (
<section className="pt-[100px] pb-[120px] max-w-6xl mx-auto flex justify-around px-30 items-">
  <img className="absolute z-[-2] left-0 t-[-20px] w-[170px] mt-10" src="./images/graphic.png" alt="" /> 
  <div className="shadow-black/20 shadow-lg form  bg-white rounded-[10px] ">
<Form/>
      </div>

<div className="details w-[40%]">
      <h2 className='text-[#142266] font-bold text-3xl mx-auto mb-[20px] max-w-xl'>Robust and low cost cleaning and decluttering</h2>
<ul className="points list-none mb-[100px]">
  <li className="">
    <img className="w-[18px] mr-1 inline-block mb-3 pt-2" src="./images/tick.png" alt="" />
    Professional Teams. Available all
across Germany
  </li>
  <li className="">
    <img className="w-[18px] mr-1 inline-block mb-3 pt-2"src="./images/tick.png" alt="" />
    Fast Delivery, Cheap Rates.
  </li>
  <li className="">
    <img className="w-[18px] mr-1 inline-block mb-3 pt-2"  src="./images/tick.png" alt="" />
    Vareity of Services
  </li>
  <li className="">
    <img  className="w-[18px] mr-1 inline-block mb-3 pt-2" src="./images/tick.png" alt="" />
    Secure Contracts and Invoicing
  </li>
  <li className="">
    <img className="w-[18px] mr-1 inline-block mb-3 pt-2" src="./images/tick.png" alt="" />
    Fast price determination
  </li>
  <li className="">
    <img className="w-[18px] mr-1 inline-block mb-3 pt-2" src="./images/tick.png" alt="" />
    100% Customer Satisfaction
  </li>

</ul>
<div className="disc relative flex justify-center items-center">
  <p className="absolute z-10 px-[60px] text-white font-semibold">40% OFF! ON ALL OUR SERVICES. OFFER VAILD TILL 6 JUNE</p>
  <img className="absolute z-0" src="./images/discount.png" alt="" />
</div>


      </div>
    </section>
  )
}

export default Hero