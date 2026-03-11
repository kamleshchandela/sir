import {FaMicrosoft , FaGoogle , FaAmazon , FaApple , FaFacebook , FaGithub } from "react-icons/fa6"

function partnar () {
    return (
        <>
         <div className="w-[100%] h-[10vw] mt-[5vw] flex justify-center items-center text-[4vw] font-[800]">
            Trusted by 10K+ partners...
         </div>
         <div className="w-[100%] cursor-pointer gap-[5vw] h-[8vw] flex wrap justify-center items-center">
            <FaMicrosoft className="text-[4vw] opacity-50 hover:opacity-100 hover:text-yellow-800" />
            <FaGoogle className="text-[4vw] opacity-50 hover:opacity-100 hover:text-yellow-700" />
            <FaAmazon className="text-[4vw] opacity-50 hover:opacity-100 hover:text-yellow-700" />
            <FaApple className="text-[4vw] opacity-50 hover:opacity-100 hover:text-yellow-700" />
            <FaFacebook className="text-[4vw] opacity-50 hover:opacity-100 hover:text-yellow-700" />
            <FaGithub  className="text-[4vw] opacity-50 hover:opacity-100 hover:text-yellow-700" />
         </div>
        </>
    )
}

export default partnar ;

