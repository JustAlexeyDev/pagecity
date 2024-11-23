import './Button.css';
const Button = ({text}) => {
    return(
        <button className='Button--Container'>
            {text}
        </button>
    );
}
export default Button;