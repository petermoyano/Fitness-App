import { useState } from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png"
import Link from "./Link";
type Props = {
    selectedPage: string,
    setSelectedPage: (selectedPage: string) => void
}

export function Navbar ({selectedPage, setSelectedPage}) {
    const flexBetween = "flex items-center justify-between"
    return <><nav>
        <div
        className={`${flexBetween} fixed top-0 z-30 w-full py-6`}
        >
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* LEFT SIDE */}

                    <img alt="logo" src={Logo} />
                    {/* RIGHT SIDE */}
                    <div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
    <Link 
    page="Home" 
    selectedPage={selectedPage}
    SetSelectedPage={SetSelectedPage}/>
    <Link page="Benefits" selectedPage={selectedPage}
    SetSelectedPage={SetSelectedPage}/>
    <Link page="About" selectedPage={selectedPage}
    SetSelectedPage={SetSelectedPage}/>
    <Link page="Our Classes" selectedPage={selectedPage}
    SetSelectedPage={SetSelectedPage} />
    <Link page="Contact us" selectedPage={selectedPage}
    SetSelectedPage={SetSelectedPage} />
                        </div>
                        <div className={`${flexBetween} gap-8` }>
                            <p>Sign In</p>
                            <button>Become a member.</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    </>
}