import './App.css';
import Header from './Header';
import KinderCards from './KinderCards';
import SwipeButtons from './SwipeButtons';
import Title from './Title'

function App() {
  return (
    <div className="app">
      <Header />
      <Title />
      <KinderCards />
     <SwipeButtons />
    </div>
  );
}

export default App;
