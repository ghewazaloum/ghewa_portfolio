import './InfoList.css'
function InfoList (props){
    return(
         <ul className='InfoList'>
            <li>
                <p>Bachelor in Software Engineering</p>
                <span>Syria, Homs, Al-Baath University</span>
                <span>2018-2023</span>
            </li>
            <li>
                <p>Responsive Website with HTML5, CSS3, JS</p>
                <span>Udemy Course</span>
            </li>
            <li>
                <p>React JS Tutorial</p>
                <span>by NOUR HOMSI</span>
            </li>
            <li>
                <p>The Web Front End learning guide</p>
                <span>Udemy Course</span>
            </li>
            <li>
                <p>UI/UX design (with figma)</p>
                <span>Udemy Course</span>
            </li>
        </ul>
    );
}
export default InfoList