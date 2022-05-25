import { Link } from "react-router-dom";

const Header = () => {

  return (

<nav className="relative">

<div className="fixed block bottom-[100px] right-[20px] z-[9999]">
  <button className="stickyshadow transition-all  hover:bg-[#ff9d1d] bg-[#FFAD00] py-2 font-semibold px-8 rounded-lg text-sm text-white" ><Link to="/get-a-quote">Get a Quote</Link></button>
  </div>

  <div className="contact-us bg-orange-950 flex  justify-around items-center w-[300px] mx-auto py-[8px] px-[20px] text-white font-bold text-sm text-center">
  <a href="tel:167676786876786"><img src="./images/phoneicon.png" className="w-[30px] cursor-pointer"  alt="" /> </a><span className="font-semibold text-lg">0800 - 70 111 77</span><img className="cursor-pointer w-[30px]" src="./images/copyicon.png" alt="" />
  </div>

  <div className="max-w-7xl mx-auto navbar py-4 px-10 flex justify-around items-center">
    
    <img className="h-[30px]" src="./images/logo.png" alt="" />
    <ul className="flex list-none text-base justify-between items-center semibold w-[420px]">
    
      <li className="transition-all hover:text-[#FFAD00] text-[#10152E] cursor-pointer mr-[28px] font-semibold"><Link to="/">Home</Link></li>
      <li className=" relative transition-all hover:text-[#FFAD00] text-[#10152E] cursor-pointer mr-[28px] font-semibold">Services<img className="inline-block w-[12px] ml-2" src="./images/arrow-down.png" alt="" />
      <ul className="submenu z-[999] bg-white w-[200px] text-[#575757] absolute  blackshadow flex flex-col items-start text-sm">    
        <li className="py-2 w-[100%] px-[20px]"><Link to="/service/Clearing out">Clearing out</Link></li>
        <li className="py-2 w-[100%] px-[20px]"><Link to="/service/House Clearance">House Clearance</Link></li>
        <li className="py-2 w-[100%] px-[20px]"><Link to="/service/Apartment Liquadation">Apartment Liquadation</Link></li>
        <li className="py-2 w-[100%] px-[20px]"><Link to="/service/Dispose of Kitchen">Dispose of Kitchen</Link></li>
        <li className="py-2 w-[100%] px-[20px]"><Link to="/service/Clearing out the basement">Clearing out the basement</Link></li>
        <li className="py-2 w-[100%] px-[20px]"><Link to="/service/Clearing out the attic">Clearing out the attic</Link></li>
        <li className="py-2 w-[100%] px-[20px]"><Link to="/service/Container Service">Container Service</Link></li>
      </ul>
      </li>
      <li className="transition-all hover:text-[#FFAD00] text-[#10152E] cursor-pointer mr-[28px] font-semibold">Locations <img className="inline-block w-[12px] ml-2" src="./images/arrow-down.png" alt="" />
      <ul className="submenu z-[999] bg-white w-[200px] text-[#575757] absolute  blackshadow flex flex-col items-start text-sm">    
      
      

  <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Aichen">Aichen</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Andernach">Andernach</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Angermünde">Angermünde</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Anklam">Anklam</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Annaberg-Buchholz">Annaberg-Buchholz</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Annaburg">Annaburg</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Annweiler am Trifels">Annweiler am Trifels</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Ansbach">Ansbach</Link></li>
<li className="py-2 w-[100%] px-[20px]"><Link to="/location/Apolda"> Apolda</Link></li>
 <li className="py-2 w-[100%] px-[20px]"><Link to="/location/Arendsee (Altmark)">Arendsee (Altmark)</Link></li>


      </ul>
      </li>
      <li className="transition-all mr-[30px] bg-[#10152E] py-0 border-solid border-2 px-3 font-semibold border-[#10152E] rounded-xl cursor-pointer  text-white hover:text-[#10152E] hover:bg-white "><Link to="/blogs">Blogs</Link></li>
    </ul>

    <button className="transition-all shadow-lg shadow-[#0e59d3]-500/40 hover:shadow-[#5E94EB]/40 hover:bg-[#0e59d3] bg-[#5E94EB] py-2 font-semibold px-8 rounded-lg text-white" ><a href="tel:167676786876786"><img src="./images/phoneicon.png" className="w-[25px] inline mr-3"  alt="" />Shoot Us s Call</a></button>
  </div>

</nav>
  )
}

export default Header