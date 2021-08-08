import { Link } from 'react-router-dom';

const ContactBtn = () =>{
    return(
        <div>
            <Link to="/contact" className="animate-pulse absolute top-4 right-2 h-9 w-16 bg-blue-700 rounded-full flex justify-end pr-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="transform rotate-90 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
</svg>
            </Link>
        </div>
    )
}
export default ContactBtn;