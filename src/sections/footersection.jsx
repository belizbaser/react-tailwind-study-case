import call from "../assets/Call.svg";
import message from "../assets/Message.svg";
import location from "../assets/Location.svg";

function FooterSection() {
  return (
    <footer className="w-full overflow-x-hidden bg-[#FFF1EF]">
      <div className="hidden h-[307px] w-full md:flex">
        <div className="ml-[120px] mt-[89px] h-[130px] w-[443px]">
          <h1 className="text-[24px] font-[600]">
            <span className="text-[#776bb3]">Bu</span>
            <span className="text-[#ff7b68]">cheen</span>
          </h1>
          <p className="mt-[16px] text-left text-[16px] font-[400] text-[#727272]">
            The most accurate and simplest time tracking for all of you. and we
            have been serving for more than 4 years and have made you happy
          </p>
        </div>

        <div className="mx-auto mb-[56px] ml-[128] mt-[56px] flex h-[195px] w-[900px]">
          <div className="ml-[128px] h-[195px] w-[119p]">
            <h1 className="text-[18px] font-[700] text-[#FF806E]">
              About Us
            </h1>
            <p className="mt-[24px] text-[16px] font-[400] text-[#727272]">
              Our people
            </p>

            <p className="mt-[16px] text-[16px] font-[400] text-[#727272]">
              Our categories
            </p>

            <p className="mt-[16px] text-[16px] font-[400] text-[#727272]">
              Contact us
            </p>

            <p className="mt-[16px] text-[16px] font-[400] text-[#727272]">
              Testimonial
            </p>
          </div>

          <div className="ml-[88px] h-[155px] w-[139px]">
            <h1 className="text-[18px] font-[700] text-[#FF806E]">
              Product
            </h1>
            <p className="mt-[24px] text-[16px] font-[400] text-[#727272]">
              Task Mangement
            </p>
            <p className="mt-[16px] text-[16px] font-[400] text-[#727272]">
              Service
            </p>
            <p className="mt-[16px] text-[16px] font-[400] text-[#727272]">
              Task Schedule
            </p>
          </div>

          <div className="ml-[67px] h-[195px] w-[211px]">
            <h1 className="text-[18px] font-[700] text-[#FF806E]">
              Contact us
            </h1>
            <div className="flex">
              <img src={call} alt="call" className="mt-[26px] h-[16px] w-[16px]" />
              <p className="ml-[16px] mt-[24px] text-[16px] font-[400] text-[#727272]">
                (021) 3258 4930
              </p>
            </div>

            <div className="flex">
              <img  src={message} alt="message" className="mt-[20px] h-[16px] w-[16px]" />
              <p className="ml-[16px] mt-[16px] text-[16px] font-[400] text-[#727272]">
                Pokan@Hola.com
              </p>
            </div>

            <div className="flex">
              <img src={location} alt="location" className="mt-[30px] h-[16px] w-[16px]" />
              <p className="ml-[16px] mt-[27px] text-[16px] font-[400] text-[#727272]">
                Sukabumi, Jawa Barat <br/>Indonesia, IDN
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="mx-auto max-w-[375px] overflow-hidden px-[30px] pb-[32px] pt-[40px]">
          <div className="max-w-[247px]">
            <h1 className="text-[24px] font-[600]">
              <span className="text-[#776bb3]">Bu</span>
              <span className="text-[#ff7b68]">cheen</span>
            </h1>

            <p className="mt-[16px] text-[16px] font-[400] leading-[32px] text-[#727272]">
              The most accurate and simplest time tracking for all of you. and
              we have been serving for more than 4 years and have made you happy
            </p>
          </div>

          <div className="mt-[56px] grid grid-cols-2 gap-x-[28px]">
            <div>
              <h1 className="text-[18px] font-[700] text-[#FF806E]">
                About Us
              </h1>

              <p className="mt-[24px] text-[16px] font-[400] text-[#727272]">
                Our people
              </p>
              <p className="mt-[16px] text-[16px] font-[400] text-[#727272]">
                Our categories
              </p>
              <p className="mt-[16px] text-[16px] font-[400] text-[#727272]">
                Contact us
              </p>
              <p className="mt-[16px] text-[16px] font-[400] text-[#727272]">
                Testimonial
              </p>
            </div>

            <div>
              <h1 className="text-[18px] font-[700] text-[#FF806E]">
                Product
              </h1>

              <p className="mt-[24px] text-[16px] font-[400] text-[#727272]">
                Task Mangement
              </p>
              <p className="mt-[16px] text-[16px] font-[400] text-[#727272]">
                Service
              </p>
              <p className="mt-[16px] text-[16px] font-[400] text-[#727272]">
                Task Schedule
              </p>
            </div>
          </div>

          <div className="mt-[32px]">
            <h1 className="text-[18px] font-[700] text-[#FF806E]">
              Contact us
            </h1>

            <div className="mt-[24px] flex items-start gap-[12px]">
              <img src={call} alt="call" className="mt-[2px] h-[16px] w-[16px] shrink-0" />
              <p className="text-[16px] font-[400] text-[#727272]">
                (021) 3258 4930
              </p>
            </div>

            <div className="mt-[16px] flex items-start gap-[12px]">
              <img  src={message} alt="message"  className="mt-[2px] h-[16px] w-[16px] shrink-0"  />
              <p className="text-[16px] font-[400] text-[#727272]">
                Pokan@Hola.com
              </p>
            </div>

            <div className="mt-[16px] flex items-start gap-[12px]">
              <img src={location}  alt="location" className="mt-[2px] h-[16px] w-[16px] shrink-0" />
              <p className="text-[16px] font-[400] leading-[32px] text-[#727272]">
                Sukabumi, Jawa Barat <br/> Indonesia, IDN
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
