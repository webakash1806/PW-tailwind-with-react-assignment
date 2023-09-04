import Img from "../assets/gettyimages-51937382-612x612.jpg"

const MainSection = () => {
    return (
        <>
            <div className="main flex flex-col-reverse justify-center items-center p-5 md:flex-row gap-5  lg:gap-8">
                <p className="lg:w-[25rem] md:w-[25rem] text-center md:text-right">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa quibusdam perspiciatis ea voluptates explicabo officiis doloribus distinctio autem, quidem ducimus rerum sunt perferendis modi at. Quis sapiente esse consectetur accusamus quas? Consequatur sit quia rem harum velit nulla fuga? Voluptatem, placeat esse aliquam animi odit perferendis atque aspernatur sapiente expedita repellat error deserunt est? Iusto natus saepe mollitia sunt ex, labore corrupti voluptate expedita! Doloremque eius qui eos vero accusamus ipsam repellendus similique est, harum dolores magnam laborum praesentium molestias sit modi mollitia exercitationem illo quidem, adipisci quaerat quos! Deserunt aliquid assumenda, molestias voluptate reprehenderit architecto. Dolor quisquam debitis aut!</p>
                <img className="w-[23rem] h-[23rem] sm:w-[25rem] sm:h-[25rem] object-cover lg:w-[32rem]" src={Img} alt="" />
            </div>
        </>
    )
}

export default MainSection
