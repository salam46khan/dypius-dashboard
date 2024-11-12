import { TbCurrencyEthereum } from "react-icons/tb";

const EarnOption = ({number, icon}) => {
    return (
        <div className="flex items-center justify-center gap-2 text-[#FFFFFF] ">
            <div className="h-6 w-6 border border-[#A4AABF50] rounded-full flex justify-center items-center">
                {icon}
            </div>
            <p className="text-[16px] text-[#FFFFFF]">{number}</p>
        </div>
    );
};

export default EarnOption;