import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import Welcome from './Welcome';
import Message from './Message';
import Counter from './Counter';
import AxiosAPI from './axiosAPI';

function App() {
  return (
    <div className="App">
     <Greet name="rohit" lastName="sharma"  />

{/* 
     <Welcome name="rohit" lastName="sharma" />
     <Welcome name="Virat" lastName="Kohli" /> */}

     {/* <Message /> */}
     {/* <Counter /> */}
     {/* <AxiosAPI /> */}
    </div>
  );
}

export default App;
