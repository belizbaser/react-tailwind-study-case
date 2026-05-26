   import call from "../assets/call.svg";
   import message from "../assets/message.svg";
   import location from "../assets/location.svg";
   function FooterSection() {
    return (
        <footer className="w-full h-[307px] bg-[#FFF1EF] flex ">
            <div className="w-[443px] h-[130px] mt-[89px] ml-[120px]">
                <h1 className="text-[24px] font-[600]">
                <span className="text-[#776bb3]"  >Bu</span>
                <span className="text-[#ff7b68]" >cheen</span>
                </h1>
                <p className="text-[16px] font-[400] text-[#727272] mt-[16px]  text-left">
                   The most accurate and simplest time tracking for all of you. and we have been serving for more than 4 years and have made you happy
                </p>
            </div>
            <div className="w-[900px] h-[195px] mt-[56px] mb-[56px] ml-[128] mx-auto flex">
            <div className="w-[119p] h-[195px]  ml-[128px]">
                <h1 className="text-[18px] font-[700] text-[#FF806E] ">
                   About Us
                </h1>
                <p className="text-[16px] font-[400] text-[#727272] mt-[24px]">
                    Our people
                </p>

                <p className="text-[16px] font-[400] text-[#727272] mt-[16px]">
                    Our categories
                </p>

                <p className="text-[16px] font-[400] text-[#727272] mt-[16px]">
                   Contact us
                </p>

                <p className="text-[16px] font-[400] text-[#727272] mt-[16px]">
                   Testimonial
                </p>
            </div>

            <div className="w-[139px] h-[155px]  ml-[88px]">
                <h1 className="text-[18px] font-[700] text-[#FF806E] ">
                   Product
                </h1>
                <p className="text-[16px] font-[400] text-[#727272] mt-[24px]">
                  Task Mangement
                </p>
                <p className="text-[16px] font-[400] text-[#727272] mt-[16px]">
                    Service
                </p>
                <p className="text-[16px] font-[400] text-[#727272] mt-[16px]">
                   Task Schedule
                </p>

            </div>

            <div className="w-[211px] h-[195px] ml-[67px]">
                 <h1 className="text-[18px] font-[700] text-[#FF806E] ">
                  Contact us
                </h1>
                <div className="flex ">
                    <img src={call} alt="call" className=" mt-[26px] w-[16px] h-[16px]"/>
                    <p className="text-[16px] font-[400] mt-[24px] text-[#727272] ml-[16px] ">
                    (021) 3258 4930 
                    </p>
                </div>
                
                <div className="flex ">
                    <img src={message} alt="message" className="mt-[20px] w-[16px] h-[16px]"/>
                    <p className="text-[16px] font-[400] mt-[16px] text-[#727272] ml-[16px]">
                    Pokan@Hola.com
                    </p>
                </div>
                
                <div className="flex ">
                    <img src={location} alt="location" className="mt-[30px] w-[16px] h-[16px]"/>
                    <p className="text-[16px] font-[400] mt-[27px] text-[#727272] ml-[16px]">
                   Sukabumi, Jawa Barat <br></br>Indonesia, IDN
                    </p>
                </div>
                
            </div>
            </div>
        </footer>
    )
}

export default FooterSection