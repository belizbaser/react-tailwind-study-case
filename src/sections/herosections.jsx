import heroPhone from "../assets/hero-phone.svg"
import arrow from "../assets/arrow.svg"
import ellipse from "../assets/ellipse.svg"

function HeroSection() {
  return (
    <section >
      <div className="hidden md:block">
          <header className="w-full h-[128px] bg-white">
            <div className="w-[1200px] h-full mx-auto flex items-center">
              <h1 className="text-[32px] font-[700] leading-none">
                <span className="text-[#776bb3]">Bu</span>
                <span className="text-[#ff7b68]">cheen</span>
              </h1>

              <nav className="flex gap-[40px] ml-[238px]">
                <a href="" className="text-[#FF725E] text-[16px] font-[600]">
                  Home
                </a>
                <a href="" className="text-[#999999] text-[16px] font-[400]">
                  Service
                </a>
                <a href="" className="text-[#999999] text-[16px] font-[400]">
                  About
                </a>
                <a href="" className="text-[#999999] text-[16px] font-[400]">
                  Pricing
                </a>
                <a href="" className="text-[#999999] text-[16px] font-[400]">
                  Support
                </a>
              </nav>

              <div className="flex ml-auto">
                <button className="w-[118px] h-[48px] rounded-[16px] border border-[#FF725E] text-[#FF725E] text-[16px] font-[500]">
                  Sign In
                </button>

                <button className="w-[118px] h-[48px] rounded-[16px] bg-[#FF725E] text-white text-[16px] font-[500] ml-[16px]">
                  Sign Up
                </button>
              </div>
            </div>
          </header>

          <div className="w-full h-[729px] bg-[#FFF8F7]">
            <div className="w-[1200px] h-full mx-auto flex justify-between">
              <div className="pt-[96px]">
                <h2 className="w-[563px] text-[56px] font-[600] leading-[72px] text-[#262626]">
                  Find <span className="text-[#FF725E] font-[700]">Match Now</span>
                  <br/> and Grow Your <br/>Feelings
                </h2>

                <p className="w-[527px] mt-[40px] text-[16px] font-[400] leading-[24px] text-[#727272]">
                  There are so many platforms from this Pokan to make a task
                  manager manage all your time, the data needed is very useful.
                  and we have it all to get you to be successful
                </p>

                <div className="w-[427px] h-[64px] mt-[40px] bg-white rounded-[16px] flex items-center px-[24px] shadow-[10px_16px_54px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-[16px] text-[16px] font-[400]">
                    <span className="text-[#727272]">Male</span>
                    <img src={arrow} alt="arrow" className="w-[16px] h-[16px]" />
                  </div>

                  <div className="w-[1px] h-[40px] bg-[#111111] ml-[40px]"></div>

                  <div className="flex items-center gap-[16px] text-[16px] font-[400] ml-[24px]">
                    <span className="text-[#727272]">Female</span>
                    <img src={arrow} alt="arrow" className="w-[16px] h-[16px]" />
                  </div>

                  <button className="w-[112px] h-[48px] rounded-[8px] text-white ml-auto bg-[#FF725E] text-[14px] font-[500]">
                    Find Now
                  </button>
                </div>
              </div>

              <div className="w-[700px] h-[700px] mt-[56px] shrink-0">
                <img src={heroPhone} alt="Hero Phone" className="w-full h-full " />
              </div>
            </div>
          </div>

      </div>

      <div className="block md:hidden overflow-x-hidden">
  <header className="w-full h-[84px] bg-white flex items-center justify-between px-[24px]">
    <h1 className="text-[24px] font-[700] leading-none">
      <span className="text-[#776bb3]">Bu</span>
      <span className="text-[#ff7b68]">cheen</span>
    </h1>

    <div className="flex flex-col gap-[6px] items-end">
      <div className="w-[16px] h-[2px] bg-[#333333]"></div>
      <div className="w-[12px] h-[2px] bg-[#333333]"></div>
      <div className="w-[16px] h-[2px] bg-[#333333]"></div>
    </div>
  </header>

  <div className="w-full min-h-[700px] bg-[#FFF8F7] relative overflow-hidden px-[24px] pb-[32px]">
    <img src={ellipse} alt="ellipse" className="w-[220px] absolute top-[135px] left-[-24px] z-0" />

    <img src={ellipse} alt="ellipse" className="w-[210px] absolute top-[455px] right-[-80px] z-0" />

    <img src={ellipse} alt="ellipse" className="w-[180px] absolute bottom-[35px] left-[-55px] z-0" />

    <div className="relative z-10">
      <div className="w-full flex justify-center pt-[28px]">
        <img src={heroPhone} alt="phone" className="w-full max-w-[327px]" />
      </div>

      <h2 className="mt-[28px] text-[40px] font-[600] leading-[56px] text-[#262626]">
        Find <span className="text-[#FF725E] font-[700]">Match Now</span> <br/> and Grow Your  <br/> Feelings
      </h2>

      <p className="mt-[24px] text-[16px] font-[400] leading-[32px] text-[#727272]">
        There are so many platforms from this Pokan to make a task manager manage
        all your time, the data needed is very useful. and we have it all to get
        you to be successful
      </p>

      <div className="w-full h-[64px] mt-[24px] bg-white rounded-[16px] flex items-center justify-between px-[28px] shadow-[10px_16px_54px_rgba(0,0,0,0.06)]">
        <div className="flex items-center gap-[12px] text-[16px] font-[400]">
          <span className="text-[#727272]">Male</span>
          <img src={arrow} alt="arrow" className="w-[16px] h-[16px]" />
        </div>

        <div className="w-[1px] h-[40px] bg-[#111111]"></div>

        <div className="flex items-center gap-[12px] text-[16px] font-[400]">
          <span className="text-[#727272]">Female</span>
          <img src={arrow} alt="arrow" className="w-[16px] h-[16px]" />
        </div>
      </div>

      <div className="flex justify-center mt-[24px]">
        <button className="w-[112px] h-[48px] rounded-[8px] text-white bg-[#FF725E] text-[14px] font-[500]">
          Find Now
        </button>
      </div>
    </div>
  </div>
</div>
    </section>
  )
}
export default HeroSection