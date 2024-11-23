import './Header.css';
const Header = () => {
    return(
        <div>
            <div className='Header--Container'>
                <div className='Header--Container_Icon'></div>
                <a className='Header--Container_Link_Orange ' href="#!">
                    <p className='Header--Container_Link_Orange_Text'>Главная</p>
                </a>
                <a className='Header--Container_Link' href="#!">
                    <p className='Header--Container_Link-Text'>Проекты</p>
                </a>
                <a className='Header--Container_Link' href="#!">
                    <p className='Header--Container_Link-Text'>Жалобы</p>
                </a>
                <a className='Header--Container_Link' href="#!">
                    <p className='Header--Container_Link-Text'>Новости</p>
                </a>
                <a className='Header--Container_Link' href="#!">
                    <p className='Header--Container_Link-Text'>Контакты</p>
                </a>
                <a className='Header--Container_Link' href="#!">
                    <p className='Header--Container_Link-Text'>Форум</p>
                </a>
                <a className='Header--Container_Link' href="#!">
                    <p className='Header--Container_Link-Text'>Услуги</p>
                </a>
                <a className='Header--Container_Link-Cabinet' href="">
                    <p className='Header--Container_Link-Text'>Личный кабинет</p>
                </a>
            </div>
        </div>
    );
}
export default Header;