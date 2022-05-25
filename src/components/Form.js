import React, {useState} from 'react'
import FirstForm from "./FirstForm.js"
import SecondForm from "./SecondForm.js"
import ThirdForm from "./ThirdForm.js"
import Welcome from './Welcome.js'
const Form = () => {
    const [page, setPage] = useState(0);

    const FormTitles = ["First Form", "Second Form", "ThirdForm", "Welcome"];

    const PageDisplay = () => {
        if (page === 0){
            return <FirstForm/>;
        }
        else if (page === 1){
            return <SecondForm/>;
        }
        else{
            return <ThirdForm/>;
        }

    };
  return (


    <>
        {/* <form> */}
        
        {page <=2 &&   <p className="borderradiusformtop inline-block text-white font-semibold px-4 py-4 bg-[#FFAD00] w-[100%] ">Complete these steps and leave the rest on us!</p> }
        {page === 3 &&   <p className="borderradiusformtop inline-block text-white font-semibold px-4 py-4 bg-[#64e003] w-[100%] ">Congratulations! You have completed all the steps</p> }

         
            <div className="inside px-[30px] py-[20px]">
               
            {page <=2 &&   <p className="text-center  text-sm mb-2 text-[#4A4A4A]">Step {page +1 } of 3</p> }
          
            {page <=2 &&  <div className="bar mb-3 bg-[#E4E4E4] relative rounded-lg h-[6px]">
                    <span style={{width: page ===0 ? "33.33%" : page === 1 ? "66.66%" : "100%"}}
                    className="absolute bg-[#61CEFB] rounded-lg h-[6px] l-0 t-0 b-0"></span>
                </div>}
               {page === 0 && <FirstForm/>}
               {page === 1 && <SecondForm/>}
               {page === 2 && <ThirdForm/>}
               {page === 3 && <Welcome/>}
                <div className='flex justify-around items-center'>
                <button  
                    disabled={page === 0 || page === 3}
                    onClick={()=> {
                        setPage((currPage)=>currPage-1);
                    }}
                    className="block w-[100%] bg-[#5E94EB] py-1 text-white font-semibold mx-1">
                    Prev
                </button>
                <button 
                    disabled={page === FormTitles.length -1}
                    onClick={()=> {
                        setPage((currPage)=>currPage+1);
                    }}
                    className=" block w-[100%] mx-1 bg-[#5E94EB] py-1 text-white font-semibold">
                    Next
                </button>
                </div>
            </div>
        {/* </form> */}
    </>
  )
}

export default Form



