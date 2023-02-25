import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import { Container, Grid } from '@mui/material'
import Main from './components/Main'

const App = () => (
  <Container>
    <Grid container spacing={5}>
      <Grid item xs={9} mt={5}>
        <Main/>
      </Grid>
      <Grid item xs={3} mt={2}>
        <Sidebar/>
      </Grid>
    </Grid>
  </Container>
)
export default App;
