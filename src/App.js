import logo from './logo.svg';
import './App.css';
import './assets/css/main.css'
import './assets/css/variable.css'
import './assets/css/media_query.css'
import './assets/css/reset.css'
import './assets/css/notfoud.css'



import MoveSection from "./compenent/Main/MoveSection"
import Header from './compenent/Header/Header'
import BannerSection from './compenent/Main/BannerSection';
import CategorySection from './compenent/Main/CategorySection';
import LiveSection from './compenent/Main/LiveSection';
import Footer from './compenent/Footer/Footer';

import { Route, Router, Routes } from 'react-router-dom';
import Search from './compenent/Main/Search';
import NotFound from './compenent/Main/NotFound';



const App = () => {

  return (
    <div className="App container">

      <Header />

      {/* //............MAIN................ */}
      <main>
        {/* BANNER SECTION */}

        <BannerSection />


        <Routes>
          <Route path='/' element={<MoveSection />} >



          </Route>

          <Route path='/search' element={<Search />}>


          </Route>



        </Routes>
        {/* <!-- #MOVIES SECTIOn--> */}


        {/* <!-- #CATEGORY SECTIOn --> */}
        <CategorySection />
        {/* <!--- #LIVE SECTION --> */}
        <LiveSection />
      </main>
      {/* <!--- FOOTER SECTION--> */}
      <Footer />


    </div>
  );
}

export default App;
