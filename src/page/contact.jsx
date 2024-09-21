import { useState } from "react"
import NavBar from "../Components/NavBar"
import { useSelector } from "react-redux"
import { canceluser, stateuser } from "../redux/UserSlice"

function Contact() {

  const name=useSelector(stateuser)
  //console.log(name)
  return (
    <>
      <div className="h-[80vh] w-screen flex justify-center items-center -z-10">
        <button  className="bg-red-500 p-3 text-white w-32 rounded-sm"> Delete </button>
      <div>{name?.name||"hi"}</div>
      </div>
    </>
  )
}
export default Contact
