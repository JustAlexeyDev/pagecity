import './Goals.css';

import like from '../../Assets/Images/goals/ic-like.svg';
import hand from '../../Assets/Images/goals/ic-hand.svg';
import slippers from '../../Assets/Images/goals/ic-slippers.svg';

const Goals = () => {
    return(
        <div className="Goals--Container">
            <div>
                <h1>Наши основные цели</h1>
                <p>Наша миссия – устанавливать самые высокие стандарты в строительной сфере.</p>
            </div>

            <div className='Goals--Container__Card'>

                <div className='Goals--Container__Card--Box'>
                    <img src={like} alt='icon' />
                    <h2>Цель 1</h2>
                    <p>Окончательный текст будет готов в ближайшее время.</p>
                </div>
                <div className='Goals--Container__Card--Box'>
                    <img src={hand} alt='icon' />
                    <h2>Цель 1</h2>
                    <p>Окончательный текст будет готов в ближайшее время.</p>
                </div>
                <div className='Goals--Container__Card--Box'>
                <img src={slippers} alt='icon' />
                    <h2>Цель 1</h2>
                    <p>Окончательный текст будет готов в ближайшее время.</p>
                </div>


            </div>
                <h1>Несколько фактов и цифр</h1>
                <div className='Elipse--Container'>
                    <div className='Elipse--Block'>
                        0%
                    </div>
                    <div className='Elipse--Block'>
                        1
                    </div>
                    <div className='Elipse--Block'>
                        52
                    </div>
                    <div className='Elipse--Block'>
                        50%
                    </div>
                </div>
               
        </div>
    );
}
export default Goals;