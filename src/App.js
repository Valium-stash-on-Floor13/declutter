import Header from './Header.js';
import Home from './Home.js';
import Location from './Location.js';
import Services from'./Services.js';
import Blogs from'./Blogs.js';
import Blog from'./Blog.js';
import Contact from'./Contact.js';
import Impressum from'./Impressum.js';
import TnC from'./TnC.js';
import Quote from'./Quote.js';
import Footer from './Footer.js';
import Error404 from './Error404.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PrivacyPolicy from './PrivacyPolicy.js';


function App() {
  return (
    
    <Router>
      <Header/>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/service/:servicename" element={<Services/>} />
 
  {/* <Route path="/service" element={<Service/>} />
  <Route path="/locations" element={<Locations/>} /> */}
  <Route path="/location/:locationname" element={<Location/>} />
  <Route path="/blogs" element={<Blogs/>} />
  <Route path="/blog" element={<Blog/>} />
  <Route path="/get-a-quote" element={<Quote/>} />
  <Route path="/contact" element={<Contact/>} />
  <Route path="/impressum" element={<Impressum/>} />
  <Route path="/tnc" element={<TnC/>} />
  <Route path="/privacy" element={<PrivacyPolicy/>} />
  <Route path="*" element={<Error404/>} />
</Routes>
<Footer/>
    </Router>


     
      // <Hero/>
      // <Perks/>
      // <Process/>
      // <StatsAndTestimonials/>
      // <Choose/>
     
    
  );
}

export default App;
