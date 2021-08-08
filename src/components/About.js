import AboutCard from "./AboutCard"
import ContactBtn from "./ContactBtn"


const About = ({ data })=>{

    return(
        <div className="pt-5 pb-20">

            <ContactBtn/>

            {/* Title */}
            <span className="text-xl mx-6"><span className="font-semibold">About</span> Me</span>

            <div className="my-20 flex flex-col items-center">

                <div className="mt-24 w-5/6 h-2/3 bg-white rounded-3xl">

                    {/* Image and Border */}

                    <div className="-mt-32 mx-auto w-52 h-52 border-4 border-indigo-600 rounded-3xl flex justify-center items-center px-4">
                        <img className="rounded-3xl" src="./images/" alt="fuwad"/>
                    </div>

                    {/* Name */}

                    <div className="flex mt-10 justify-center font-semibold text-lg">
                        Muhammed Fuwad P K
                    </div>

                    {/* Lead */}

                    <div className="text-gray-600 mx-6 py-8 leading-6">
                             I’m an enthusiastic person who has a passion in designing.<br/>
                        <div className="py-6">
                            Have a design query,<br/>
                            I’m here to help...
                        </div>
                    </div>

                    {/* Blue Capsule */}

                    <div className="w-5/6 flex -mb-10 mx-auto overflow-hidden bg-blue-500 rounded-2xl text-white text-center text-sm">
                        <div className="bg-blue-700 py-4 flex-grow rounded-2xl"><span className="text-xl font-medium">3</span><br/>Years</div>
                        <div className="flex-grow self-center"><span className="text-xl font-medium">100+</span><br/>Happy Clients</div>
                        <div className="flex-grow self-center"><span className="text-xl font-medium">1K+</span><br/>Years</div>
                    </div>
                </div>
            </div>

            {/* Experience and Education section */}

            <section className="px-6 py-10">
                <div className="border-4 border-white rounded-3xl mb-16 py-3">
                    <div className="mx-4 w-min -mt-8 text-2xl font-semibold bg-blue-50 text-blue-900">
                        Experience
                    </div>
                    <div className="flex flex-col items-center">
                        {data.experience.map(exp =>(
                            <AboutCard data={exp} key={exp.title}/>
                        ))}
                    </div>
                </div>
                <div className="border-4 border-white rounded-3xl">
                    <div className="mx-4 w-min -mt-5 text-2xl font-semibold bg-blue-50 text-blue-900">
                        Education
                    </div>
                    <div className="flex flex-col items-center">
                        {data.education.map(edu =>(
                            <AboutCard data={edu} key={edu.title}/>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
export default About;