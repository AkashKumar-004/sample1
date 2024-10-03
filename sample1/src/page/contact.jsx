import { useState } from "react"
import NavBar from "../Components/NavBar"
import { useSelector } from "react-redux"
import { canceluser, stateuser } from "../redux/UserSlice"
import { Facebook, FacebookIcon, Instagram, Linkedin, LucideFacebook, Mail, Phone, X } from 'lucide-react'
function Contact() {

  const name=useSelector(stateuser)
  //console.log(name)
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center bg-black/85">
        <div className="h-screen w-[50%] flex flex-col items-end justify-center">
          <div className="flex flex-col items-end justify-center h-[80%] w-[90%] bg-white/10">
            <div className="h-[90%] w-[90%]">  
                <div className="font-bold text-2xl h-[10%] w-[100%] text-white">CONTACT US!</div>
                <div className="font-thin text-lg h-[10%] w-[100%] text-white">We can't solve your problem if you don't tell us about it</div>
                <div className="h-[15%] w-[100%] flex items-center justify-start"><input type="text" placeholder="Your Name" className=" h-[60%] border-2 w-[90%]"/></div>
                <div className="h-[15%] w-[100%] flex items-center justify-start"><input type="text" placeholder="Your Name" className=" h-[60%] border-2 w-[90%]"/></div>
                <div className="h-[40%] w-[100%] flex items-center justify-start"><input type="text" placeholder="Your Name" className=" h-[90%] border-2 w-[90%]"/></div>
                <div className="h-[10%] w-[100%] flex items-center justify-start"><button className=" h-[60%] w-[15%] bg-red-600 rounded-sm text-white">SEND</button></div>
            </div>
          </div>
        </div>
        <div className="h-screen w-[50%] flex flex-col items-start justify-center">
          <div className="flex flex-col items-end justify-center h-[80%] w-[90%] bg-white/10">
            <div className="h-[90%] w-[90%] flex flex-col items-start justify-center">
              <div className="h-[55%] w-full">
                    <div className="text-white  w-full h-full">
                        <div className="flex gap-5 w-full h-[20%]">
                          <div className=""><Phone/></div>
                          <div className="">91+ 8870823022</div>
                        </div>
                        <div className="flex gap-5 w-full h-[20%]">
                          <div className=""><Mail/></div>
                          <div className="">akashkumar004@gmail.com</div>
                        </div>
                        <div className="flex flex-row gap-5 w-full h-[50%]">
                          <div className=" text-black bg-white h-6 w-6 rounded-sm"><Facebook/></div>
                          <div className="text-black bg-white h-6 w-6 rounded-sm"><Linkedin/></div>
                          <div className="text-black bg-white h-6 w-6 rounded-sm"><X/></div>
                          <div className="text-black bg-white h-6 w-6 rounded-sm"><Instagram/></div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Contact
