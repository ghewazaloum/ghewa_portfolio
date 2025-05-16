import './App.css'
import { HeroSection } from './view/Hero/Hero'
import { AboutSection } from './view/AboutMe/AboutMe'
import { ProjectsSection } from './view/Projects/Project'
import Layout from './layout/Layout'
function App() {

  return (
    <Layout>
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
    </Layout>
  )
}

export default App
