import React from 'react';
import Grid from '@material-ui/core/Grid';
import PersonelCard from './PersonelCard';
import BMICard from './BMICard';

function App(props) {
  return (
    <Grid container justify="center" style={{paddingTop:20}}>
      <Grid item style={{ padding: 5 }}>
        <PersonelCard />
      </Grid>
      <Grid item style={{ padding: 5 }}>
        <BMICard />
      </Grid>
    </Grid>
  );
}

export default App;
