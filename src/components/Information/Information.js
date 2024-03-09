import './Information.css'
import {Button,UnFocusedButton} from '../../components/index';
import CV from '../../CV.pdf'
function Information (){
    return(
        <div className="information">
            <p>react.js developer</p>
            <h1> ghewa zaloum </h1>
            <p>software engineer, web developer with a passion for javascript, react.js, CSS, HTML and UI/UX design.</p>
            <p>creating responsive, ready-to-market websites.</p>
            <p>+2 years experience</p>
            <div className='Buttons'>
            <a href={CV}  download="CV-PDF-document" target="_blank" rel="noreferrer"><Button>Download CV</Button></a>
            <UnFocusedButton>contact me</UnFocusedButton>
            </div>
        </div>
    );
}
export default Information