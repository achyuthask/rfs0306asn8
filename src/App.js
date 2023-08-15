
import './App.css';
import Passworgeneration from './comp/pasword';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className="App">
 
      <Card style={{ width: '58rem' }}>
      <Card.Body>
      <Passworgeneration />
      </Card.Body>
    </Card>
    </div>
  );
}

export default App;


