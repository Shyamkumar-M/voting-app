import './App.css';
import Voting from './components/Voting';
import congress from './components/images/2.jpg';
import lotus from './components/images/1.png';
import Sun from './components/images/3.jpg'
import four from './components/images/4.jpg'
import amma from './components/images/5.jpg'
import drums from './components/images/6.jpg'
import star from './components/images/7.jpg'
import seeman from './components/images/8.jpg'
import muslim from './components/images/9.png'
import CountdownTimer from './components/Timer';
import logo from './components/images/logo.png';




function App() {
  return (
    
    <div >
      <div className='title'>
        
        <div>
        <h1>Candidates</h1>
        <p>Vote for your Favourite Candidate.</p>
        </div>
        <div className='time'>
        <CountdownTimer/>
        </div>

      </div>
      <div className="App">
      <Voting name = "Indian National Congress (INC)" img={congress} className="first"/>
      <Voting name = "Bharatiya Janata Party (BJP)" img={lotus}/>
      <Voting name = "Dravida Munnetra Kazhagam (DMK)" img ={Sun}/>
      <Voting name = "Communist Party of India (CPI)" img={four}/>
      <Voting name = "All India Anna Dravida Munnetra Kazhagam (AIADMK)" img={amma}/>
      <Voting name = "Desiya Murpokku Dravida Kazhagam (DMDK)" img={drums}/>
      <Voting name = "Viduthalai Chiruthaigal Katchi (VCK)" img={star}/>
      <Voting name = "Naam Tamilar" img={seeman}/>
      <Voting name = "Indian Union Muslim League" img={muslim}/>
      </div>
    </div>
  )
}

export default App;
