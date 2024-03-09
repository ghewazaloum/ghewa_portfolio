import { useEffect } from 'react';
import './Shape.css'
function Shape (){
    useEffect(()=>{
        observer.observe(document.querySelector('.shapeContainer'));
      })
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const scroller = entry.target.querySelector('.shape');
      
          if (entry.isIntersecting) {
            scroller.classList.add('shape_animation');
          return; // if we added the class, exit the function
          }
      
          // We're not intersecting, so remove the class!
          scroller.classList.remove('shape_animation');
        });
      });
    return(
        <div className="shapeContainer">
            <div className='shape'></div>
        </div>
    );
}
export default Shape