import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './containers/Sidebar';
import { Container, Grid } from '@mui/material';
import Main from './containers/Main';

function App() {


  return (
    <div className="App">

      <Container>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <Main/>
          </Grid>
          <Grid item xs={3}>
            <Sidebar/>
          </Grid>
        </Grid>
      </Container>
      <header className="App-header">
        {/*<Counter />*/}
      </header>
    </div>
  );
}

export default App;
