import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import CountDown from './Components/CountDown/CountDown';
import AllCartSection from './Components/AllCartsSection/AllCartSection';
import { Suspense } from 'react';
import ThreeStep from './Components/ThreeStep/ThreeStep';
import WorkFlow from './Components/WorkFlow/WorkFlow';
import Footer from './Components/Footer/Footer';
import TransparentPricing from './Components/TransparentPricing/TransparentPricing';
const fetchCart = async ()=>{
  const res = await fetch("/data.json")
  return res.json();
}
function App() {
 const CartPromise = fetchCart();
  return (
    <>
    <NavBar></NavBar>
    <Banner></Banner>
    <CountDown></CountDown>
    <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
      <AllCartSection CartPromise={CartPromise}></AllCartSection>
    </Suspense>
    <ThreeStep></ThreeStep>
    <TransparentPricing></TransparentPricing>
    <WorkFlow></WorkFlow>
    <Footer></Footer>
    </>
  );
};

export default App
