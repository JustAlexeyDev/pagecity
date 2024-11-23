import './HeroSlider.css';

const HeroSlider = () => {
    return(
        <div className='HeroSlider'>
            <div className='HeroSlider--Container'>
                <div className='HeroSlider--Container__Center'>
                    <p className='HeroSlider--Container__Center__Glav'>Paged city</p>
                    <p className='HeroSlider--Container__Center__text'>
                        Наша платформа Paged City помогает горожанам, которые хотят следить за
                        городской средой. Он обеспечит жителей информацией о важных
                        изменениях в инфраструктуре и городской системе благоустройства.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default HeroSlider;