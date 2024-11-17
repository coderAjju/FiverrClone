import { IoChevronDown,IoChevronUp } from "react-icons/io5";
import logo from "../assets/logo.svg";
import { TbWorld } from "react-icons/tb";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { fiverrProImg1, fiverrProImg2 } from "@/helpers/Images";
import { useState } from "react";
const Navbar = () => {
  const [chevronDown, setChevronDown] = useState(false);
  const handleChevron =()=>{
    alert("helo")
  }
  console.log(chevronDown)
  return (
    <div className="w-full h-[80px] bg-white flex justify-center items-center fixed top-0 z-50 border-b-[1px] border-gray-100">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <ul className="flex gap-3">
            <li className="relative px-4 py-2 hover:bg-gray-200 rounded-lg tansition-all duration-150 ease-linear">
              <DropdownMenu>
                <DropdownMenuTrigger className=" text-black font-bold flex gap-1 items-center outline-none">
                  Fiverr Pro <IoChevronDown />{" "}
                </DropdownMenuTrigger>
                <DropdownMenuContent className=" w-96 absolute top-2 -left-20 p-3 flex flex-col gap-6 ">
                  <DropdownMenuItem className="flex gap-4 border p-3">
                    <div>
                      <img src={fiverrProImg1} alt="" />
                    </div>
                    <div>
                      <h3>I{"`"}m looking to hire</h3>
                      <p>
                        My team needs vetted freelance talent and a premium
                        business solution.
                      </p>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex gap-4 border p-3">
                    <div>
                      <img src={fiverrProImg2} alt="" />
                    </div>
                    <div>
                      <h3>I want to offer pro services</h3>
                      <p>
                        I do like to work on business projects as a Pro
                        freelancer or agency.
                      </p>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100  rounded-lg tansition-all duration-150 ease-linear">
              <DropdownMenu>
                <DropdownMenuTrigger onClick={handleChevron} className=" outline-none flex gap-1 items-center select-none">
                  Explore  <IoChevronDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent className=" w-72 absolute top-2 -left-20 py-3 flex flex-col gap-1 ">
                  <DropdownMenuItem className="flex flex-col text-xs justify-start items-start ">
                    <span className="font-bold">Answer</span>
                    <p>Powered by AI, answered by fiverr frelancer</p>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex flex-col text-xs justify-start items-start ">
                    <span className="font-bold">Community</span>
                    <p>Powered by AI, answered by fiverr frelancer</p>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex flex-col text-xs justify-start items-start ">
                    <span className="font-bold">Guides</span>
                    <p>Powered by AI, answered by fiverr frelancer</p>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex flex-col text-xs justify-start items-start ">
                    <span className="font-bold">Podcast</span>
                    <p>Powered by AI, answered by fiverr frelancer</p>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex flex-col text-xs justify-start items-start ">
                    <span className="font-bold">Learn</span>
                    <p>Powered by AI, answered by fiverr frelancer</p>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex flex-col text-xs justify-start items-start ">
                    <span className="font-bold">Blog</span>
                    <p>Powered by AI, answered by fiverr frelancer</p>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li className="hover:text-[#1dbf73] text-gray-600 transition-all duration-150 ease-linear py-2 px-4 font-bold">
              <span className="flex items-center flex-row-reverse gap-1">
                English <TbWorld />
              </span>
            </li>
            <li className="hover:text-[#1dbf73] text-gray-600 transition-all duration-150 ease-linear py-2 px-4 font-bold">
              Become a seller
            </li>
            <li className="hover:text-[#1dbf73] text-gray-600 transition-all duration-150 ease-linear py-2 px-4 font-bold">
              Sign in
            </li>
            <button className="px-5 font-bold rounded-md py-0 border border-[#1dbf73] text-[#1dbf73] hover:bg-[#1dbf73] hover:text-white transition-all duration-150 ease-linear">
              Join
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
