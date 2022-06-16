// import './App.css';

import { Grid } from '@mui/material';
import FormComponent from './components/FormComponent';
import FormComponent2 from './components/FormComponent2';


function App() {
  return (
    <div className="App">
      {/* <FormComponent /> */}
      <Grid container direction = "column" alignItems="center" justify="center" paddingLeft="25px" paddingRight="25px">
      <FormComponent2 />
      </Grid>
      
    </div>
  );
}

export default App;
