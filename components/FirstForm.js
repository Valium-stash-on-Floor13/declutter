import React , { useState } from 'react'

const FirstForm = () => {
       
    const [showone, setShowone] = useState(false)
    const [showtwo, setShowtwo] = useState(false)
    const [showthree, setShowthree] = useState(false)
  
    const [upload, setUpload] = useState(null)

  
  return (
  <>

  
<li className="list-disc font-semibold text-[#333333]"> Select the volume that needs to be cleared out</li>
    <small className="block mb-5 text-[#B6B6B6] font-semibold">Pick a rough estimate, our employees will assist you further</small>

    <div className=" boxes mb-3  flex justify-around">
        <div>
            <div onClick={()=>setShowone(!showone)} className="relative mr-3 flex flex-col justify-end h-[100px] w-[100px] bg-white  border-2 border-[#FFAD00] box">
                { showone? <span><img className=' w-[30px] absolute top-[0] right-[0]' src="./images/greentick.png" alt="" /></span>: null}
                <span className=" block bg-[#FFAD00] w-[100%] h-[30px] border-[2px] border-[#FFAD00]"></span>
            </div>
            <small className="mt-1 text-center block text-[#4A4A4A]">Low</small>
        </div>
        <div>
            <div onClick={()=>setShowtwo(!showtwo)} className=" relative mr-3 flex flex-col justify-end h-[100px] w-[100px] bg-white  border-2 border-[#FFAD00] box">
    { showtwo? <span><img className=' w-[30px] absolute top-[0] right-[0]' src="./images/greentick.png" alt="" /></span>: null}

    <span className=" block bg-[#FFAD00] w-[100%] h-[50px] border-[2px] border-[#FFAD00]"></span>
            </div>
            <small className="mt-1 text-center block text-[#4A4A4A]">Average</small>
        </div>

        <div>
            <div onClick={()=>setShowthree(!showthree)} className=" relative mr-3 flex flex-col justify-end h-[100px] w-[100px] bg-white  border-2 border-[#FFAD00] box">
        { showthree? <span><img className=' w-[30px] absolute top-[0] right-[0]' src="./images/greentick.png" alt="" /></span>: null}

            <span className=" block bg-[#FFAD00] w-[100%] h-[80px] border-[2px] border-[#FFAD00]"></span>
            </div>
            <small className="mt-1 text-center block text-[#4A4A4A]">High</small>
        </div>
    </div>

    <li className="list-disc text-[#333333] font-semibold">Upload some pictures of your place</li>
    <small className="block mb-5 text-[#B6B6B6] font-semibold">You can upload  three images of your place at maximum</small>
    <div className="box relative mb-2">
        { upload? <p className='mb-[20px]'><img src="./images/selected.png" alt="" /></p> : null}<input className=" filehide" type="file" name="file[]" id="file" accept="image/*"/>
        <label onClick={()=>setUpload(upload+1)} className="bg-[#FFAD00]/90 h-[80px] w-[100%] font-semibold text-lg px-[25px] rounded-lg border-2 border-solid border-black/20 text-white mb-[10px] t-0 b-0 l-0 r-0 flex justify-center items-center" htmlFor="file">Drag your images here or click to upload</label>
    </div>
  </>
  )
}

export default FirstForm

