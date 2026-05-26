import ellipse from "../assets/ellipse.svg"

function SecondSection() {
  return (
    <section className="relative w-full overflow-x-hidden border-t border-b border-[#d9d9d9] bg-white md:flex md:h-[544px] md:items-center">
      <div className="absolute left-[0px] top-[64px] hidden md:block">
        <img src={ellipse} alt="ellipse" className="w-[330px]" />
      </div>

      <div className="hidden md:block ml-[1000px] mr-[148px] w-[527px] h-[305px]">
        <h2 className="text-[40px] font-[600] text-[#262626]">
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

      <div className="md:hidden">
        <div className="mx-auto flex min-h-[544px] max-w-[375px] flex-col justify-end overflow-hidden px-[24px] pb-[24px] pt-[120px]">
          <h2 className="text-[24px] font-[600] leading-[100%] text-[#262626]">
            Find Match Now and<br/>Develop Your Feelings
          </h2>

          <p className="mt-[24px] text-[16px] font-[400] leading-[24px] text-[#727272]">
            There are so many platforms from this Pokan to make a task manager
            manage all your time, the data needed is very useful. and we have it
            all to get you to be successful
          </p>

          <button className="mt-[24px] h-[48px] w-[127px] rounded-[8px] bg-[#FF725E] text-[14px] font-[500] text-white">
            Read More
          </button>
        </div>
      </div>
    </section>
  )
}

export default SecondSection
