import './Header.css';
const Header = () => {
    return(
        <div className='header--container'>
            <div className='header--container_icon'></div>
            <a className='header--container_link_orange' href="#!">
                <p className='header--container_link_orange_text'>Главная</p>
            </a>
            <a className='header--container_link' href="#!">
                <p className='header--container_link-text'>Проекты</p>
            </a>
            <a className='header--container_link' href="#!">
                <p className='header--container_link-text'>Жалобы</p>
            </a>
            <a className='header--container_link' href="#!">
                <p className='header--container_link-text'>Новости</p>
            </a>
            <a className='header--container_link' href="#!">
                <p className='header--container_link-text'>Контакты</p>
            </a>
            <a className='header--container_link' href="#!">
                <p className='header--container_link-text'>Форум</p>
            </a>
            <a className='header--container_link' href="#!">
                <p className='header--container_link-text'>Услуги</p>
            </a>
            <a className='header--container_link-cabinet' href="">
                <p className='header--container_link-text'>Личный кабинет</p>
            </a>
        </div>
    );
}
export default Header;