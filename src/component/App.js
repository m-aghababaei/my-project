import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import PersonelCard from './PersonelCard';
import BMICard from './BMICard';
import UploadAndDisplayImage from './UploadAndDisplayImage';

function App(props) {
  const [list, setList] = useState([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]);
  return (
    // <Grid container justify="center" style={{paddingTop:20}}>
    //   <Grid item style={{ padding: 5 }}>
    //     <PersonelCard />
    //   </Grid>
    //   <Grid item style={{ padding: 5 }}>
    //     <BMICard />
    //   </Grid>
    // </Grid>

    <Grid container justify="center" style={{ paddingTop: 30 }}>
      {list.map((row) => {
        return (
          <Grid item style={{ padding: 5 }}>
            <UploadAndDisplayImage id={row.id} />
          </Grid>)
      })}

    </Grid>
  );
}

export default App;
