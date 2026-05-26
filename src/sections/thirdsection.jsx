import searchIcon from "../assets/search.svg";
import heartIcon from "../assets/like.svg";
import userIcon from "../assets/useradd.svg";


function ThirdSection() {
return (
  <section className="relative w-full overflow-x-hidden border-t border-b border-[#d9d9d9] bg-white md:flex md:h-[670px] md:items-center">

    <div className="hidden md:block ml-[120px] mt-[103px] w-[457px] mb-[98px]" >

      <h2 className="text-[40px] font-[600] text-[#262626] ">
        How It Works To Find<br/>Your Relationship
      </h2>

      <div className="mt-[48px] flex flex-col gap-[32px]">

       
        <div className="flex items-start gap-[24px]">

          <div className="w-[64px] h-[64px] rounded-full bg-[#FF834F]/30 shrink-0 flex items-center justify-center">
            <img src={searchIcon} alt="search" />
          </div>

          <p className="w-[353px] text-[16px] font-[400] leading-[24px] text-[#727272]">
            Find your dating relationship in app and waiting until you get a notification.
            have a good relationship its started
          </p>

        </div>

       
        <div className="flex items-start gap-[24px]">

          <div className="w-[64px] h-[64px] rounded-full bg-[#FF834F]/30 shrink-0 flex items-center justify-center">
            <img src={heartIcon} alt="like" />
          </div>

          <p className="w-[353px] text-[16px] font-[400] leading-[24px] text-[#727272]">
            Dating with benefits and you redefine the expectations of a perfect relationship
            with your partner
          </p>

        </div>

        
        <div className="flex items-start gap-[24px]">

          <div className="w-[64px] h-[64px] rounded-full bg-[#FF834F]/30 shrink-0 flex items-center justify-center">
            <img src={userIcon} alt="user" />
          </div>

          <p className="w-[353px] text-[16px] font-[400] leading-[24px] text-[#727272]">
            Ideal relationship makes your online dating relationship run more smoothly using this app
          </p>

        </div>

      </div>

    </div>

    <div className="md:hidden">
      <div className="mx-auto flex min-h-[670px] max-w-[375px] flex-col justify-end overflow-hidden px-[24px] pb-[28px] pt-[120px]">
        <h2 className="max-w-[327px] text-[24px] font-[600] leading-[140%] text-[#262626]">
          How It Works To Find Your <br/> Relationship
        </h2>

        <div className="mt-[24px] max-w-[327px] space-y-[24px]">
          <div className="flex items-start gap-[16px]">
            <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#FF834F]/30">
              <img src={searchIcon} alt="search" className="h-[20px] w-[20px]" />
            </div>

            <p className="text-[16px] font-[400] leading-[24px] text-[#727272]">
              Find your dating relationship in app and waiting until you get a
              notification
            </p>
          </div>

          <div className="flex items-start gap-[16px]">
            <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#FF834F]/30">
              <img src={heartIcon} alt="like" className="h-[20px] w-[20px]" />
            </div>

            <p className="text-[16px] font-[400] leading-[24px] text-[#727272]">
              Dating with benefits and you redefine the expectations of a
              perfect relationship
            </p>
          </div>

          <div className="flex items-start gap-[16px]">
            <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#FF834F]/30">
              <img src={userIcon} alt="user" className="h-[20px] w-[20px]" />
            </div>

            <p className="text-[16px] font-[400] leading-[24px] text-[#727272]">
              Ideal relationship makes your online dating relationship run more
              smoothly using this app
            </p>
          </div>
        </div>
      </div>
    </div>

  </section>
)
}
export default ThirdSection
