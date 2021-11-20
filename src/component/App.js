import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import PersonelCard from './PersonelCard';
import BMICard from './BMICard';
import UploadAndDisplayImage from './UploadAndDisplayImage';
import YearComponent from './YearComponent';
import MonthComponent from './MonthComponent';
import DayComponent from './DayComponent';
import { tr } from 'date-fns/locale';
function App(props) {
  const [list, setList] = useState([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]);
  const [valueYear, setValueYear] = useState(null);
  const [valueMonth, setValueMonth] = useState(null);
  const [valueDay, setValueDay] = useState(null);

  const [autoFocusYear, setAutoFocusYear] = useState(true);
  const [autoFocusMonth, setAutoFocusMonth] = useState(false);
  const [autoFocusDay, setAutoFocusDay] = useState(false);
  const [handelFocus, setHandelFocus] = useState(true);

  useEffect(function () {
    if (valueYear !== null && valueYear.length >= 4) {
      setHandelFocus(false);
      setAutoFocusYear(false);
      setAutoFocusMonth(true);
      setAutoFocusDay(false);
    }
    if (valueMonth !== null && valueMonth.length >= 2) {
      setHandelFocus(false);
      setAutoFocusYear(false);
      setAutoFocusMonth(false);
      setAutoFocusDay(true);
    }
    // if (valueDay !== null && valueDay.length >= 2) {
    //   setHandelFocus(false);
    //   setAutoFocusYear(true);
    //   setAutoFocusMonth(false);
    //   setAutoFocusDay(false);
    // }
  }, [valueYear, valueMonth, valueDay]);

  useEffect(function(){
    if(handelFocus===false)setHandelFocus(true)   
  },[handelFocus])

  function getDataFromYear(data) {
    setValueYear(data.value);
  }
  function getDataFromMonth(data) {
    setValueMonth(data.value)

  }
  function getDataFromDay(data) {
    setValueDay(data.value)
  }

  return (
    // <Grid container justify="center" style={{paddingTop:20}}>
    //   <Grid item style={{ padding: 5 }}>
    //     <PersonelCard />
    //   </Grid>
    //   <Grid item style={{ padding: 5 }}>
    //     <BMICard />
    //   </Grid>
    // </Grid>

    // <Grid container justify="center" style={{ paddingTop: 30 }}>
    //   {list.map((row) => {
    //     return (
    //       <Grid item style={{ padding: 5 }}>
    //         <UploadAndDisplayImage id={row.id} />
    //       </Grid>)
    //   })}

    // </Grid>
<>
    { handelFocus === true &&
    < Grid container style={{ padding: 50 }} >
      <Grid item >
        <YearComponent autoFocus={autoFocusYear} data={{valueYear:valueYear}} getData={getDataFromYear} />
      </Grid>
      <Grid item style={{ paddingTop: 20 }}>
        <span style={{ fontSize: 40 }}>/</span>
      </Grid>
      <Grid item >
        <MonthComponent autoFocus={autoFocusMonth} data={{valueMonth:valueMonth}} getData={getDataFromMonth} />
      </Grid>
      <Grid item style={{ paddingTop: 20 }}>
        <span style={{ fontSize: 40 }}>/</span>
      </Grid>
      <Grid item >
        <DayComponent autoFocus={autoFocusDay} data={{valueDay:valueDay}} getData={getDataFromDay} />
      </Grid>
    </Grid >}
    </>
  );
}

export default App;
