import {ImageBox ,Information,Headings,Cards,Shape,InfoList,HeadingWithoutIcon,Button,WorkCard} from './components/index';
import './App.css';
import { Container , GlassContainer ,Navbar,ContainerWithImage,Footer,CardContainer,GlassContainerFlexColumn,ContainerWithImage2} from './sections/index';
import { FaGithub ,FaBootstrap ,FaReact } from "react-icons/fa"; 
import { TbFileTypeCss} from "react-icons/tb"; 
import { IoLogoJavascript } from "react-icons/io5";
import { PiFileHtml } from "react-icons/pi";
import { SiStyledcomponents ,SiMui ,SiRedux, SiTypescript} from "react-icons/si";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Container>
        <GlassContainer>
          <Information/>
          <ImageBox/>
        </GlassContainer>
      </Container>
      <ContainerWithImage>
          <Headings>skills</Headings>
          <CardContainer>
            <Cards skill='React.js'><FaReact/></Cards>
            <Cards skill='Javascript'><IoLogoJavascript /></Cards>
            <Cards skill='typescript'><SiTypescript /></Cards>
            <Cards skill='Redux'><SiRedux/></Cards>
            <Cards skill='CSS'><TbFileTypeCss/></Cards>
            <Cards skill='Bootstrap'><FaBootstrap/></Cards>
            <Cards skill='Material UI'><SiMui/></Cards>
            <Cards skill='styled component'><SiStyledcomponents/></Cards>
            <Cards skill='Tailwind css'><TbFileTypeCss/></Cards>
            <Cards skill='Git'><FaGithub/></Cards>
            <Cards skill='HTML'><PiFileHtml /></Cards>
           </CardContainer>
      </ContainerWithImage>
      <Container>
        <Shape/>
        <GlassContainerFlexColumn>
          <HeadingWithoutIcon>
            Education
          </HeadingWithoutIcon>
          <InfoList/>
        </GlassContainerFlexColumn>
      </Container>
      <ContainerWithImage2>
        <HeadingWithoutIcon>work</HeadingWithoutIcon>
        <CardContainer>
        <WorkCard>
              <div className='imageDiv'>
                <img className='image' src="https://i.ibb.co/ZKGWSpX/Screenshot-1.png" alt='forms-easy'/>
              </div>
              <h4>forms-easy</h4>
              <div className='workButtons'>
                <Button href={"https://forms-easy.com/"}>visit website</Button>
            </div>
            </WorkCard>
            <WorkCard>
              <h4>Analysis app </h4>
              <div className='workButtons'>
                <Button href={"https://gitlab.com/ghewazaloum/analysis-react.git"}>GitLab</Button>
            </div>
            </WorkCard>
           <WorkCard>
              <div className='imageDiv'>
                <img className='image' src="https://i.ibb.co/jRJLfgM/sneak-Peak.png" alt='sneakPeak online shop'/>
              </div>
              <h4>sneakPeak online shop</h4>
              <div className='workButtons'>
                <Button href={"https://github.com/ghewazaloum/shoes.git"}>github</Button>
            </div>
            </WorkCard>
            <WorkCard>
              <div className='imageDiv'>
                <img className='image' src="https://i.ibb.co/zFf3fsy/wadiMed.png" alt='alwadi medical center'/>
              </div>
              <h4>alWadi medical center web app</h4>
              <div className='workButtons'>
                  <Button href={"https://github.com/ghewazaloum/WadiMedicalCenter.git"}>github</Button>
                  <Button href={"https://www.figma.com/file/g2QP6tQH5pGpR2gwjBkkts/medical-center?type=design&node-id=83%3A9&mode=design&t=nbUOqLubZyFsem70-1"}>Figma</Button>
            </div>
            </WorkCard>
            <WorkCard>
              <div className='imageDiv'>
                <img className='image' src="https://i.ibb.co/85XHJCg/portfolio.png" alt='portfolio'/>
              </div>
              <h4>Portfolio</h4>
              <div className='workButtons'>
                  <Button href={"https://github.com/ghewazaloum/portfolio.git"}>github</Button>
            </div>
            </WorkCard>
            <WorkCard>
              <div className='imageDiv'>
                <img className='image' src="https://i.ibb.co/VvS3PF5/bear.png" alt='bear'/>
              </div>
              <h4>Bear social media app</h4>
              <div className='workButtons'>
                 <Button href={" https://github.com/Daas33/Bear.git"}>github</Button>
                  <Button href={"https://bear-socialmedia.netlify.app/"}>netlify</Button>
            </div>
            </WorkCard>


            
        </CardContainer>
      </ContainerWithImage2> 
      <Footer/>
    </div>
  );
}

export default App;
