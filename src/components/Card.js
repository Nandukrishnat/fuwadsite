const Card = (props)=>{
    let data = props.data;
    return(
        <div className="relative mb-8">
            <div className="z-10 absolute flex mx-4 py-2 justify-start items-end h-full w-full text-md text-white ">{data.name}</div>
            <img className="rounded-lg my-5 filter brightness-50" src={"./images/" + data.src} alt=""/>
        </div>
        
    )
}
export default Card;