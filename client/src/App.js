import Header from './components/Header';
import MainDisplay from './components/MainDisplay';

function App() {
  return (
    <div className='realtive' style={{height: 'calc(100vh-80px)'}}>
      <Header />
      <MainDisplay/>
    </div>
  );
}

export default App;
