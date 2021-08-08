import Card from "./Card"

const WorkList = ({ data })=>{

    let works=data

    return(
        <div className="pt-5 bg-blue-50 h-full px-2">
            <span className="text-xl mx-6">My <span className="font-semibold">Works</span></span>
            <ul className="flex flex-col items-center mx-6 pb-20 pt-10">
                {
                    works.map(work=>(
                        <li className="" key={work.id}>
                            <Card data={work}/>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
export default WorkList;