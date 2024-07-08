import { FaHome, FaStar, FaTv } from 'react-icons/fa';
import bannerImg from '../../../assets/Background.png';
import { MdWatchLater } from 'react-icons/md';
import { TbBrandZoom, TbCircleNumber4Filled } from 'react-icons/tb';
import { CiSearch } from 'react-icons/ci';
import { RiPlayList2Line } from 'react-icons/ri';
import { IoIosAmericanFootball, IoLogoGameControllerB } from 'react-icons/io';
import logo from '../../../assets/Subtract.png'
import { VscListFlat } from 'react-icons/vsc';
import { TiUserOutline } from 'react-icons/ti';

const Banner = () => {
  return (
    <div
      className="hero min-h-screen bg-cover bg-center flex "
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className='absolute top-10 left-10 right-10'>
        <div className='flex justify-between text-white ml-10 mr-10'>
          <div className='flex gap-10'>
             <div className='flex'>
                  <div><img src={logo} alt="" /></div>
                  <h2 className='text-3xl'>Holaa</h2>
             </div>
             <div>
                <VscListFlat className='my-1 text-3xl' />
             </div>
          </div>
          <div>
              <button className='btn' style={{ backgroundColor: '#FF5733', color: 'white' }}>SUBSCRIBE NOW</button>
              <button className='btn btn-circle text-white bg-black ml-5'><TiUserOutline /></button>
          </div>
        </div>
      </div>
    
      <div className=" p-10 bg-black rounded-lg text-white max-w-md ml-auto mr-40 items-center">
        <h1 className="text-5xl font-bold">THE LORD <br /> OF THE RINGS</h1>
        <div className="flex text-white mt-5">
          <div className="flex items-center mr-3">
            <FaStar className="text-yellow-300 mr-1" />
            <p className="text-[#999999]">9.5</p>
          </div>
          <div className="flex items-center mr-3">
            <MdWatchLater className="text-[#999999] mr-1" />
            <p className="text-[#999999]">2h 30min</p>
          </div>
          <div className="flex items-center">
            <TbCircleNumber4Filled className="text-[#999999] mr-1" />
            <p className="text-[#999999]">4k Quality</p>
          </div>
        </div>
        <p className="text-[#999999] mt-5 text-center text-sm no-wrap">
          The Lord of the Rings is a trilogy of epic fantasy adventure films directed.
        </p>
        <div className="flex gap-5 mt-10 mb-5 justify-center">
          <button className="btn"  style={{ backgroundColor: '#FF5733', color: 'white' }}>PLAY TRAILER</button>
          <button className="btn round-3xl bg-black">ADD TO LIST</button>
        </div>
      </div>
      <div>
        <div className='flex flex-col mr-5 p-5 bg-[#171717] round-xl'>
            <button className='btn btn-circle bg-black text-white text-xl'><FaHome/> </button>
            <button className='btn btn-circle bg-black text-white text-xl'><CiSearch /></button>
            <button className='btn btn-circle bg-black text-white text-xl'><TbBrandZoom /></button>
            <button className='btn btn-circle bg-black text-white text-xl'><RiPlayList2Line /></button>
            <button className='btn btn-circle bg-black text-white text-xl'><FaTv /></button>
            <button className='btn btn-circle bg-black text-white text-xl'><IoLogoGameControllerB /></button>
            <button className='btn btn-circle bg-black text-white text-xl'><IoIosAmericanFootball /></button>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
