
import './App.css';
import Account from './components/Account';
import Banner from './components/Banner';
import Choose from './components/Choose';
import Feature from './components/Feature';
import Finance from './components/Finance';
import Navbar from './components/Navbar';
import Payment from './components/Payment';
import Residence from './components/Residence';
import Sponsor from './components/Sponsor';

function App() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Sponsor/>
    <Feature/>
    <Payment/>
    <Account/>
    <Residence/>
    <Finance/>
    <Choose/>
    </>
    
  );
}

export default App;
