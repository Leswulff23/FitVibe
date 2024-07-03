import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import Home from "./scenes/home";
import Benefits from "./scenes/benefits";
import OurClasses from "./scenes/Classes";
import ContactUs from "./scenes/Contacts";
import Footer from "./scenes/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState("home")
  const [isTopPage, setIsTopPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopPage(true);
        setSelectedPage("home")
      }
      
      if (window.scrollY !== 0) {
        setIsTopPage(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("sroll", handleScroll)
  }, [])

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopPage = {isTopPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer/>
    </div>
  )
}

export default App
