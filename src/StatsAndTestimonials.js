
const StatsAndTestimonials = () => {
  return (
  <section className="pb-[100px] ">
    <svg className="mb-[-30px]"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1C1943" fill-opacity="1" d="M0,160L60,181.3C120,203,240,245,360,224C480,203,600,117,720,101.3C840,85,960,139,1080,160C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
 <div className="bg-[#1C1943] pt-[30px]">

    <h2 className='text-white font-bold text-3xl text-center mx-auto mb-[30px] max-w-xl'>Entsorg-Meister : Decluttering the decluttering process</h2>
  
  <h3 className='text-white text-xl text-center mx-auto mb-[30px] max-w-5xl'>More than 200,000 satisfied customers in Germany trust the services and expertise of the Entsorg-Meister  || City & Country®.</h3>

 <div className="stats mx-auto flex max-w-5xl justify-around mb-20">
   <div className="stat w-[120px]" >
     <img className="w-[120px] mb-4" src="./images/teams.png" alt="" />
     <p className="text-white font-semibold text-4xl text-center mb-1">723</p>
     <p className="text-[#D8D8D8] text-xl text-center">Our Teams</p>
   </div>
   
  
   <div className="stat stat w-[120px]" >
   <img className="w-[120px] mb-4" src="./images/clearingout.png" alt="" />
   <p className="text-white font-semibold text-4xl text-center mb-1">56,137</p>
   <p className="text-[#D8D8D8] text-xl text-center">Clearing out</p>
   </div>
   <div className="stat stat w-[120px]" >
   <img className="w-[120px] mb-4" src="./images/cities.png" alt="" />
   <p className="text-white font-semibold text-4xl text-center mb-1">2,136</p>
   <p className="text-[#D8D8D8] text-xl text-center">Cities & Municipalities</p>
   </div>

   <div className="stat stat w-[120px]" >
   <img className="w-[120px] mb-4" src="./images/locations.png" alt="" />
   <p className="text-white font-semibold text-4xl text-center mb-1">603</p>
   <p className="text-[#D8D8D8] text-xl text-center">Locations</p>
   </div>
   <div className="stat stat w-[120px]" >
   <img className="w-[120px] mb-4" src="./images/happycus.png" alt="" />
   <p className="text-white font-semibold text-4xl text-center mb-1">205,214</p>
   <p className="text-[#D8D8D8] text-xl text-center">Happy Customers</p>
   </div>

 </div>
 <h3 className='text-white text-xl text-center mx-auto max-w-5xl'> See what our customers have to say</h3>

</div>
<svg className="z-0"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1C1943" fill-opacity="1" d="M0,96L48,128C96,160,192,224,288,229.3C384,235,480,181,576,144C672,107,768,85,864,112C960,139,1056,213,1152,224C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
 
 <div className="flex justify-around items-center relative z-0">
<div className=" absolute top-[-36%] card w-[280px] h-[320px] shadow-lg shadow-black/30 rounded py-[20px] px-[20px]">
          
          <div className="flex justify-around mb-[20px]">
            <img className="" src="./images/user1.png" alt="" />
            <div className="review pt-3">
              <p>Christopher Kalbhenn</p>
              <img src="./images/5stars.png" alt=""/>
            </div>
          </div>
          <p>Punctual, very friendly, very tidy. Everything done to my complete satisfaction. If necessary again with pleasure!</p>
        </div>

        <div className=" card w-[280px] h-[320px] shadow-lg shadow-black/30 rounded py-[20px] px-[20px]">
        <div className="flex justify-around mb-[20px]">
            <img className="" src="./images/user2.png" alt="" />
            <div className="review pt-3">
              <p>Irene Kremer</p>
              <img src="./images/5stars.png" alt=""/>
            </div>
          </div>
 
          <p>Everything was correct, from order acceptance to advice and billing. The guys were on time, fast and did all the work to our satisfaction.</p>
        </div>

        <div className="card w-[280px] h-[320px] shadow-lg shadow-black/30 rounded py-[20px] px-[20px]">
        <div className="flex justify-around mb-[20px]">
            <img className="" src="./images/user3.png" alt="" />
            <div className="review pt-3">
              <p>Christopher Kalbhenn</p>
              <img src="./images/5stars.png" alt=""/>
            </div>
          </div>
          <p>Punctuality, speed, kitchen tidy after clearing out.
</p>
        </div>
 </div>
 </section>
  )
}

export default StatsAndTestimonials
