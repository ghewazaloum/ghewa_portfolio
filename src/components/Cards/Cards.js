import './Cards.css'
function Cards (props){
    return (
        <div className="Card">
            <div className="icon">
                {props.children}
            </div>
            <p>{props.skill}</p>
        </div>
    );
}
export default Cards