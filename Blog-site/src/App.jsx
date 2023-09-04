import Head from "./Components/Head"
import Image from "./Components/Image"
import Description from "./Components/Description"
import BorderVariation from "./Components/BorderVariation"
import MainSection from "./Components/MainSection"
import Profile from "./Components/Profile"
import Newsletter from "./Components/Newsletter"

const App = () => {
  return (
    <>
      <div className="main flex flex-col w-screen items-center justify-center">
        <Head />
        <Image />
        <Description />
        <BorderVariation />
        <MainSection />
        <Profile />
        <Newsletter />
      </div>
    </>
  )
}

export default App
