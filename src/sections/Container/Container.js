import './Container.css'
function Container(props){
    return(
        <div className="container" id="1">
            {props.children}
        </div>
    );
}
function ContainerWithImage (props){
    return(
        <div className="ContainerWithImage" id='2'>
            {props.children}
        </div>
    );
}
function ContainerWithImage2 (props){
    return(
        <div className="ContainerWithImage2" id='4'>
            {props.children}
        </div>
    );
}
function CardContainer (props){
    return(
        <div className="CardContainer">
            {props.children}
        </div>
    );
}


export default Container
export {ContainerWithImage}
export {ContainerWithImage2}
export {CardContainer}
