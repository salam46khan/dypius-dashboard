import coinBG from '../../assets/svg/coinBackground.25219c3dcba12fca50d1 1.svg'
import coinImg from '../../assets/img/download 1.png'
import EarnOption from './EarnOption';
import { TbCurrencyEthereum } from 'react-icons/tb';
import { FaBitcoin } from 'react-icons/fa';
import { SiAvast } from 'react-icons/si';
const Earn = () => {
    return (
        <div className="earn flex flex-col md:flex-row gap-4">
            <div className='w-full md:w-[60%] space-y-5'>
                <h1 className="text-[40px] text-[#E8ECFF]">Dypius Earn</h1>
                <p className="text-[#A4AABF] text-[16px] w-full max-w-sm">
                    Maximize your assets with Dypius Earn products. Dypius provides three productive methods to utilize your assets: Staking, Farming, and Vault. Begin earning now!
                </p>
                <div className='flex items-center gap-3 justify-start '>
                    <EarnOption icon={<TbCurrencyEthereum />} number={9188}/>
                    <div className='earn-divider'></div>
                    <EarnOption icon={<FaBitcoin />} number={10195}/>
                    <div className='earn-divider'></div>
                    <EarnOption icon={<SiAvast />} number={27000}/>
                    
                </div>
            </div>
            <div className='w-full md:w-[40%] relative'>
                <img className='w-full h-full object-cover' src={coinBG} alt="" />
                <img className='absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2' src={coinImg} alt="" />
            </div>
        </div>
    );
};

export default Earn;