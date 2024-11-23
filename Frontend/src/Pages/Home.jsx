import Header from "../Components/Header/Header";
import Slider from "../Components/Slider/Slider";
import VideoBlock from "../Components/VideoBlock/VideoBlock";
import Goals from "../Components/Goals/Goals";
import Service from "../Components/Service/Service";

const Home = () => {
    return(
        <div>
            <Header />
            <Slider />
            <VideoBlock />
            <Goals />
            <Service />
        </div>
    );
}
export default Home;