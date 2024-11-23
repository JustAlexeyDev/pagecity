import './Service.css';

import Bussines from '../../Assets/Images/Services/Bussines.svg';
import Plan from '../../Assets/Images/Services/Plan.svg';
import Bricks from '../../Assets/Images/Services/Bricks.svg';

const Service = () => {
    return(
        <div className="Service--Container Component">
            <div>
                <h1>Наши услуги</h1>
            </div>
            <div className='Service--Container--Block'>

                <div className='Service--Container--Block__Item'>
                    <img src={Bricks} alt='icon'/>
                    <p>Реконструкции</p>
                </div>

                <div className='Service--Container--Block__Item'>
                    <img src={Plan} alt='icon'/>
                    <p>Разработка проекта</p>
                </div>


                <div className='Service--Container--Block__Item'>
                    <img src={Bussines} alt='icon'/>
                    <p>Сопровождение бизнес проектов</p>
                </div>


            </div>
            <div className='Service--Container--Block__More'>
                <h2>Узнайте больше о наших услугах</h2>
                <button>ПРОСМОТР СЕРВИСОВ</button>
            </div>
        </div>
    );
}
export default Service;