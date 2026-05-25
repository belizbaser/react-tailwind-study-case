import heroPhone from "../assets/hero-phone.svg"
function HeroSection() {
  return (
    <section >
      
     <header className=" w-full h-[128px] px-[128px]  items-center flex ">
        <div className="w-[1200px] h-[48px] mb-[40px] mt-[40px] ml-[120px] mr-[120px] flex items-center justify-between">
        <div>
           <h1 className="text-[32px] font-[700] leading-none ">
            <span className="text-[#776bb3]"  >Bu</span>
            <span className="text-[#ff7b68]" >cheen</span>
           </h1>
        </div>

        <nav className="flex gap-[40px] px-[238px]">
          <a href=""className="text-[#FF725E] text-[16px] font-[600]">
            Home</a>

          <a href="" className="text-[#999999] text-[16px] font-[400]" >
            Service</a>

          <a href="" className="text-[#999999] text-[16px] font-[400]" >
            About</a>

          <a href="" className="text-[#999999] text-[16px] font-[400]" >
            Pricing</a>

          <a href="" className="text-[#999999] text-[16px] font-[400]" >
            Support</a>
        </nav>

        <div className="flex"> 
        <button className="w-[118px] h-[48px] rounded-[16px] border border-[#FF725E] text-[#FF725E] text-[16px] font-[500]">
         Sign In
        </button>

        <button className="w-[118px] h-[48px] rounded-[16px] bg-[#FF725E] text-white text-[16px] font-[500] ml-[16px]">
            Sign Up
        </button>
        </div>

        </div>
      </header>
      
      
      <div className="w-full h-[729px]  bg-[#fff8f7] opacity-[10] flex justify-between  " >
        <div>
         <div className=" w-[563px] pt-[96px] ml-[135px]">
            <h1 className="text-[56px] font-[600] leading-none ">
                <span className="text-[#262626]">Find </span>
                <span className="text-[#ff725e]">Match Now </span>
                <span className="text-[#262626]">and Grow Your Feelings</span>
            </h1>
        </div>

        <div className="w-[527px] h-[93px] ml-[125px] mt-[40px]">
            <p className="text-[16px] font-[400] text-[#727272]">
                There are so many platforms from this Pokan to make a task manager manage all your time, the data needed is very useful. and we have it all to get you to be successful
            </p>
        </div>

        <div className="w-[427px] h-[64px] ml-[125px] mt-[40px] bg-white rounded-[16px] flex items-center px-[24px] shadow-[10px_16px_54px_rgba(0,0,0,0.06)]">

            <div className="flex items-center bg-[#FFFFFF] gap-[16px] text-[16px] font-[400]"> 
                <span  className="text-[#727272] ml-[24px]">Male   </span>
                <span className="text-[#111111]">  v</span>
            </div>

              <div className="w-[1px] h-[40px] bg-[#111111] ml-[40px]"></div>

            <div className="flex items-center bg-[#FFFFFF] gap-[16px] text-[16px] font-[400]"> 
                <span  className="text-[#727272] ml-[24px]">Female   </span>
                <span className="text-[#111111]">  v</span>
            </div>

            <button className="w-[112px] h-[48px] rounded-[8px] text-white ml-[24px] bg-[#FF725E] text-[14px] font-[500]">
                Find Now
            </button>
         </div>
            </div>

        <div className="w-[556.02px] h-[599.3px] pt-[57.27px] mr-[85px]  flex items-center justify ">
            <img src={heroPhone} alt="Hero Phone" className="w-[556px]" />
        </div>

        
      </div>
    </section>
  )
}

export default HeroSection