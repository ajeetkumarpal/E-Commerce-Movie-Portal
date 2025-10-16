import Button from "./button";
import Logo from "./logo";
import NavigationLink from "./navigationLink";
import ProfileImg from "./profile";
import Search from "./search";
import { Link } from "react-router-dom";

function Navbar() {
  const logo="images/logoecommerce.png";
  const profile="images/user.png";
  return (
    <div className="flex justify-around items-center h-20 bg-gray-800 ">
      {/*logo */}
      <Logo img={logo} />

      {/*logo */}
   <Search/>

      {/*navigation link using react router dom */}
     <div className="flex justify-around items-center ml-4 mr-4 mt-3 " >
       <NavigationLink text="Home" />
      <NavigationLink text="About" />
      <NavigationLink text="Category" />
      <NavigationLink text="Contact" />
     </div>

      {/*button */}
   <div className="flex justify-around items-center ml-2 mr-2">
      <Link to="/register"> <Button text={"Register"}/></Link>
      <Link to="/login"><Button text={"Login"} /></Link>
      <Link to="/profile"><ProfileImg img={profile}/></Link>
   </div>

    </div>
  )
}
export default Navbar;