import React from 'react'
import { LuChartCandlestick, LuBell } from "react-icons/lu";
import { FaListUl } from "react-icons/fa6";
import { IoWalletOutline } from "react-icons/io5";
import { PiHandDepositDuotone, PiHandWithdrawDuotone, PiListDashesDuotone } from "react-icons/pi";
import { TrendingUp } from 'lucide-react';
import { PiRankingLight } from "react-icons/pi";
import { LiaBalanceScaleSolid } from "react-icons/lia";



function Dashboard() {
  return (
    <div className="w-full h-max flex items-center justify-center font-mona">
      <div className='div className=" w-[96%] md:w-[98%] h-[530px] flex flex-col bg-[#f0f0f0] rounded-xl items-center font-mona py-2 px-2'>
        <div className=" w-[97%] h-max flex justify-between pt-2">
          <p className=" font-monaMedium text-[20px]">Dashboard</p>
          <div className=" w-max h-max flex gap-3">
            <button className=" w-max h-max flex items-center gap-2 rounded-full bg-white px-4 py-2">
              <LuChartCandlestick size={14} />
              <p className=" text-[14px]">Create Market</p>
            </button>
            <button className=" w-max h-max flex items-center gap-2 rounded-full bg-white px-4 py-2">
              <LuBell size={14} />
              <p className=" text-[14px]">View Market Changes</p>
            </button>
            <button className=" w-max h-max flex items-center gap-2 rounded-full bg-white px-4 py-2">
              <FaListUl size={14} />
              <p className=" text-[14px]">View Watchlist</p>
            </button>
          </div>
        </div>
        <div className="w-[97%] h-max flex gap-4 justify-between pt-2">
          <div className=" w-[50%] h-max flex flex-col gap-3">
            {/* Top 2 */}
            <div className=" w-full h-max flex gap-3">
              {/* Available Balance Section */}
              <div className=" w-[50%] rounded-lg bg-white flex flex-col px-3 py-3 gap-4">
                <div className=" w-full h-max flex justify-between">
                  <button className="active-blur-btn">
                    <div className="bg-[#896CFF] shadow-[0_0_10px_#896CFF]">
                      <IoWalletOutline size={20} />
                    </div>
                  </button>

                  <div className=" w-max h-max flex gap-2">
                    <button className="inactive-blur-btn">
                      <div className="bg-[#896CFF]">
                        <PiHandDepositDuotone size={20} />
                      </div>
                    </button>
                    <button className="inactive-blur-btn">
                      <div className="bg-[#896CFF]">
                        <PiHandWithdrawDuotone size={20} />
                      </div>
                    </button>
                  </div>
                </div>
                <div className=" w-max h-max flex flex-col gap-1">
                  <p className=" text-[12px] text-[#6c6c6c] font-monaLight">Available Balance</p>
                  <p className=" font-monaSemi text-[19px]">$<span className=''>10.<span className="text-[15px]">52</span></span></p>
                </div>
                <div className=" w-full rounded-full py-2 px-3 border border-[#c5c5c5] flex items-end gap-1 justify-between">
                  <div className=" w-max h-max flex gap-2 items-center">
                    <div className=" w-max h-max flex font-monaSemi text-[13px]"><span className="">+</span><p className="">300.43</p></div>
                    <p className=" font-mona text-[11px]"><span className="">2</span> days ago</p>
                  </div>
                  <div className=" w-max h-max flex gap-1 items-center">
                    <TrendingUp size={12} className='text-[#0D9488]' />
                    <p className=" font-monaMedium text-[11px] text-[#0D9488]">300%</p>
                  </div>
                </div>
              </div>

              {/* Staked Market Rankings Section */}
              <div className=" w-[50%] rounded-lg bg-white flex flex-col px-3 py-3 gap-4">
                <div className=" w-full h-max flex justify-between">
                  <button className="active-blur-btn">
                    <div className="bg-[#FFB528] shadow-[0_0_10px_#FFB528]">
                      <PiRankingLight size={20} />
                    </div>
                  </button>

                  <div className=" w-max h-max flex gap-2">
                    <button className="inactive-blur-btn">
                      <div className="bg-[#896CFF]">
                        <PiListDashesDuotone size={20} />
                      </div>
                    </button>
                  </div>
                </div>
                <div className=" w-max h-max flex flex-col gap-1">
                  <p className=" text-[12px] text-[#6c6c6c] font-monaLight">Staked Markets Reward Rankings</p>
                  <p className=" font-monaSemi text-[19px]">250,986</p>
                </div>
                <div className=" w-full rounded-full py-2 px-3 border border-[#c5c5c5] flex items-end gap-1 justify-between">
                  <div className=" w-max h-max flex gap-2 items-center">
                    <div className=" w-max h-max flex font-monaSemi text-[13px] gap-0.5"><span className="">Top </span><p className=""> 17</p>%</div>
                    <p className=" font-mona text-[11px]"><span className="">2</span> days ago</p>
                  </div>
                  <div className=" w-max h-max flex gap-1 items-center">
                    <TrendingUp size={12} className='text-[#0D9488]' />
                    <p className=" font-monaMedium text-[11px] text-[#0D9488]">17%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom 1 */}
            <div className=" w-full h-max rounded-lg bg-white flex flex-col px-3 py-4 gap-4">
              <div className=" w-full h-max flex justify-between">
                <button className="active-blur-btn">
                  <div className="bg-[#5B76FC] shadow-[0_0_10px_#5B76FC]">
                    <LiaBalanceScaleSolid size={20} />
                  </div>
                </button>
              </div>
              <div className=" w-max h-max flex flex-col gap-1">
                <p className=" text-[12px] text-[#6c6c6c] font-monaLight">Potential Gains/Losses</p>
                <div className=" w-max h-max flex gap-1.5 items-center">
                  <p className=" font-monaSemi text-[19px] text-[#40A097]"><span className=''>47</span>%</p>
                  <p className=" font-monaSemi text-[20px]">-</p>
                  <p className=" font-monaSemi text-[19px] text-[#FC3E3E]"><span className=''>53</span>%</p>
                </div>
              </div>
              <div className=" w-full rounded-full py-2 px-3 border border-[#c5c5c5] flex items-end gap-1 justify-between">
                <div className=" w-max h-max flex gap-1 items-center">
                  <TrendingUp size={12} className='text-[#0D9488]' />
                  <p className=" font-monaMedium text-[11px] text-[#0D9488]">30,523</p>
                </div>
                <div className=" w-max h-max flex gap-1 items-center">
                  <TrendingUp size={12} className='text-[#FC3E3E]' />
                  <p className=" font-monaMedium text-[11px] text-[#FC3E3E]">34,420</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[50%] h-max flex flex-col gap-4 bg-white rounded-lg py-4 px-3">
            <div className=" w-full h-max flex justify-between px-3">
              <p className=" font-monaMedium text-[18px]">Portfolio Trends</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
