const AboutCard = ({data})=>{
    return(
        <div className="flex flex-col bg-white p-4 my-6 w-5/6 rounded-2xl shadow-md">
            <div className="text-gray-700 text-sm">{data.status}</div>
            <div className="text-lg font-bold text-blue-500 pt-2">{data.title}</div>
            <div className="text-sm pt-2">{data.details}</div>
        </div>
    )
}
export default AboutCard;