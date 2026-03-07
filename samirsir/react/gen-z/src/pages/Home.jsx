import img1 from '../assets/hero.jpg'


function Home() {
    return (
        <>
            <div className="h-[80vw] mt-[35vw] lg:mt-[15vw] ml-[5vw] w-[90vw] lg:h-[30vw] ">
                <div className="bg-yellow-500 rounded-[10vw] h-[20vw] lg:rounded-[5vw] w-[100%] lg:h-[5vw] flex flex-wrap">
                    <div className="w-[100%]  lg:w-[30%] items-center flex h-[100%] justify-center">
                        <img src={img1} key={1} alt="" className="w-[15vw] h-[15vw] ml-[-30vw] lg:w-[4vw] border-black border-[2px] lg:ml-[-20vw] lg:h-[4vw] ml-[-0.5vw] absolute rounded-[50%]" />
                        <img src={img1} key={2} alt="" className="w-[15vw] h-[15vw] ml-[-15vw] lg:w-[4vw]  border-black border-[2px]  lg:ml-[-15vw] lg:h-[4vw] absolute rounded-[50%]" />
                        <img src={img1} key={3} alt="" className="w-[15vw] h-[15vw] ml-[0vw] lg:w-[4vw]  border-black border-[2px]  lg:ml-[-10vw] lg:h-[4vw] absolute rounded-[50%]" />
                        <img src={img1} key={4} alt="" className="w-[15vw] h-[15vw] ml-[13vw] lg:w-[4vw]  border-black border-[2px] lg:ml-[-5vw] lg:h-[4vw] absolute rounded-[50%]" />
                    </div>
                    <div className="w-[100%] text-[5vw] lg:text-[2vw]  justify-center flex items-center lg:w-[70%] h-[100%]">
                        my name is kamlesh chandela
                    </div>
                </div>
                <div className="mt-20 text-[6vw] w-[100%] h-[15vw]  flex justify-center lg:mt-0 items-center">
                    my name is kamlesh<span className='text-red-600 ml-2 mr-2 '> chandela</span>
                </div>
                <div className="h-[25vw] flex flex-wrap justify-center gap-[2vw] lg:h-[10vw] items-center">
                    <button className="bg-orange-400 text-white font-semibold py-2 px-6 rounded-lg hover:bg-orange-700 transition duration-300">
                        Click Me
                    </button>
                    <button className="bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-700 hover:transform:scale(1.5) transition duration-300">
                        Click Me
                    </button>
                </div>
            </div>

        </>
    )
}

export default Home;