import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png";
import Links from "./Links";
type Props = {
  selectedPage : string;
  setSelectedPage: (value: string) => void;
}

const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between"
  
    return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img src={Logo} alt="logo" />
            {/* RIGHT SIDE */}
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm `}>
               
                <Links page="Home" selectedPage={props.selectedPage} setSelectedPage={props.setSelectedPage} />
                <Links page="Benifits" selectedPage={props.selectedPage} setSelectedPage={props.setSelectedPage} />
                <Links page="Our Classes" selectedPage={props.selectedPage} setSelectedPage={props.setSelectedPage} /> 
                <Links page="Contact Us" selectedPage={props.selectedPage} setSelectedPage={props.setSelectedPage} />  
              </div>
              <div className={`${flexBetween} gap-8`}>
                <p> Sign In</p>
                <button>Become a Member</button>
              </div> 
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
