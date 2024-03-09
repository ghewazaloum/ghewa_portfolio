import { Link } from 'react-scroll';
import './Button.css'
function Button (props){
    let href =props.href;
    console.log(href)
    return(
        <a href={href}>
        <button className="focus">
            {props.children}
        </button>
        </a>
    );
}
function UnFocusedButton (props){
    return(
        <Link to='5'smooth={true}duration={500}>
        <button  className="Unfocus">
            {props.children}
        </button>
        </Link>
    );
}
export default Button
export {UnFocusedButton}