import React from 'react';
import vidImg from '../../assets/img/image (6).png'
import tubeIcon from '../../assets/svg/logos_youtube-icon.svg'
import profile from '../../assets/img/image (7).png'
const DypiusVideo = () => {
    return (
        <div className='dypius-video'>
            <div className="image w-full relative">
                <div className='absolute top-0 left-0 p-4 flex gap-3 '>
                    <img src={profile} alt="" />
                    <p className='text-slate-100 text-xl'>DeFi Yield Protocol (DYP)...</p>
                </div>
                <img src={vidImg} className='w-full' alt="" />
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <button className="" onClick={() => document.getElementById('my_modal_2').showModal()}>
                        <img src={tubeIcon} alt="" />
                    </button>
                </div>
            </div>
            <div className='mt-2'>
                <p className='text-[#E8ECFF] text-[16px]'>Dypius</p>
                <p className='text-[#7C8090] text-[12px]'>Embrace new opportunities</p>
            </div>

            <div>
                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">
                        <iframe className='h-60 w-full' src="https://www.youtube.com/embed/P7Eq03O-LwI?si=jO6e1ZRry4SJ0neG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </div>
        </div>
    );
};

export default DypiusVideo;