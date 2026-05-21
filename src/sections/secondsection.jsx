import ellipse from "../assets/ellipse.svg"

function SecondSection() {
  return (
    <section className="w-full h-[544px] bg-white flex items-center relative overflow-hidden border-t border-b border-[#d9d9d9]">
      
      <div className="absolute left-[0px] absolute top-[64px] mr-[1097px]">
        <img src={ellipse} alt="ellipse"className="w-[330px]"/>
      </div>

      <div className="ml-[765px] mr-[190px] w-[520px] pt-[62px]">
        <h2 className="text-[40px] font-[600] leading-[52px] text-[#262626]">
          Find Match Now and<br/>Develop Your Feelings
        </h2>

        <p className="mt-[24px] text-[16px] font-[400] leading-[24px] text-[#727272]">
          There are so many platforms from this Pokan to make a task
          manager manage all your time, the data needed is very useful.
          and we have it all to get you to be successful
        </p>

        <button className="mt-[32px] w-[127px] h-[48px] rounded-[8px] bg-[#FF725E] text-white text-[14px] font-[500]">
          Read More
        </button>
      </div>
    </section>
  )
}

export default SecondSection