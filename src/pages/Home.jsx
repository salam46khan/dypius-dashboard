import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="bg-[#0A0F23] h-screen w-full flex justify-center items-center">
            <Link to={'/dashboard/dypius'}>
            <button className="my-btn">Go To Dashboard</button></Link>
        </div>
    );
};

export default Home;