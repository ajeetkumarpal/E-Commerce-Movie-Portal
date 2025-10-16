import { Link } from "react-router-dom";
function NavigationLink({text}){
    return(
        <>
        <Link to={`/${text}`} className="h-10 w-24 inline-block text-red-500 font-bold hover:border-b-4 text-center  hover:border-gray-200">{text}</Link>
        </>
    )
}
export default NavigationLink;