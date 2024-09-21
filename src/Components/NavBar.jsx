import { Minus, User2 } from "lucide-react";
import { useRef, useState } from "react";
import{Link,NavLink} from "react-router-dom"

import { useDispatch } from "react-redux";
import { login } from "../redux/UserSlice";
const NavBar=()=>{
  
  const emailref=useRef(null)
  const passwordref=useRef(null)
  const nameref=useRef(null)
  const dispatch=useDispatch()
  const handle=(e)=>
  {
    e.preventDefault()
    dispatch(login({
      name:nameref.current.value,
      email:emailref.current.value,
      password:passwordref.current.value
    }))
  }
    const NavLinks=[{
        title:"Page",
        path:"/"
    },
    {
        title:"Projects",
        path:"/Project"
    },
    {
        title:"contact",
        path:"/contact"
    }
    ]
    const [visible,setvisible]=useState(false)
    return(
        <>
        <div className="bg-white flex h-[3.5rem] w-screen justify-center items-center shadow-md">
            <div className=" w-[65%] bg-white  flex justify-start items-center shadow-2xl">
                <div className="w-[80%] flex items-center px-6">WEBSITE</div>
            </div>
            <div className="bg-white flex  flex-row w-[35%] items-center justify-center gap-20">
            <ul className="flex flex-row justify-center gap-7">{ 
            NavLinks.map((navdata, index)=>(
                                    <NavLink key={index} to={navdata.path}>
                                        <div className='font-bold text-xl text-zinc-950'>{navdata.title}</div>
                                    </NavLink>
                                ))
            }
            </ul>
            <User2 className='h-9 w-10 text-zinc-950 rounded-full border-2 border-white hover:bg-white  hover:border-zinc-950 hover:text-zin' onClick={() => setvisible(true)} />
            </div>
        </div>
        {
      visible && (
        <>
          <div className="h-screen w-screen flex items-center absolute justify-center z-40 bg-black/30">
            <div className="h-[50%] w-[25%] flex z-50 bg-black/40 flex-col rounded-md">
            <div className="h-[10%] flex items-end justify-end w-[95%]"><Minus className="border-2 border-black rounded-xl size-6 bg-slate-300/15" onClick={()=>{setvisible(!visible)}}/></div>
                      <form action="submit" className="gap-5 flex justify-center items-center flex-col h-[80%] w-full" onSubmit={handle} >
                          <div className="flex text-white/70 text-2xl">Login</div>
                            <input type="text" ref={nameref} placeholder='name' className=' p-3 text-black  bg-white/50 rounded-md w-[50%] shadow-lg outline-none active:outline-none ' />
                            <input type="name" ref={emailref} placeholder='email' className=' p-3 text-black bg-white/50 rounded-md  w-[50%] shadow-lg outline-none ' />
                            <input type="phone" ref={passwordref} placeholder='phone' className='  p-3 text-black bg-white/50 rounded-md w-[50%] shadow-lg outline-none ' />
                            <div className="flex items-center justify-center flex-row gap-6 w-full"><button className=' text-black bg-white/50 w-[20%] shadow-xl rounded-sm' type="submit">submit</button>
                            <button className=' text-black bg-white/50 w-[20%] shadow-xl rounded-sm' type="submit">Lagout</button>
                            </div>
                          </form> 
            </div>
          </div>
        </>
        )
        }
        </>
    )
}
export default NavBar;