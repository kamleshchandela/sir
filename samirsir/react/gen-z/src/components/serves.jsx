import {FaMicrosoft , FaGoogle , FaAmazon , FaApple , FaFacebook , FaGithub } from "react-icons/fa6"

const arr = [
  [
    <FaMicrosoft className="text-[3vw] cursor-pointer opacity-50 hover:opacity-100 hover:text-yellow-800" />,
    "Enterprise app development"
  ],
  [
    <FaGoogle className="text-[3vw] cursor-pointer opacity-50 hover:opacity-100 hover:text-yellow-800" />,
    "SEO and analytics integration"
  ],
  [
    <FaAmazon className="text-[3vw] cursor-pointer opacity-50 hover:opacity-100 hover:text-yellow-800" />,
    "Cloud infrastructure solutions"
  ],
  [
    <FaApple className="text-[3vw] cursor-pointer opacity-50 hover:opacity-100 hover:text-yellow-800" />,
    "iOS and Apple ecosystem development"
  ],
  [
    <FaFacebook className="text-[3vw] cursor-pointer opacity-50 hover:opacity-100 hover:text-yellow-800" />,
    "Social media marketing"
  ],
  [
    <FaGithub className="text-[3vw] cursor-pointer opacity-50 hover:opacity-100 hover:text-yellow-800" />,
    "Modern developer workflows"
  ]
];

function serves () {
    return (

        <>
         <div className="pl-[5vw] w-[100%] gap-[3vw] md:pl-[5vw] lg:pl-[7vw] mt-[5vw] flex flex-wrap h-[auto] md:pl-[5vw]">
            
            {
                arr.map((e,i)=>{
                    return(
                        <div className="w-[90vw] lg:w-[40vw] border-[0.2vw] rounded-[1vw] border-yellow-600 h-[auto] flex flex-wrap md:w-[90vw]">
                            <div className="w-[100%] h-[12vw] text-[8vw] md:w-[100%] md:h-[9vw] md:text-[5vw] lg:w-[5vw] lg:h-[100%] flex justify-center items-center text-[4vw] ">
                                {e[0]}
                            </div>
                            <div className="w-[100%] h-[auto] pb-[7vw] text-[3vw] justify-center p-[1vw] md:w-[100%] md:h-[auto] md:text-[3vw] md:p-[1vw] lg:w-[34vw] lg:text-[1.5vw] lg:h-[100%] lg:p-[2vw] flex lg:justify-start ">
                                {e[1]}
                            </div>
                        </div>
                    )
                })
            }
            
            
         </div>
        </>
    )
}

export default serves ;