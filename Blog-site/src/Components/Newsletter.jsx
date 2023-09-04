const Newsletter = () => {
    return (
        <>
            <div className="newsLetter sm:p-12 px-5 p-10 gap-7 bg-[#1F2937] flex flex-col justify-center items-center w-screen">
                <p className="text-white text-2xl sm:text-3xl">
                    Subscribe To Our NewsLetter
                </p>
                <input className="p-2 rounded-[4px] outline-none border-none w-[100%] " type="text" placeholder="Enter Your Email ID..." />
                <button className="bg-[#4ADE80] rounded-md p-1.5 px-7 sm:px-11 font-bold tracking-wide">Subscribe Now</button>
            </div>
        </>
    )
}
export default Newsletter
