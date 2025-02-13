import './App.css';
import List from './list';
// import Usehook from './usehook';

const Dumydata = [
  {
      id: 1,
      name:"Utsha",
      age: 20,
      is_active: true,
  },

  {
      id: 2,
      name:"Jammy",
      age: 25,
      is_active: false,
  },

  {
      id: 3,
      name:"Khalil",
      age: 27,
      is_active: true,
  },
];

function App() {
  return (
    <div className="App">
     {/* <Usehook/> */}
     <List data={Dumydata}/>
    </div>
  );
}

export default App;
