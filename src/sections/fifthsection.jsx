import { useState } from "react"
import star from "../assets/star.svg"
import rlArrow from "../assets/rl-arrow.svg"

function FifthSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="w-full overflow-x-hidden bg-white">
      <div className="hidden h-[737px] flex-col items-center md:flex">
        <div className="mt-[163px]">
          <h1 className="text-[40px] font-[600] leading-[56px] text-[#262626] text-center">
            What Our Customers<br/>Have To Say
          </h1>

          <p className="mt-[16px] text-[16px] font-[400] text-[#727272] text-center">
            Here's what our customers say with Bucheen
          </p>
        </div>

        <div className="mt-[48px] flex gap-[32px]">
          <div className="w-[378px] h-[278px] border border-[#D9D9D9] rounded-[16px] pt-[32px] pr-[24px] pl-[24px] pb-[24px]">
            <div className="flex items-center gap-[16px]">
              <div className="w-[32px] h-[32px] rounded-full bg-[#A6A6A6]"></div>

              <div>
                <h3 className="text-[14px] font-[500] text-[#232323]">
                  Tasha Wijayanti
                </h3>
                <p className="text-[12px] font-[400] text-[#777777]">
                  Curug
                </p>
              </div>
            </div>

            <p className="mt-[16px] text-[16px] font-[400] leading-[24px] text-[#727272]">
              This Bucheen is so cool, I found the partner I wanted. and it's very easy to use and steady for bcheen. cheers<br/>and hopefully many other people can find their partner here
            </p>

            <div className="mt-[24px] flex gap-[2px]">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
          </div>

          <div className="w-[378px] h-[278px] rounded-[16px] px-[24px] pt-[32px] pr-[24px] pl-[24px] pb-[24px] shadow-[10px_24px_54px_rgba(0,0,0,0.06)] bg-white">
            <div className="flex items-center gap-[16px]">
              <div className="w-[32px] h-[32px] rounded-full bg-[#A6A6A6]"></div>

              <div>
                <h3 className="text-[14px] font-[500] text-[#232323]">
                  Sizuka engkol
                </h3>
                <p className="text-[12px] font-[400] text-[#777777]">
                  Indonesia
                </p>
              </div>
            </div>

            <p className="mt-[16px] text-[16px] font-[400] leading-[24px] text-[#727272]">
              Very interesting services are provided <br/> to customers, access is very fast and< br/> we can also see the development of <br/> our partners. and the information provided is accurate and genuine.
            </p>

            <div className="mt-[24px] flex gap-[2px]">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
          </div>

          <div className="w-[378px] h-[278px] border border-[#D9D9D9] rounded-[16px] pt-[32px] pr-[24px] pl-[24px] pb-[24px]">
            <div className="flex items-center gap-[16px]">
              <div className="w-[32px] h-[32px] rounded-full bg-[#A6A6A6]"></div>

              <div>
                <h3 className="text-[14px] font-[500] text-[#232323]">
                  Gundam gandim
                </h3>
                <p className="text-[12px] font-[400] text-[#AAAAAA]">
                  Bulgarian
                </p>
              </div>
            </div>

            <p className="mt-[16px] text-[16px] font-[400] leading-[24px] text-[#727272]">
              It's crazy that this application can <br/>make me find my soul mate very easily and quickly. the information contained in this buceen is very accurate and really real, not a hoax
            </p>

            <div className="mt-[24px] flex gap-[2px]">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="mx-auto flex min-h-[524px] max-w-[375px] flex-col overflow-hidden px-[20px] pb-[36px] pt-[46px]">
          <h1 className="text-center text-[24px] font-[600] leading-[140%] text-[#262626]">
            What Our Customers <br/>Have To Say
          </h1>

          <p className="mx-auto mt-[16px] max-w-[220px] text-center text-[14px] font-[400] leading-[28px] text-[#727272]">
            Here's what our customers say with<br/>Bucheen
          </p>

          {activeIndex === 0 && (
            <div className="mt-[24px] rounded-[16px] border border-[#D9D9D9] bg-white px-[16px] pb-[18px] pt-[20px]">
              <div className="flex items-center gap-[12px]">
                <div className="h-[20px] w-[20px] rounded-full bg-[#A6A6A6]"></div>

                <div>
                  <h3 className="text-[14px] font-[500] leading-[100%] text-[#232323]">
                    Tasha Wijayanti
                  </h3>
                  <p className="mt-[4px] text-[12px] font-[400] leading-[100%] text-[#B3B3B3]">
                    Curug
                  </p>
                </div>
              </div>

              <p className="mt-[16px] text-[16px] font-[400] leading-[24px] text-[#727272]">
                This Bucheen is so cool, I found the partner I wanted. and it's
                very easy to use and steady for bcheen. cheers and hopefully many
                other people can find their partner here
              </p>

              <div className="mt-[16px] flex gap-[2px]">
                <img src={star} alt="star" className="h-[12px] w-[12px]" />
                <img src={star} alt="star" className="h-[12px] w-[12px]" />
                <img src={star} alt="star" className="h-[12px] w-[12px]" />
                <img src={star} alt="star" className="h-[12px] w-[12px]" />
                <img src={star} alt="star" className="h-[12px] w-[12px]" />
              </div>
            </div>
          )}

          {activeIndex === 1 && (
            <div className="mt-[24px] rounded-[16px] border border-[#D9D9D9] bg-white px-[16px] pb-[18px] pt-[20px]">
              <div className="flex items-center gap-[12px]">
                <div className="h-[20px] w-[20px] rounded-full bg-[#A6A6A6]"></div>

                <div>
                  <h3 className="text-[14px] font-[500] leading-[100%] text-[#232323]">
                    Sizuka engkol
                  </h3>
                  <p className="mt-[4px] text-[12px] font-[400] leading-[100%] text-[#B3B3B3]">
                    Indonesia
                  </p>
                </div>
              </div>

              <p className="mt-[16px] text-[16px] font-[400] leading-[24px] text-[#727272]">
                Very interesting services are provided to customers, access is
                very fast and we can also see the development of our partners.
                and the information provided is accurate and genuine.
              </p>

              <div className="mt-[16px] flex gap-[2px]">
                <img src={star} alt="star" className="h-[12px] w-[12px]" />
                <img src={star} alt="star" className="h-[12px] w-[12px]" />
                <img src={star} alt="star" className="h-[12px] w-[12px]" />
                <img src={star} alt="star" className="h-[12px] w-[12px]" />
                <img src={star} alt="star" className="h-[12px] w-[12px]" />
              </div>
            </div>
          )}

          {activeIndex === 2 && (
            <div className="mt-[24px] rounded-[16px] border border-[#D9D9D9] bg-white px-[16px] pb-[18px] pt-[20px]">
              <div className="flex items-center gap-[12px]">
                <div className="h-[20px] w-[20px] rounded-full bg-[#A6A6A6]"></div>

                <div>
                  <h3 className="text-[14px] font-[500] leading-[100%] text-[#232323]">
                    Gundam gandim
                  </h3>
                  <p className="mt-[4px] text-[12px] font-[400] leading-[100%] text-[#B3B3B3]">
                    Bulgarian
                  </p>
                </div>
              </div>

              <p className="mt-[16px] text-[16px] font-[400] leading-[24px] text-[#727272]">
                It's crazy that this application can make me find my soul mate
                very easily and quickly. the information contained in this
                buceen is very accurate and really real, not a hoax
              </p>

              <div className="mt-[16px] flex gap-[2px]">
                <img src={star} alt="star" className="h-[12px] w-[12px]" />
                <img src={star} alt="star" className="h-[12px] w-[12px]" />
                <img src={star} alt="star" className="h-[12px] w-[12px]" />
                <img src={star} alt="star" className="h-[12px] w-[12px]" />
                <img src={star} alt="star" className="h-[12px] w-[12px]" />
              </div>
            </div>
          )}

          <div className="mt-[20px] flex items-center justify-center">
            <div className="relative h-[24px] w-[54px] overflow-hidden">
              <img src={rlArrow} alt="testimonial navigation" className="absolute left-[-6px] top-[-18px] w-[88px] max-w-none"  />

              <button  type="button"  aria-label="Previous testimonial" 
              onClick={() => setActiveIndex(activeIndex === 0 ? 2 : activeIndex - 1)} 
              className="absolute left-0 top-0 h-full w-[27px]" >

              </button>

              <button  type="button" aria-label="Next testimonial"
                onClick={() => setActiveIndex(activeIndex === 2 ? 0 : activeIndex + 1)}
                className="absolute right-0 top-0 h-full w-[27px]">
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FifthSection
