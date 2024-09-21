import NavBar from "../Components/NavBar";
import Cat from '../assets/img/cat.png'
const Page=()=>{
    return(
        <>
        <div className="h-screen w-screen flex flex-row">
            <div className="h-[100vh] w-[40%] flex items-center justify-end bg-white/5">
                <div className="h-[80%] w-[90%] flex items-center justify-center shadow-md shadow-black/15"><img src={Cat}></img></div>
            </div>
            <div className="h-[100%] w-[60%] flex flex-row bg-white/5 items-center justify-start">
                    <div className="h-[100%] w-[90%] flex flex-row items-center justify-center bg-white/5">
                        <div className="w-[100%] h-[80%] flex gap-8 flex-col shadow-md shadow-black/15">
                            <div className=" h-[20%] w-[100%] flex justify-center items-center ">
                                    <div className="w-[80%] h-[50%] flex justify-start items-start flex-col font-bold text-2xl">AKASH KUMAR S</div>
                            </div>
                            <div className=" h-[60%] flex items-center justify-center flex-col">
                                        <div className="w-[80%] h-[20%] flex ">
                                            <div className="font-bold text-2xl">Discription :</div>
                                        </div>
                                        <div className="w-[80%] h-[80%] flex justify-end ">
                                            <div className="w-[80%] text-justify font-semibold text-lg">I'm currently pursuing Third-year IT student and proficient in the MERN stack and Spring framework, with a strong focus on data structures and algorithms. Demonstrates a commitment to mastering key technologies and enhancing problem-solving skills. Eager to apply knowledge and drive innovation in a dynamic software development environment.</div>
                                        </div>
                            </div>
                    <div className="h-[15%]  flex items-center justify-center flex-col">
                        <div className="h-[80%] w-[80%] flex text-start justify-start">
                            <div className="flex items-center justify-start w-full h-full ">hi fkfskhj</div>
                            </div>
                        </div>   
                        </div>
                    </div>
            </div>
        </div>
        </>
    )
}
export default Page;