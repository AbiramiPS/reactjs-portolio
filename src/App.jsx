
import styles from "./App.module.css";
import Navbar from './components/Navbar/Navbar';
import About from "./components/Main/About";
import Qualification from "./components/Qualification/Qualification";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {


  return (
    <div className={styles.App}>
      <Navbar />
      <About />
      <Qualification />
      <Experience />
      <Projects />
      <Contact />


     
    </div>
  )
}

export default App
