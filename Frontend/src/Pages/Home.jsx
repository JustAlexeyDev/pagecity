import Header from "../Components/Header/Header";
import Slider from "../Components/Slider/Slider";
import VideoBlock from "../Components/VideoBlock/VideoBlock";
import Goals from "../Components/Goals/Goals";
import Service from "../Components/Service/Service";
import LastNews from "../Components/LastNews/LastNews";

const Home = () => {
    return(
        <div>
            <Header />
            <Slider />
            <VideoBlock />
            <Goals />
            <Service />
            <LastNews />
        </div>
    );
}
export default Home;