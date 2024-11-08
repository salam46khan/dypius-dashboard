import DypiusVideo from "../../components/Dypius/DypiusVideo";
import Earn from "../../components/Dypius/Earn";
import './Dypius.css'

const Dypius = () => {
    return (
        <div>
            <div className="w-full flex flex-col md:flex-row justify-center items-stretch">
                <div className="w-full md:w-2/3">
                    <Earn />
                </div>
                <div className="w-full md:w-1/3">
                    <DypiusVideo />
                </div>
            </div>
        </div>
    );
};

export default Dypius;