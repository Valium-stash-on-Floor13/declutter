const Contact = () => {
  return (
 <section className="py-[80px]">
<h2 className='text-[#142266] font-bold text-3xl text-center mx-auto mb-[80px] max-w-xl'>Contact Us</h2>
<div className="container w-[600px] mx-auto my-[10px] p-[65px] bg-[#6fa1f0] rounded shadow-black/20 shadow-md text-white">
<form action="">
    <div className="form-group">
        <label htmlFor="">Name</label>
        <input type="text" />
        <small>Enter your name here</small>
    </div>
    <div className="form-group">
        <label htmlFor="">Email</label>
        <input type="text" />
        <small>Enter your email addresss</small>
    </div>
    <div className="form-group">
        <label htmlFor="">Phone</label>
        <input type="text" />
        <small>Enter your phone number here</small>
    </div>
    <div className="form-group">
        <label htmlFor="">Pincode</label>
        <input type="text" />
        <small>Enter your area's pincode here</small>
    </div>
    <div className="form-group">
        <label htmlFor="">Query</label>
       <textarea name="" id="" cols="30" rows="5"></textarea>
        <small>Enter your query here</small>
    </div>
    <button className="transition-all shadow-md shadow-[#white]-500/20 hover:shadow-[white]/20 text-lg  bg-white py-2 font-semibold px-8 text-[#6fa1f0] rounded-lg" >Submit</button>

</form>
</div>
 </section>
  )
}

export default Contact