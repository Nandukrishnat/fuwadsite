const Contact = ()=>{
    return(
        <div className="pt-5 pb-20 h-screen">
            <div className="text-xl mx-6"><span className="font-semibold">Contact</span> Me</div>
            <div className="my-20 flex flex-col items-center">

                <div className="mt-24 w-5/6 h-2/3 bg-white rounded-3xl">

                    {/* Image and Border */}

                    <div className="-mt-32 mx-auto w-52 h-52 border-4 border-indigo-600 rounded-3xl flex justify-center items-center px-4">
                        <img className="rounded-3xl" src="./images/" alt="QR"/>
                    </div>

                    {/* Contact */}

                    <div className="flex flex-col mt-10 items-center text-lg">
                        <div className="py-2">WhatsApp or Call me :</div>
                        <div className="font-semibold">+91 9744 033 223</div>
                    </div>

                    {/* Mail */}

                    <div className="flex flex-col my-10 items-center text-md">
                        <div className="py-1">Mail me :</div>
                        <a href="mailto:fuwadmuhammedjee@gmail.com" className="font-semibold hover:text-blue-900">fuwadmuhammedjee@gmail.com</a>
                    </div>
                    {/* Blue Capsule */}

                    <div className="w-5/6 flex flex-col -mb-10 mx-auto overflow-hidden bg-blue-500 rounded-2xl text-white text-center">
                        <div className="py-4">Happy for Helping</div>
                        <div className="pb-4 text-xl">Will get back to you soon</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;