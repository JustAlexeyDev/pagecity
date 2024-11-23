import './Header.css';
import logo from '../../Assets/Images/logo.svg';
import { useState, useEffect } from 'react';

const Header = () => {
    const [activeButton, setActiveButton] = useState(null);


    const handleClick = (event) => {
        const buttonId = event.currentTarget.id;
        setActiveButton(buttonId);
    }

    return(
        <div className="Header--Container">
            <button>
                <img src={logo} alt="Logo"/>
            </button>
            <span className='Header--Container__Nav--Block'>
                <button 
                    id='1' 
                    onClick={handleClick}
                    className={activeButton === '1' ? 'accent--color' : ''}
                >Главная</button>
                <button 
                    id='2' 
                    onClick={handleClick}
                    className={activeButton === '2' ? 'accent--color' : ''}
                >Проекты</button>
                <button 
                    id='3'  
                    onClick={handleClick}
                    className={activeButton === '3' ? 'accent--color' : ''}
                >Жалобы</button>
                <button 
                    id='4'  
                    onClick={handleClick}
                    className={activeButton === '4' ? 'accent--color' : ''}
                >Контакты</button>
                <button 
                    id='5'  
                    onClick={handleClick}
                    className={activeButton === '5' ? 'accent--color' : ''}
                >Форум</button>
                <button 
                    id='6'  
                    onClick={handleClick}
                    className={activeButton === '6' ? 'accent--color' : ''}
                >Услуги</button>
            </span>
            <button>
                Личный Кабинет
            </button>
        </div>
    );
}
export default Header;