import { Container } from '@mui/material';
import './App.css';
import DataTable from './components/timelineTable.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <DataTable />
        </Container>
        
      </header>
    </div>
  );
}

export default App;
