import person1 from "../assets/1.person.svg";
import person2 from "../assets/2.person.svg";
import person3 from "../assets/3.person.svg";

function FourthSection() {
  return (
    <section className="bg-[#FFF8F7] w-full h-[990px] flex flex-col">
      <div>
        <h1 className="text-[40px] font-[500] text-[#000026] ml-[429px] mt-[96px] mr-[464px]">
          Most Popular In This Week
        </h1>
      </div>

      <div>
        <p className="text-[16px] font-[400] text-[#727272] ml-[419px] mt-[16px] w-[527px] text-center">
          There are so many platforms from this Pokan to make a task
          manager manage all your time, the data needed is very useful.
          and we have it all to get you to be successful
        </p>
      </div>

      <div className="flex flex-row gap-[45px] ml-[143px] mt-[56px]">
        <div className="w-[328px]">
          <div className="w-[328px] h-[247.02px] bg-[#FFAB9F]/90 rounded-t-[20.87px] flex flex-col items-center">
            <img src={person1} alt="person1" className="w-[175.28px] h-[171.3px] mt-[82.63px]" />
          </div>

          <div className="w-[328px] h-[247.02px] bg-[#FFF8F7] rounded-b-[20.87px] flex flex-col">
            <h1 className="text-[32px] font-[600] text-[#262626] mt-[32.98px] ml-[32px]">
              Javar Saripun
            </h1>

            <p className="text-[16px] font-[400] text-[#727272] mt-[16px] ml-[32px] w-[264px] text-left">
              A man who is ideal for all women. Javar is very handsome
              and attractive with a very friendly and kind nature. Javar is
              also a person who excels in the field of music.
            </p>
          </div>
        </div>

        <div className="w-[328px] mt-[80px] shadow-[10px_16px_54px_rgba(0,0,0,0.06)] rounded-[20.87px]">
          <div className="w-[328px] h-[247.02px] bg-[#B3A3FF]/90 rounded-t-[20.87px] flex flex-col items-center">
            <img src={person2} alt="person2" className="w-[159.35px] h-[184.39px] mt-[76.54px]" />
          </div>

          <div className="w-[328px] h-[247.02px] bg-white rounded-b-[20.87px] flex flex-col">
            <h1 className="text-[32px] font-[600] text-[#262626] mt-[32.98px] ml-[32px]">
              Fausiah Fera
            </h1>

            <p className="text-[16px] font-[400] text-[#727272] mt-[16px] ml-[32px] w-[264px] text-left">
              Fera is a student from one of the famous universities in Tokyo and
              she is a very famous and very beautiful woman.
            </p>
          </div>
        </div>

        <div className="w-[328px] mt-[150px] shadow-[10px_16px_54px_rgba(0,0,0,0.06)] rounded-[20.87px]">
          <div className="w-[328px] h-[247.02px] bg-[#FFD492]/90 rounded-t-[20.87px] flex flex-col items-center">
            <img src={person3} alt="person3" className="w-[159.35px] h-[184.39px] mt-[76.54px]" />
          </div>

          <div className="w-[328px] h-[247.02px] bg-white rounded-b-[20.87px] flex flex-col">
            <h1 className="text-[32px] font-[600] text-[#262626] mt-[32.98px] ml-[32px]">
              Shreryl Olap
            </h1>

            <p className="text-[16px] font-[400] text-[#727272] mt-[16px] ml-[41px] w-[264px] text-left">
              Olap is a very sweet woman with curly and blonde hair which
              makes her very beautiful and sweet. He works in the field of
              music, which is famous in Indonesia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FourthSection;