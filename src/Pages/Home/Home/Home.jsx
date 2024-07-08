import Banner from "../Banner/Banner";
import Film from "../Film/Film";
import Slider from "../Slider/Slider";

const Home =()=>{
    return (
        <div className="bg-black">
            <Banner></Banner>
            <Film></Film>
            <Slider></Slider>
        </div>
    )
}

export default Home;