import * as React from "react";
import { useState } from "react";
import { VscFlame } from "react-icons/vsc";
import { MdOutlineHistory } from "react-icons/md";
import { LuEye } from "react-icons/lu";
import MRanks from "@/assets/data/marketsranks.json"
import LRanks from "@/assets/data/userrankings.json"
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegCircleXmark } from "react-icons/fa6";
import { LuSettings2 } from "react-icons/lu";
import { FaArrowTrendUp } from "react-icons/fa6";
import { PiFlameBold } from "react-icons/pi";
import { FaListUl } from "react-icons/fa6";
import { BsGridFill } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectLabel
} from "@/components/ui/select"
import { IoSparklesSharp } from "react-icons/io5";
import { FaDroplet } from "react-icons/fa6";
import { RiTimerLine } from "react-icons/ri";
import { Progress } from "@/components/ui/progress"
import markets from "@/assets/data/markets.json"




const Home = () => {

    const [selectedValue, setSelectedValue] = useState("trending");

    const [view, setView] = useState("list");

    const handleViewChange = (value) => {
        setView(value)
        console.log("List");

    }

    const [infoTab, setInfoTab] = useState("popular")

    const handleInfoTabChange = (value) => {
        setInfoTab(value)
        console.log("List");

    }


    return (
        <div className=" w-full h-max flex items-center justify-center">
            <div className=" w-[96%] md:w-[98%] h-[530px] flex flex-col bg-[#f0f0f0] rounded-xl items-center font-mona py-2 px-2">
                {/* Scrolling Div */}
                <div className="relative w-full h-max flex flex-col rounded-xl items-center font-mona overflow-y-scroll overflow-x-hidden no-scrollbar">

                    {/* Info Sections */}
                    <div className=" w-[98%] h-max flex flex-col md:flex-row gap-3">
                        <div className=" w-full md:w-[60%] h-max bg-white rounded-lg flex flex-col px-5 py-4">
                            <div className=" w-full h-max flex justify-between pt-1 pb-3">
                                <p className=" font-monaMedium">Trending Markets</p>
                                <div className=" w-max h-max flex gap-2">
                                    <button className={infoTab === "popular" ? "active-blur-btn" : "inactive-blur-btn"} onClick={() => { handleInfoTabChange("popular") }}>
                                        <div className="bg-[#896CFF] shadow-[0_0_10px_#896CFF]">
                                            <VscFlame size={20} />
                                        </div>
                                    </button>
                                    <button className={infoTab === "history" ? "active-blur-btn" : "inactive-blur-btn"} onClick={() => { handleInfoTabChange("history") }}>
                                        <div className="bg-[#5B76FC] shadow-[0_0_10px_#5B76FC]">
                                            <MdOutlineHistory size={20} />
                                        </div>
                                    </button>
                                    <button className={infoTab === "mostVisited" ? "active-blur-btn" : "inactive-blur-btn"} onClick={() => { handleInfoTabChange("mostVisited") }}>
                                        <div className="bg-[#FFAD16] shadow-[0_0_10px_#FFAD16]">
                                            <LuEye size={20} />
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className=" w-full h-max flex flex-col">
                                {MRanks.map((rank) => {
                                    return (
                                        < div className=" w-full h-max flex items-center justify-between py-1" key={rank.id}>
                                            <div className=" w-max h-max flex gap-3 items-center">
                                                <p className=" font-monaSemi">{rank.id}</p>
                                                <div className="w-[35px] h-[35px] rounded-full overflow-hidden">
                                                    <img src={rank.image} alt="" className=" w-full h-full" />
                                                </div>
                                                <p className=" font-monaSemi text-[14px]">{rank.name}</p>
                                            </div>
                                            <p className="text-[#48B4A9] font-monaSemi">$ {rank.volume}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className=" w-full md:w-[40%] h-max bg-white rounded-lg flex flex-col px-5 py-4">
                            <div className=" w-full h-max flex justify-between pt-1 pb-3">
                                <p className=" font-monaMedium">Leaderboards (Volume Traded)</p>
                                <div className=" w-max h-max flex gap-3 items-center">
                                    <div className=" w-max h-max flex gap-2">
                                        <button className="active-blur-btn">
                                            <div className="bg-[#48B4A9]">
                                                <MdOutlineCurrencyExchange size={20} />
                                            </div>
                                        </button>
                                        <button className="inactive-blur-btn">
                                            <div className="">
                                                <FaHandHoldingDollar size={20} />
                                            </div>
                                        </button>
                                    </div>
                                    <button className=""><LuSettings2 size={20} /></button>
                                </div>
                            </div>
                            <div className=" w-full h-max flex flex-col">
                                {LRanks.map((rank) => {
                                    return (
                                        < div className=" w-full h-max flex items-center justify-between py-1" key={rank.id}>
                                            <div className=" w-max h-max flex gap-3 items-center">
                                                <p className=" font-monaSemi">{rank.id}</p>
                                                <div className="w-[35px] h-[35px] rounded-full overflow-hidden">
                                                    <img src={rank.image} alt="" className=" w-full h-full" />
                                                </div>
                                                <p className=" font-monaSemi text-[14px]">{rank.name}</p>
                                            </div>
                                            <p className="text-[#48B4A9] font-monaSemi">$ {rank.volume}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Filter Section */}
                    <div className="w-[98%] h-max flex flex-col md:flex-row py-2.5 gap-3">
                        {/* Left Section */}
                        <div className=" w-max h-max flex gap-2  items-center">
                            <button className=" w-max h-max flex active-market-btn gap-1.5 items-center">
                                <FaArrowTrendUp />
                                <p className="">Top</p>
                            </button>
                            <div className="w-[1px] h-[25px] bg-[#505050]"></div>
                            <div className="w-[360px] md:w-[582px] lg:w-[837px] h-max flex gap-2 overflow-x-scroll no-scrollbar">
                                <button className="active-market-btn">UCL</button>
                                <button className="market-btn">Trump</button>
                                <button className="market-btn">Ukraine vs Russia</button>
                                <button className="market-btn">Arsenal</button>
                                <button className="market-btn">Bitcoin</button>
                                <button className="market-btn">Tyson vs Paul</button>
                                <button className="market-btn">Putin</button>
                                <button className="market-btn">War</button>
                                <button className="market-btn">Elon Musk</button>
                                <button className="market-btn">Alex Hormozi</button>
                                <button className="market-btn">Forbes</button>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className=" w-max h-max flex gap-2">
                            <button className=" w-max h-max p-1.5 bg-white text-[#505050] rounded-lg hidden md:flex">
                                <MdKeyboardArrowRight size={22} />
                            </button>
                            <Select onValueChange={(value) => setSelectedValue(value)} defaultValue="trending">
                                <SelectTrigger className="w-[150px] h-[35px]">
                                    <div className="flex items-center gap-2">
                                        {selectedValue === "trending" && (
                                            <PiFlameBold className="h-4 w-4 text-[#505050]" />
                                        )}
                                        <SelectValue placeholder="Trending" />
                                    </div>
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Options</SelectLabel>

                                        {/* "Trending" item */}
                                        <SelectItem value="trending">
                                            <div className="flex items-center gap-2">
                                                {/* Conditional flame icon only if not already selected */}
                                                {selectedValue !== "trending" && (
                                                    <PiFlameBold className="h-4 w-4 text-[#505050]" />
                                                )}
                                                <p>Trending</p>
                                            </div>
                                        </SelectItem>

                                        {/* Other items */}
                                        <SelectItem value="new">
                                            <div className="flex items-center gap-2">
                                                <IoSparklesSharp className="h-4 w-4 text-[#505050]" />
                                                <p>New</p>
                                            </div>
                                        </SelectItem>

                                        <SelectItem value="liquid">
                                            <div className="flex items-center gap-2">
                                                <FaDroplet className="h-4 w-4 text-[#505050]" />
                                                <p>Liquid</p>
                                            </div>
                                        </SelectItem>

                                        <SelectItem value="ending">
                                            <div className="flex items-center gap-2">
                                                <RiTimerLine className="h-4 w-4 text-[#505050]" />
                                                <p>Ending Soon</p>
                                            </div>
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <div className=" w-[70px] h-[35px] bg-white rounded-lg flex p-0.5">
                                <button className={view === "list" ? "list-active-btn" : "list-inactive-btn"} onClick={() => handleViewChange("list")}>
                                    <FaListUl size={16} />
                                </button>
                                <button className={view === "grid" ? "grid-active-btn" : "grid-inactive-btn"} onClick={() => handleViewChange("grid")}>
                                    <BsGridFill size={16} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* List Markets Section */}
                    <div className={view === "list" ? "active-list-section" : "inactive-list-section"}>
                        <div className="w-[95%] h-max flex items-end justify-end pr-10 md:pr-16 pt-3 pb-2">
                            <div className=" w-max h-max flex gap-[130px] md:gap-[165px] self-end">
                                <p className=" text-[11px] text-[#a8a8a8]">Chance (%)</p>
                                <p className=" text-[11px] text-[#a8a8a8]">Volume</p>
                            </div>
                        </div>
                        <ul className="w-[95%] h-max flex flex-col">
                            {markets.map((market) => {
                                return (
                                    < li className=" w-full h-max flex border-b border-[#dedede] items-center justify-between py-4 px-2 md:px-5" key={market.id}>
                                        <div className=" w-max h-max flex gap-3 md:gap-7 items-center">
                                            <div className=" w-[30px] h-[30px] md:w-[45px] md:h-[45px] rounded-lg overflow-hidden">
                                                <img src={market.image} alt="" className="w-full h-full" />
                                            </div>
                                            <p className=" font-monaSemi text-[13px] md:text-[17px] text-[#3f3f3f]">{market.title}</p>
                                        </div>
                                        <div className=" w-max h-max flex gap-28 items-center">
                                            <Progress
                                                value={market.percentageChance} className="rounded-[5px] w-[90px] h-[35px] bg-[#f2f2f2] hidden md:flex" showValue indicatorClassName="bg-[#48B4A9]"
                                            />
                                            <div className=" font-monaMedium flex text-[13px] md:text-[16px]"><p className=""><span className="">$ </span>{market.tradeVolume}</p></div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    {/* Grid Markets Section */}
                    <ul className={view === "grid" ? "active-grid-section" : "inactive-grid-section"}>
                        {markets.map((market) => {
                            return (
                                < li className=" w-full h-[195px] bg-white rounded-xl" key={market.id}>
                                    <div className=" w-full h-max flex px-2 py-3 gap-3">
                                        <div className="w-[35px] h-[35px] rounded-full overflow-hidden">
                                            <img src={market.image} alt="" className=" w-full h-full" />
                                        </div>
                                        <p className=" w-[85%] font-monaSemi text-[13px]">{market.title}</p>
                                    </div>
                                    <div className="w-[95%] h-max flex flex-col gap-2">
                                        <div className=" w-full h-max flex items-center justify-between px-4">
                                            <p className="font-monaSemi text-[13px]">Sporting CP</p>
                                            <div className=" w-max h-max flex gap-2 items-center">
                                                <p className="text-[12px] font-monaSemi">34%</p>
                                                <div className=" w-max h-max flex gap-2">
                                                    <button className="w-max h-[30px] border border-[#48B4A9] rounded-lg bg-white p-0.5 flex items-center">
                                                        <div className=" rounded-[5px] bg-[#48B4A9] text-white text-[13px] font-monaMedium px-2.5 py-0.5">Yes</div>
                                                    </button>
                                                    <button className="w-max h-[30px] border border-[#FC3E3E] rounded-lg bg-white p-0.5 flex items-center">
                                                        <div className=" rounded-[5px] bg-[#FC3E3E] text-white text-[13px] font-monaMedium px-2.5 py-0.5">No</div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" w-full h-max flex items-center justify-between px-4">
                                            <p className="font-monaSemi text-[13px]">Draw</p>
                                            <div className=" w-max h-max flex gap-2 items-center">
                                                <p className="text-[12px] font-monaSemi">11%</p>
                                                <div className=" w-max h-max flex gap-2">
                                                    <button className="w-max h-[30px] border border-[#48B4A9] rounded-lg bg-white p-0.5 flex items-center">
                                                        <div className=" rounded-[5px] bg-[#48B4A9] text-white text-[13px] font-monaMedium px-2.5 py-0.5">Yes</div>
                                                    </button>
                                                    <button className="w-max h-[30px] border border-[#FC3E3E] rounded-lg bg-white p-0.5 flex items-center">
                                                        <div className=" rounded-[5px] bg-[#FC3E3E] text-white text-[13px] font-monaMedium px-2.5 py-0.5">No</div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" w-full h-max flex items-center justify-between px-4">
                                            <p className="font-monaSemi text-[13px]">Arsenal</p>
                                            <div className=" w-max h-max flex gap-2 items-center">
                                                <p className="text-[12px] font-monaSemi">55%</p>
                                                <div className=" w-max h-max flex gap-2">
                                                    <button className="w-max h-[30px] border border-[#48B4A9] rounded-lg bg-white p-0.5 flex items-center">
                                                        <div className=" rounded-[5px] bg-[#48B4A9] text-white text-[13px] font-monaMedium px-2.5 py-0.5">Yes</div>
                                                    </button>
                                                    <button className="w-max h-[30px] border border-[#FC3E3E] rounded-lg bg-white p-0.5 flex items-center">
                                                        <div className=" rounded-[5px] bg-[#FC3E3E] text-white text-[13px] font-monaMedium px-2.5 py-0.5">No</div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div >
        </div>
    );
}

export default Home;