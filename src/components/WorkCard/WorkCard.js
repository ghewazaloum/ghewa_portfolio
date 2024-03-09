import './WorkCard.css'
import {Button} from'../index'
function WorkCard (props){
    return(
        <div className="WorkCard">
            {props.children}
        </div>
    );
}
export default WorkCard