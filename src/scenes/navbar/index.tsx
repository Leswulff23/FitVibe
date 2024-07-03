import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
    isTopPage: boolean;
    selectedPage: string;
    setSelectedPage: (value: string) => void;
}

const Navbar = ({isTopPage, selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopPage ? "" :  "bg-primary-100 drop-shadow"

    return (
        <nav>
            {/* Desktop View */}
            <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-40 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* Left Side */}
                        <img alt="logo" src={Logo} />
                        
                        {/* Right Side */}
                        
                        {isAboveMediumScreens ? (
                                <div className={`${flexBetween} w-full`}>
                                    <div className={`${flexBetween} gap-8 text-sm`}>
                                        <Link 
                                            page="Home" 
                                            selectedPage={selectedPage}
                                            setSelectedPage={setSelectedPage}
                                        />
                                        <Link 
                                            page="Benefits" 
                                            selectedPage={selectedPage}
                                            setSelectedPage={setSelectedPage}
                                        />
                                        <Link 
                                            page="Our Classes" 
                                            selectedPage={selectedPage}
                                            setSelectedPage={setSelectedPage}
                                        />
                                        <Link 
                                            page="Contact Us" 
                                            selectedPage={selectedPage}
                                            setSelectedPage={setSelectedPage}
                                        />
                                    </div>
                                    <div className={`${flexBetween} gap-8`}>
                                        <p>Sign In</p>
                                        <ActionButton setSelectedPage={setSelectedPage}>Become a member</ActionButton>
                                    </div>
                                </div>
                            )
                            :
                            (
                                <button
                                    className="rounded-full bg-secondary-500 p-2"
                                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                                >
                                    <Bars3Icon className="h-6 w-6 text-white" />
                                </button>
                            )}
                    </div>
                </div>
            </div>
            
            {/* Mobile Menu */}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed right-0 bottom-0 z-50 h-full w-full bg-primary-100">
                    {/* Close Icon */}
                    <div className="flex justify-end p-12">
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className="h-6 w-6 text-gray-400"/>
                        </button>
                    </div>

                    {/* Menu Items */}
                    <div className="flex flex-col items-center justify-center text-2xl gap-10">
                        <Link 
                            page="Home" 
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Benefits" 
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Our Classes" 
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Contact Us" 
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                </div>

            )}
        </nav>
    )
}

export default Navbar
