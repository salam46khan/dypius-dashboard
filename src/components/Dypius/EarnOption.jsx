import { TbCurrencyEthereum } from "react-icons/tb";

const EarnOption = () => {
    return (
        <div className="flex items-center justify-center gap-2 text-[#FFFFFF]">
            <div className="h-6 w-6 border border-[#A4AABF50] rounded-full flex justify-center items-center">
                <TbCurrencyEthereum />
            </div>
            <p className="text-[16px] text-[#FFFFFF]">9,188</p>
        </div>
    );
};

export default EarnOption;