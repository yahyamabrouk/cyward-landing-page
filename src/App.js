import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainLayout from './components/MainLayout';

function App() {
  return (
    <div className="App">
      <Header />
      <MainLayout/>
      <Footer/>
    </div>
  );
}

export default App;
