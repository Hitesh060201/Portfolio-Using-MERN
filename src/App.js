// eslint-disable-next-line no-unused-vars
// src/index.js or src/App.js, etc.
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import TechStack from "./pages/TechStack/TechStack";
import Projects from './pages/Projects/Projects';
function App() {
  return (
    <>
     <Layout/>
     <div className="container">
     <About/>
     <TechStack />
     <Projects />
     </div>
     
    </>
  );
}

export default App;
