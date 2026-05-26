import person1 from "../assets/1.person.svg";
import person2 from "../assets/2.person.svg";
import person3 from "../assets/3.person.svg";

function FourthSection() {
  return (
    <section className="w-full overflow-x-hidden bg-[#FFF8F7] md:h-[990px]">
      <div className="hidden md:flex md:h-[990px] md:flex-col">
        <div>
          <h1 className="mx-auto mt-[96px] text-center text-[40px] font-[500] text-[#000026]">
            Most Popular In This Week
          </h1>
        </div>

        <div>
          <p className="mx-auto mt-[16px] w-[527px] text-center text-[16px] font-[400] text-[#727272]">
            There are so many platforms from this Pokan to make a task
            manager manage all your time, the data needed is very useful.
            and we have it all to get you to be successful
          </p>
        </div>

        <div className="item-center mx-auto mt-[56px] flex flex-row gap-[45px]">
          <div className="w-[331px]">
            <div className="flex h-[247.02px] w-[331px] flex-col items-center rounded-t-[20.87px] bg-[#FFAB9F]/90">
              <img src={person1} alt="person1" className="mt-[82.63px] h-[171.3px] w-[175.28px]" />
            </div>

            <div className="flex h-[247.02px] w-[331px] flex-col rounded-b-[20.87px] bg-[#FFF8F7]">
              <h1 className="ml-[32px] mt-[32.98px] text-[32px] font-[600] text-[#262626]">
                Javar Saripun
              </h1>

              <p className="ml-[32px] mt-[16px] w-[264px] text-left text-[16px] font-[400] text-[#727272]">
                A man who is ideal for all women. Javar is very handsome
                and attractive with a very friendly and kind nature. Javar is
                also a person who excels in the field of music.
              </p>
            </div>
          </div>

          <div className="mt-[80px] w-[331px] rounded-[20.87px]">
            <div className="flex h-[247.02px] w-[331px] flex-col items-center rounded-t-[20.87px] bg-[#B3A3FF]/90">
              <img src={person2} alt="person2" className="mt-[76.54px] h-[184.39px] w-[159.35px]" />
            </div>

            <div className="flex h-[247.02px] w-[331px] flex-col rounded-b-[20.87px] bg-white">
              <h1 className="ml-[32px] mt-[32.98px] text-[32px] font-[600] text-[#262626]">
                Fausiah Fera
              </h1>

              <p className="mb-[32px] ml-[32px] mt-[16px] w-[264px] text-left text-[16px] font-[400] text-[#727272]">
                Fera is a student from one of the
                famous universities in Tokyo and
                she is a very famous and very
                beautiful woman.
              </p>
            </div>
          </div>

          <div className="mt-[170px] h-[521px] w-[331px] rounded-[20.87px] shadow-[10px_16px_54px_rgba(0,0,0,0.06)]">
            <div className="flex h-[247.02px] w-[331px] flex-col items-center rounded-t-[20.87px] bg-[#FFD492]/90">
              <img src={person3} alt="person3" className="mt-[76.54px] h-[184.39px] w-[159.35px]" />
            </div>

            <div className="flex h-[247.02px] w-[328px] flex-col rounded-b-[20.87px] bg-white">
              <h1 className="ml-[32px] mt-[32.98px] text-[32px] font-[600] text-[#262626]">
                Shreryl Olap
              </h1>

              <p className="ml-[41px] mt-[16px] h-[209px] w-[264px] text-left text-[16px] font-[400] text-[#727272]">
                Olap is a very sweet woman with curly and blonde hair which
                makes her very beautiful and sweet. He works in the field of
                music, which is famous in Indonesia.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden md:hidden">
        <div className="mx-auto max-w-[375px] px-[24px] pb-[36px] pt-[36px]">
          <h1 className="text-center text-[24px] font-[500] leading-[140%] text-[#000026]">
            Most Popular In This Week
          </h1>

          <p className="mx-auto mt-[16px] max-w-[279px] text-center text-[16px] font-[400] leading-[24px] text-[#727272]">
            There are so many platforms from this Pokan to make a task manager manage
            all your time, the data needed is very useful. and we have it all to get
            you to be successful
          </p>
        </div>

        <div className="overflow-x-auto pl-[24px] pr-[12px] pb-[12px]">
          <div className="flex w-max gap-[12px]">
            <div className="w-[144px] shrink-0 snap-start overflow-hidden rounded-[16px] bg-white shadow-[0px_12px_30px_rgba(0,0,0,0.06)]">
              <div className="flex h-[115px] w-full items-end justify-center bg-[#FFDFDA]">
                <img src={person1} alt="person1" className="h-[95px] w-[97px]" />
              </div>

              <div className="px-[14px] pb-[18px] pt-[16px]">
                <h1 className="text-[14px] font-[600] text-[#262626]">
                  Javar Saripun
                </h1>

                <p className="mt-[12px] text-[12px] font-[400] leading-[20px] text-[#727272]">
                  A man who is ideal for all women. Javar is very handsome and
                  attractive with a very friendly and kind nature.
                </p>
              </div>
            </div>

            <div className="w-[144px] shrink-0 overflow-hidden rounded-[16px] bg-white shadow-[0px_12px_30px_rgba(0,0,0,0.06)]">
              <div className="flex h-[115px] w-full items-end justify-center bg-[#C3B6FF]">
                <img src={person2} alt="person2" className="h-[100px] w-[86px]" />
              </div>

              <div className="px-[14px] pb-[18px] pt-[16px]">
                <h1 className="text-[14px] font-[600] text-[#262626]">
                  Fausiah Fera
                </h1>

                <p className="mt-[12px] text-[12px] font-[400] leading-[20px] text-[#727272]">
                  Fera is a student from one of the famous universities in Tokyo
                  and she is a very beautiful woman.
                </p>
              </div>
            </div>

            <div className="w-[144px] shrink-0 overflow-hidden rounded-[16px] bg-white shadow-[0px_12px_30px_rgba(0,0,0,0.06)]">
              <div className="flex h-[115px] w-full items-end justify-center bg-[#FFDDAA]">
                <img src={person3} alt="person3" className="h-[100px] w-[86px]" />
              </div>

              <div className="px-[14px] pb-[18px] pt-[16px]">
                <h1 className="text-[14px] font-[600] text-[#262626]">
                  Shreryl Olap
                </h1>

                <p className="mt-[12px] text-[12px] font-[400] leading-[20px] text-[#727272]">
                  Olap is a very sweet woman with curly blonde hair and works
                  in the field of music.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[8px] flex items-center justify-center gap-[6px] pb-[28px]">
          <div className="h-[6px] w-[6px] rounded-full bg-[#FF725E]"></div>
          <div className="h-[6px] w-[6px] rounded-full bg-[#FFD0C8]"></div>
          <div className="h-[6px] w-[6px] rounded-full bg-[#FFD0C8]"></div>
        </div>
      </div>
    </section>
  );
}

export default FourthSection;
