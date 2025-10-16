
function Movie({title,image}){
  
    return(
        <div className="h-70 w-82 mx-2">
    <h1 className="text-center text-gray font-bold px-2 py-2 mx-4">{title}</h1>
    <img src={image} alt="" className="h-50 w-80"/>
        </div>
    )
}
export default Movie;