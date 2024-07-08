import { FaStar } from 'react-icons/fa';
import img1 from '../../../assets/film1.png';
import img2 from '../../../assets/film2.png';
import img3 from '../../../assets/film3.png';
import img4 from '../../../assets/film4.png';
import { MdWatchLater } from 'react-icons/md';
import { TbCircleNumber4Filled } from 'react-icons/tb';

const Film = () => {
    return (
        <div className='ml-20 mr-20 bg-[#171717] rounded-xl'>
            <div className='flex text-center justify-center ml-20 mr-20 bg-[#171717] gap-5'>
                <div className='-mt-20'>
                <div>
                <img className='rounded-30px' src={img1} alt="" />
                </div>
                    <h2 className='text-xl font-bold text-white'>Samelill sronle</h2>
                    <div className='flex text-white'>
                        <div className='flex'>
                            <FaStar className='text-yellow-300' />
                        <p className='text-[#999999]'>9.5</p>
                        </div>
                        <div className='flex ml-3'>
                            <MdWatchLater className='my-1'/>
                            <p className='text-[#999999]'>2h 30min</p>
                        </div>
                        <div className='flex ml-3'>
                            <TbCircleNumber4Filled className='text-[#999999] my-1' />
                            <p className='text-[#999999]'>4k Quality</p>
                        </div>
                    </div>
                    <p className='text-white text-center text-[#999999] mb-10'>Action, Comedy</p>
                </div>
                <div className='-mt-20'>
                    <img className='rounded-30px' src={img2} alt="" />
                    <h2 className='text-xl font-bold text-white'>The family monky</h2>
                    <div className='flex text-white'>
                        <div className='flex'>
                            <FaStar className='text-yellow-300' />
                        <p className='text-[#999999]'>9.5</p>
                        </div>
                        <div className='flex ml-3'>
                            <MdWatchLater className='text-[#999999] my-1'/>
                            <p className='text-[#999999]'>2h 30min</p>
                        </div>
                        <div className='flex ml-3'>
                            <TbCircleNumber4Filled className='text-[#999999] my-1' />
                            <p className='text-[#999999]'>4k Quality</p>
                        </div>
                    </div>
                    <p className='text-white text-center text-[#999999]'>Action, Comedy</p>
                </div>
                <div className='-mt-20'>
                    <img className='rounded-30px' src={img3} alt="" />
                    <h2 className='text-xl font-bold text-white'>Chiefly universes</h2>
                    <div className='flex text-white'>
                        <div className='flex'>
                            <FaStar className='text-yellow-300' />
                        <p className='text-[#999999]'>9.5</p>
                        </div>
                        <div className='flex ml-3'>
                            <MdWatchLater className='text-[#999999] my-1'/>
                            <p className='text-[#999999]'>2h 30min</p>
                        </div>
                        <div className='flex ml-3'>
                            <TbCircleNumber4Filled className='text-[#999999] my-1' />
                            <p className='text-[#999999]'>4k Quality</p>
                        </div>
                    </div>
                    <p className='text-white text-center text-[#999999]'>Action, Comedy</p>
                </div>
                <div className='-mt-20'>
                    <img className='rounded-30px' src={img4} alt="" />
                    <h2 className='text-xl font-bold text-white'>World war 02</h2>
                    <div className='flex text-white'>
                        <div className='flex'>
                            <FaStar className='text-yellow-300' />
                        <p className='text-[#999999]'>9.5</p>
                        </div>
                        <div className='flex ml-3'>
                            <MdWatchLater className='text-[#999999] my-1'/>
                            <p className='text-[#999999]'>2h 30min</p>
                        </div>
                        <div className='flex ml-3'>
                            <TbCircleNumber4Filled className='text-[#999999] my-1' />
                            <p className='text-[#999999]'>4k Quality</p>
                        </div>
                    </div>
                    <p className='text-white text-center text-[#999999]'>Action, Comedy</p>
                </div>
            </div>
            
        </div>
    );
};

export default Film;