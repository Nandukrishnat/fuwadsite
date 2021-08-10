const Card = (props)=>{
    let data = props.data;
    return(
        <div className="relative mb-8">
            <img className="rounded-lg my-5" src={"./images/works/" + data.src} alt={data.src}/>
            <div className="z-10 p-4 bottom-0 absolute w-full text-md md:text-lg text-white bg-gradient-to-t from-black to-transparent rounded-lg">{data.name}</div>
        </div>
        
    )
}
export default Card;