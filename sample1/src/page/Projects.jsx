import { useEffect, useState } from "react"
import NavBar from "../Components/NavBar"
import { getProjects } from "../api/api"
import ProjectCard from "../Components/ProjectCard"
import AddComponents from "../Components/Addcomponents"

const Projects=()=>{
  const [projectdata,setprojectdata]=useState(null)
  const fetchprojects = async ()=>{
    try{
      const {data} =await getProjects()
      setprojectdata(data);
    }
    catch(error)
    {
      console.log(error)
    }
  }
  console.log(projectdata)

  useEffect(() => {
    fetchprojects()
  }, [])
  if(!projectdata||projectdata.length===0)
  {
    return(
    <div className="w-screen h-[10%] flex justify-center items-center"><AddComponents fetchprojects={fetchprojects}/></div>
    )
  }
  return(
    <>
    <div className="w-screen h-screen flex flex-row flex-wrap gap-8 justify-center items-center">
      <div className="w-full h-[10%] flex justify-end items-center px-10">
        <AddComponents fetchprojects={fetchprojects} />
      </div>
      {
        projectdata.map((data, index) => (
          <ProjectCard title={data.title} desc={data.desc} key={index} pid={index} cover={data.coverimg} id={data.id} link={data.link} fetchprojects={fetchprojects} />
        ))
      }
    </div >

    {/* <Toaster richColors /> */}
  </>
  )
}
export default Projects
