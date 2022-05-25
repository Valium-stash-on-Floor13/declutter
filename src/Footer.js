import { Link } from "react-router-dom";

const Footer = () => {
    const today=new Date();
  return (

    <footer >
        <svg className="mb-[-10px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1c1943" fill-opacity="1" d="M0,160L80,181.3C160,203,320,245,480,234.7C640,224,800,160,960,128C1120,96,1280,96,1360,96L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
       
       <div className="relative bg-[#1C1943] text-[#EBEBEB] pb-6">
           <div className=" flex justify-between py-10 px-5 max-w-7xl mx-auto">

            <ul className="footer-links list-none">
                <h4 className="text-base font-semibold mb-1 text-white" >Sitemap</h4>
                <li className="footer-link mr-4 hover:underline md:mr-6"><Link to="/"> Home</Link></li>
                <li className="footer-link mr-4 hover:underline md:mr-6"><Link to="/service/Clearing out">Services</Link></li>
                <li className="footer-link mr-4 hover:underline md:mr-6"><Link to="/location/Aichen">Locations</Link></li>
                <li className="footer-link mr-4 hover:underline md:mr-6"><Link to="/blogs">Blogs</Link></li>
            </ul>

            <ul className="footer-links">
                <h4 className="text-base font-semibold mb-1 text-white">Info</h4>
                <li className="footer-link mr-4 hover:underline md:mr-6"><Link to="/contact">Contact</Link></li>
                <li className="footer-link mr-4 hover:underline md:mr-6"><Link to="/impressum">Impressum</Link></li>
                <li className="footer-link mr-4 hover:underline md:mr-6"><Link to="/privacy">Privacy Policy</Link></li>
                <li className="footer-link mr-4 hover:underline md:mr-6"><Link to="/location/Aichen">Locations</Link></li>
            </ul>

            <ul className="footer-links">
                <h4 className="text-base font-semibold mb-1 text-white">Reach out to us</h4>
                <li className="footer-link mr-4 hover:underline md:mr-6"><img src="./images/phoneicon.png" className="w-[18px] cursor-pointer inline mr-2"  alt="" /> <span>+49 (0) 800 – 70 111 77</span></li>
                <li className="footer-link mr-4 hover:underline md:mr-6"><a href="mailto:services@entsorg-meister.com"><img src="./images/mailicon.png" className="w-[18px] cursor-pointer inline mr-2"  alt="" /><span> services@entsorg-meister.com</span></a></li>
                <li className="footer-link mr-4 hover:underline md:mr-6"><img src="./images/clockicon.png" className="w-[18px] cursor-pointer inline mr-2"  alt="" /> <span>Mon – Sat || 8 AM – 8 PM</span></li>

            </ul>

            <ul className="footer-links">
                <p><img className="h-[40px] mb-[10px]" src="./images/logo-light.png" alt="" /></p>
               <button className="transition-all shadow-md shadow-[#FFAD00]/30 hover:shadow-[#FFAD00]/60 text-base bg-[#FFAD00] py-2 font-semibold px-[50px] rounded text-white" ><Link to="/get-a-quote">Get a Quote</Link></button>

            </ul>


        </div>

        <p className="text-center font-semibold">Copyright &copy; {today.getFullYear()} Entsorg-Meister. All rights reserved.</p>
        </div> 
    </footer>
  )
}

export default Footer