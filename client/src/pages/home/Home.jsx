import Category from "@/components/Category";
import MainLayout from "@/components/MainLayout";
import { PopularServices } from "@/components/PopularServices";
import VideoComponent from "@/components/Video";
import {
  enjoyImg,
  fiverrLogoMakerImg,
  fiverrProLogo,
  google,
  happyImg,
  heroImage,
  logoMakerImg,
  meta,
  netflix,
  payoneer,
  paypal,
  pg,
  poolImg,
  premiumImg,
  quicklyImg,
  verifyIcon,
} from "@/helpers/Images";
import { IoIosSearch } from "react-icons/io";
import Video from "../../assets/Video.mp4";
import { VontelleServices } from "@/components/VontelleServices";
import MadeOnFiverr from "@/components/MadeOnFiverr";
const Home = () => {
  return (
    <MainLayout>
      <div className="container mx-auto mt-16">
        <div
          className="relative flex flex-col justify-center items-center h-[480px] bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <h1 className="font-macan text-6xl leading-[75px] text-white text-center">
            Scale your professional <br /> workforce with{" "}
            <span className="italic">freelancers</span>
          </h1>
          <div className="hidden md:flex w-[550px] relative mt-4">
            <input
              type="text"
              placeholder="Search for any service..."
              className="w-full bg-white px-2 py-3 text-gray-600 focus:ring-green-700 rounded-lg outline-none"
            />
            <span className="absolute right-2 top-1 rounded-sm w-10 h-10 flex justify-center items-center bg-green-800 text-white text-2xl">
              <IoIosSearch />
            </span>
          </div>
          <div className="absolute bottom-2 opacity-50 flex gap-10 justify-center items-center w-full">
            <span className="text-white">Trusted by:</span>
            <div className="flex gap-7 items-center">
              <img className="h-16 w-16  object-contain" src={meta} alt="" />
              <img className="h-16 w-14  object-contain" src={google} alt="" />
              <img className="h-16 w-14  object-contain" src={netflix} alt="" />
              <img className="h-16 w-10  object-contain" src={pg} alt="" />
              <img className="h-16 w-16  object-contain" src={paypal} alt="" />
              <img
                className="h-16 w-[85px]  object-contain"
                src={payoneer}
                alt=""
              />
            </div>
          </div>
        </div>
        <Category />
        <PopularServices />
        <section className="bg-[#E8FAF4] w-full px-16 py-12 rounded-2xl">
          <img src={fiverrProLogo} className="" alt="" />
          <div className="w-full flex justify-between">
            <div className="w-1/2">
              <h2 className="text-[51px] leading-tight mt-3 text-[#222325]  ">
                The{" "}
                <span className="font-serif text-6xl font-light text-[#1DBF73]">
                  premium
                </span>{" "}
                freelance solution for businesses
              </h2>
              <div className="w-full flex justify-between mt-5">
                <div className="w-1/2 flex flex-col gap-2">
                  <img src={verifyIcon} className="w-5 h-5" alt="" />
                  <span className="font-bold">Dedicated hiring experts</span>
                  <p>
                    Count on an account manager to find you the right talent and
                    see to your project’s every need.
                  </p>
                </div>
                <div className="w-1/2 flex flex-col gap-2">
                  <img src={verifyIcon} className="w-5 h-5" alt="" />
                  <span className="font-bold">Satisfaction guarantee</span>
                  <p>
                    Order confidently, with guaranteed refunds for
                    less-than-satisfactory deliveries.
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-between mt-5">
                <div className="w-1/2 flex flex-col gap-2">
                  <img src={verifyIcon} className="w-5 h-5" alt="" />
                  <span className="font-bold">Advanced management tools</span>
                  <p>
                    Seamlessly integrate freelancers into your team and
                    projects.
                  </p>
                </div>
                <div className="w-1/2 flex flex-col gap-2">
                  <img src={verifyIcon} className="w-5 h-5" alt="" />
                  <span className="font-bold">Flexible payment models</span>
                  <p>
                    Pay per project or opt for hourly rates to facilitate
                    longer-term collaboration.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <img src={premiumImg} className="w-full mt-2" alt="" />
            </div>
          </div>
          <div>
            <button className="bg-[#404145] text-white px-4 py-2 rounded-lg font-bold mt-5">
              Try Now
            </button>
          </div>
        </section>
        <section className="w-full my-10">
          <h1 className="text-[40px] text[#414045] font-normal">
            What success on Fiverr looks like
          </h1>
          <p className="text-[#707378]">
            Vontélle Eyewear turns to Fiverr freelancers to bring their vision
            to life.
          </p>
          <VideoComponent src={Video} />
        </section>
        <VontelleServices />
        <section className="w-full">
          <h1 className="text-[40px] text[#414045] font-normal">
            Make it all happen with freelancers
          </h1>
          <div className="w-full flex flex-wrap lg:justify-between my-10">
            <div className="w-1/5 px-2">
              <img className="w-16 h-16" src={poolImg} alt="" />
              <p className="text-[#4B4B4E] px-2">
                Access a pool of top talent across 700 categories
              </p>
            </div>
            <div className="w-1/5 px-2">
              <img className="w-16 h-16" src={enjoyImg} alt="" />
              <p className="text-[#4B4B4E] px-2">
                Enjoy a simple, easy-to-use matching experience
              </p>
            </div>
            <div className="w-1/5">
              <img className="w-16 h-16" src={quicklyImg} alt="" />
              <p className="text-[#4B4B4E] px-2">
                Get quality work done quickly and within budget
              </p>
            </div>
            <div className="w-1/5 ">
              <img className="w-16 h-16" src={happyImg} alt="" />
              <p className="text-[#4B4B4E] px-2">Only pay when you’re happy</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-[#232225] text-white px-4 py-2 rounded-lg font-bold mt-5">
              Try Now
            </button>
          </div>
        </section>
        <section className="relative bg-[#FFF7F3] w-full  rounded-2xl my-10 mt-16 py-10 px-8">
          <img src={fiverrLogoMakerImg} className="absolute top-14" alt="" />
          <div className="w-full flex">
            <div className="w-1/2 mt-16">
              <h2 className="text-[51px] leading-10 mt-3 text-[#222325] lg:mr-20  ">
                Make an incredible logo <span className="font-serif text-6xl font-light text-[rgb(252,131,43)]">
                   in seconds
                </span>
              </h2>
              <p className="text-[#63646B] my-7 text-2xl">Pre-designed by top talent. Just add your touch.</p>
                <button className="bg-[#404145] text-white px-4 py-2 rounded-lg font-bold mt-2">
                  Try Fiverr Logo Maker
                </button>
            </div>
            <div className="w-1/2">
              <img src={logoMakerImg} className="w-[80%]" alt="" />
            </div>
          </div>
        </section>
        <MadeOnFiverr columnCount="4" gap="8"/>
        
      </div>
    </MainLayout>
  );
};  

export default Home;
