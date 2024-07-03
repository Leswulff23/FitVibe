import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import Home from "./scenes/home";
import Benefits from "./scenes/benefits";

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
    </div>
  )
}

export default App
