const Contact = ()=>{
    return(
        <div className="pt-5 pb-20 h-full">
            <div className="text-xl mx-6 text-blue-900"><span className="font-semibold">Contact</span> Me</div>
            <div className="mt-20 pb-40 flex flex-col items-center">

                <div className="mt-24 w-5/6 h-2/3 bg-white rounded-3xl">

                    {/* Image and Border */}

                    <div className="-mt-32 mx-auto w-52 h-52 border-4 border-indigo-600 rounded-3xl flex justify-center items-center px-4">
                        <img className="rounded-3xl" src="./images/qr.jpeg" alt="QR"/>
                    </div>

                    {/* Contact */}

                    <div className="flex flex-col mt-10 items-center text-lg">
                        <div className="py-2">WhatsApp or Call me :</div>
                        <div className="font-semibold">+91 9744 033 223</div>
                    </div>

                    {/* social links */}

                    <div className="flex justify-center pt-10">
                        <span>
                            <a href="https://www.facebook.com/fuwad.muhammed.98"><img className="w-12 px-3" src="./assets/facebook.png" alt="" /></a> 
                        </span>
                        <span>
                            <a href="https://instagram.com/fuwad_muhammed"><img className="w-12 px-3" src="./assets/instagram.png" alt="" /></a> 
                        </span>
                        <span>
                            <a href="https://www.linkedin.com/in/muhammed-fuwad-p-k-060462190"><img className="w-12 px-3" src="./assets/linkedin.png" alt="" /></a> 
                        </span>
                        <span>
                            <a href="https://pin.it/2odPmlu"><img className="w-12 px-3" src="./assets/pinterest.png" alt="" /></a> 
                        </span>
                        <span>
                            <a href="https://twitter.com/FuwadMuhammed?s=09"><img className="w-12 px-3" src="./assets/twitter.png" alt="" /></a> 
                        </span>
                    </div>

                    {/* Mail */}

                    <div className="flex flex-col my-10 items-center text-md">
                        <div className="py-1">Mail me :</div>
                        <a href="mailto:fuwadmuhammedjee@gmail.com" className="font-semibold hover:text-blue-900">fuwadmuhammedjee@gmail.com</a>
                    </div>
                    {/* Blue Capsule */}

                    <div className="w-5/6 flex flex-col -mb-10 mx-auto overflow-hidden bg-blue-500 rounded-2xl text-white text-center">
                        <div className="py-4">Happy for Helping</div>
                        <div className="pb-4 px-2 text-xl">Will get back to you soon</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;