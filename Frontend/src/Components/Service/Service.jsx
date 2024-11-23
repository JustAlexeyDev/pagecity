import './Service.css';

const Service = () => {
    return(
        <div className="Service--Container">
            <div>
                <h1>Наши услуги</h1>
            </div>
            <div className='Service--Container--Block'>

                <div className='Service--Container--Block__Item'>
                    <p>Реконструкции</p>
                </div>

                <div className='Service--Container--Block__Item'>
                    <p>Разработка проекта</p>
                </div>


                <div className='Service--Container--Block__Item'>
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