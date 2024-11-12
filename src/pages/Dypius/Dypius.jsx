import DypiusVideo from "../../components/Dypius/DypiusVideo";
import Earn from "../../components/Dypius/Earn";
import './Dypius.css'

const Dypius = () => {
    return (
        <div>
            <div className="w-full flex flex-col md:flex-row gap-4 items-stretch justify-stretch">
                <div className="w-full md:w-2/3">
                    <Earn />
                </div>
                <div className="w-full md:w-1/3 overflow-hidden">
                    <DypiusVideo />
                </div>
            </div>
        </div>
    );
};

export default Dypius;