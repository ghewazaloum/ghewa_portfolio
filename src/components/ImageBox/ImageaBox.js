import ghewa from '../../Assests/Images/ghewa.png'
import './ImageBox.css';
function ImageBox(){
    return(
        <div className="image-box">
            <img src={ghewa} alt="ghewa zaloum"/>
        </div>
    );
}
export default ImageBox