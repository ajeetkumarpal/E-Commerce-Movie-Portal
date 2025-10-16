function Button({text,onClick}){
    return(
        <>
        <button onClick={onClick} className="h-10 w-24 bg-blue-500  border-1 border-blue-700 mx-1 rounded-xs  text-white hover:bg-blue-900">{text}</button>
        </>
    )
}
export default Button;