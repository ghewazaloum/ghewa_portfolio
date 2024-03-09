import './GlassContainer.css'
function GlassContainer (props){
    return (
        <div className='GlassContainer'>
            {props.children}
        </div>
    );
}

function GlassContainerFlexColumn (props){
    return (
        <div className='GlassContainerFlexColumn' id='3'>
            {props.children}
        </div>
    );
}
export default GlassContainer
export {GlassContainerFlexColumn}