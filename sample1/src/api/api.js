import axios from "axios";

const API="https://66ee89633ed5bb4d0bf13008.mockapi.io"

const getProjects =()=>axios.get(`${API}/projects`)
const getProjectsbyID=(id)=>axios.get(`${API}/projects/${id}`)
const addProjects=(projectdata)=>axios.post(`${API}/projects`,projectdata)
const editProjects=(id,projectdata)=>axios.put(`${API}/projects/${id}`,projectdata)
const deleteProjects=(id)=>axios.delete(`${API}/projects/${id}`)
export{getProjects,getProjectsbyID,addProjects,editProjects,deleteProjects}