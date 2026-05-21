import searchIcon from "../assets/search.svg";
import heartIcon from "../assets/like.svg";
import userIcon from "../assets/useradd.svg";


function ThirdSection() {
return (
  <section className="w-full h-[670px] bg-white flex items-center relative overflow-hidden border-t border-b border-[#d9d9d9]">

    <div className="ml-[140px] mt-[103px] w-[457px] mb-[98px]" >

      <h2 className="text-[40px] font-[600] text-[#262626] leading-[56px]">
        How It Works To Find
        <br />
        Your Relationship
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

  </section>
)
}
export default ThirdSection