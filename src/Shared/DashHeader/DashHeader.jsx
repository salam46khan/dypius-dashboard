import { FaBars, FaChevronDown, FaCoins } from 'react-icons/fa';
import './DashHeader.css'
import { TbCurrencyEthereum } from 'react-icons/tb';
import { IoWalletOutline } from 'react-icons/io5';
import profile from '../../assets/img/c730cdf1e939e8da69fbf256396defae.png'
import { useState } from 'react';
const DashHeader = () => {
    const [openNav, setOpenNav] = useState(false)
    return (
        <div className="p-5 flex justify-between gap-4 items-center relative">
            <div>
                <h3 className='text-[18px] text-[#E8ECFF]'>Good Morning, Dypian!</h3>
                <p className='text-[12px] text-[#7C8090] hidden md:block'>Explore latest trends, news, and powerful dApps access.</p>
            </div>
            <div >

                <div className='md:flex hidden items-center gap-4'>
                    <div className='h-12 w-12 rounded-full liniar-btn'>
                        <FaCoins className='text-xl' />
                    </div>
                    <div className='liniar-btn h-12 rounded-full px-4'>
                        <TbCurrencyEthereum className='border h-7 p-1 w-7 rounded-full border-[#FDFDFF30]' />
                        <span>Ethereum</span>
                        <FaChevronDown />

                    </div>
                    <div className='my-btn h-12'>
                        <IoWalletOutline />
                        <span>Connect</span>
                    </div>

                    <div className='h-12 w-12 rounded-full overflow-hidden border-[#FDFDFF30] border'>
                        <img className='w-full object-fill' src={profile} alt="" />
                    </div>
                </div>
                <div className='block md:hidden'>
                    <button onClick={() => setOpenNav(!openNav)} className='h-12 w-12 rounded-full liniar-btn'>
                        <FaBars className='text-xl' />
                    </button>

                    <div className={`overflow-hidden flex flex-col gap-3 duration-300 absolute right-1 top-24 bg-slate-300 bg-opacity-15 p-2 ${openNav ? 'h-auto ' : 'h-0 hidden'}`}>


                        <div className='flex !justify-start h-12 p-1 w-full liniar-btn rounded-full'>
                            <div className='h-10 w-10 rounded-full overflow-hidden border-[#FDFDFF30] border flex'>
                                <img className='w-full object-fill' src={profile} alt="" />
                            </div>
                            <span>Profile</span>
                        </div>

                        <div className='h-12 w-full !justify-start px-1 rounded-full liniar-btn'>
                            <FaCoins className='rounded-full border-[#FDFDFF30] p-2 h-10 w-10 border' />
                            <span>Balance</span>
                        </div>
                        <div className='liniar-btn h-12 rounded-full px-4'>
                            <TbCurrencyEthereum className='border h-7 p-1 w-7 rounded-full border-[#FDFDFF30]' />
                            <span>Ethereum</span>
                            <FaChevronDown />

                        </div>
                        <div className='my-btn h-12'>
                            <IoWalletOutline />
                            <span>Connect</span>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default DashHeader;