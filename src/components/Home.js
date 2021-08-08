import ContactBtn from "./ContactBtn";

const Home = ()=>{
    return(
        <div className="bg-blue-50 h-screen">
            <ContactBtn/>

            <div className="mx-4 pt-10">

                <div className="text-xl py-6">Hello there, <span className="text-2xl">I'm <span className="font-semibold">Fuwad</span></span></div>
                <div className="flex justify-center font-black text-3xl leading-10">Welcome to my Portfolio</div>
                
                <div className="pt-10 text-lg">
                    <div>
                        I'm a
                    </div>
                    <div className="font-semibold leading-8">
                        Graphics Designer<br/>
                        & UI/UX Designer
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Home;