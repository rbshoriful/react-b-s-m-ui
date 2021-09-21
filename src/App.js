import './App.css';
import TopHeadline from './componets/TopHeadline/TopHeadline';
import Button from '@mui/material/Button';
import Chart from './componets/Chart/Chart';

function App() {
  return (
    <div className="">
      <Button variant="contained">Hello World</Button>
      <Chart></Chart>
      <TopHeadline></TopHeadline>
    </div>
  );
}

export default App;
