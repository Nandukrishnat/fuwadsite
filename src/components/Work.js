import ContactBtn from "./ContactBtn";
import WorkList from "./WorkList";

const Work = ({ data })=>{

    return(
        <div>
            <ContactBtn/>
            <WorkList data={ data }/>
        </div>
    )
}
export default Work;