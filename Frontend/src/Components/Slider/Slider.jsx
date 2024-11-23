import './Slider.css';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
    return(
        <div className="Slider--Container">
            <div className='Slider--Container__Content'>
                <div className='Slider--Container__Content--Text'>
                    <h1>Paged city</h1>
                    <p>Наш проект Paged City помогает горожанам, которые хотят следить за
                        городской средой. Он обеспечит жителей информацией о важных
                        изменениях в инфраструктуре и городской системе благоустройства.</p>
                </div>
                <div className='Slider--Container__Content--Buttons'>
                    <button className='Slider--Container__Content--FirstButton'>НАПИСАТЬ</button>
                    <button className='Slider--Container__Content--SecondButton'>ОТПРАВИТЬ ВОПРОС</button>
                </div>
            </div>
        </div>
    );
}
export default Slider;