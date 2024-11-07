import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/svg/toolsLogoActive.2940d42d1244a6d81e9a03dddbb3c753 1.svg'
import { LuArrowDownUp } from 'react-icons/lu';
import './SideNav.css'
import { IoDocumentTextOutline, IoGameControllerOutline, IoLayersOutline, IoTicket } from 'react-icons/io5';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import { RiAwardLine } from 'react-icons/ri';
import { SiWorldhealthorganization } from 'react-icons/si';
import { PiBridgeLight, PiPlantBold } from 'react-icons/pi';
import { MdOutlineLockOpen } from 'react-icons/md';

const SideNav = () => {
    return (
        <div className='sidenav py-3 p-2'>
            <Link to={'/'} className='h-12 w-12 my-2 md:w-auto p-1 block'>
                <img className='object-cover h-full object-left' src={logo} alt="" />
            </Link>

            <div className='text-[#525668] p-1'>
                <p className='uppercase my-4 text-center md:text-start'>Main <span className='hidden md:inline-block'>Menu</span></p>

                <ul className='flex flex-col items-center md:items-start gap-2'>
                    <li className=' w-full rounded-full overflow-hidden'>
                        <NavLink to={'/dashboard/migration'}>
                            <LuArrowDownUp className='text-2xl md:text-lg ' />
                            <span className='hidden md:inline-block'>Migration</span>
                        </NavLink>
                    </li>
                    <li className='w-full  rounded-full overflow-hidden'>
                        <NavLink to={'/dashboard/dypius'}>
                            <IoTicket className='text-2xl md:text-lg ' />
                            <span className='hidden md:inline-block'>Dypius</span>
                        </NavLink>
                    </li>
                    <li className='w-full  rounded-full overflow-hidden'>
                        <NavLink to={'/dashboard/staking'}>
                            <IoLayersOutline className='text-2xl md:text-lg ' />
                            <span className='hidden md:inline-block'>Staking</span>
                        </NavLink>
                    </li>
                    <li className='w-full  rounded-full overflow-hidden'>
                        <NavLink to={'/dashboard/launchpad'}>
                            <HiOutlineRocketLaunch className='text-2xl md:text-lg ' />
                            <span className='hidden md:inline-block'>Launchpad</span>
                        </NavLink>
                    </li>
                    <li className='w-full  rounded-full overflow-hidden'>
                        <NavLink to={'/dashboard/games'}>
                            <IoGameControllerOutline className='text-2xl md:text-lg ' />
                            <span className='hidden md:inline-block'>Games</span>
                        </NavLink>
                    </li>
                    <li className='w-full  rounded-full overflow-hidden'>
                        <NavLink to={'/dashboard/loyalty'}>
                            <RiAwardLine className='text-2xl md:text-lg ' />
                            <span className='hidden md:inline-block'>Loyalty</span>
                        </NavLink>
                    </li>

                </ul>

                <p className='uppercase my-4 text-center md:text-start'>Other</p>

                <ul className='flex flex-col items-center md:items-start gap-2'>
                    <li className=' w-full rounded-full overflow-hidden'>
                        <NavLink to={'/dashboard/governance'}>
                            <SiWorldhealthorganization  className='text-2xl md:text-lg ' />
                            <span className='hidden md:inline-block'>Governance</span>
                        </NavLink>
                    </li>
                    <li className=' w-full rounded-full overflow-hidden'>
                        <NavLink to={'/dashboard/bridge'}>
                            <PiBridgeLight  className='text-2xl md:text-lg ' />
                            <span className='hidden md:inline-block'>Bridge</span>
                        </NavLink>
                    </li>
                    <li className=' w-full rounded-full overflow-hidden'>
                        <NavLink to={'/dashboard/yields'}>
                            <PiPlantBold  className='text-2xl md:text-lg ' />
                            <span className='hidden md:inline-block'>Yields</span>
                        </NavLink>
                    </li>
                    <li className=' w-full rounded-full overflow-hidden'>
                        <NavLink to={'/dashboard/locker'}>
                            <MdOutlineLockOpen className='text-2xl md:text-lg ' />
                            <span className='hidden md:inline-block'>DYP Locker</span>
                        </NavLink>
                    </li>
                    <li className=' w-full rounded-full overflow-hidden'>
                        <NavLink to={'/dashboard/news'}>
                            <IoDocumentTextOutline className='text-2xl md:text-lg ' />
                            <span className='hidden md:inline-block'>News</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div>

            </div>
        </div>
    );
};

export default SideNav;