import './Button.css';
const Button = ({text}) => {
    return(
        <button className='Button--Container'>
            {text}
        </button>
    );
}
export default Button;




{/* <button className='Button--Container'>
    <span className='Button--Container__RedFlag'></span>
    <span className='Button--Container__BlueFlag--Container'></span>
</button> */}
