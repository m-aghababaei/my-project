import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ImageAdd from './image/imageAdd.png';


const UploadAndDisplayImage = () => {
  const [selectedImage1, setSelectedImage1] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [selectedImage3, setSelectedImage3] = useState(null);
  const [selectedImage4, setSelectedImage4] = useState(null);
  const [defultImage,] = useState(ImageAdd);


  return (
    <Grid container justify="center" style={{ paddingTop: 30 }}>
      <Grid item style={{ padding: 5 }}>
        <Card style={{ width: 200, paddingBottom: 10, textAlign: "center" }}>
          <CardContent >
            <Grid container justify="center" >
              <Grid item style={{ padding: 5 }}>
                {selectedImage1 ?
                  <img alt="not fount" width={"110px"} height={"110"} src={URL.createObjectURL(selectedImage1)} />
                  : <img alt="not fount" width={"110px"} height={"110"} src={defultImage} />}
              </Grid>
              <Grid item style={{ paddingLeft: 70, paddingTop: 10 }}>
                <input
                  type="file"
                  name="myImage"
                  onChange={(event) => {
                    setSelectedImage1(event.target.files[0]);
                  }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item style={{ padding: 5 }}>
        <Card style={{ width: 200, paddingBottom: 10, textAlign: "center" }}>
          <CardContent >
            <Grid container justify="center">
              <Grid item style={{ padding: 5 }}>
                {selectedImage2 ?
                  <img alt="not fount" width={"110px"} height={"110"} src={URL.createObjectURL(selectedImage2)} />
                  : <img alt="not fount" width={"110px"} height={"110"} src={defultImage} />}
              </Grid>
              <Grid item style={{ paddingLeft: 70, paddingTop: 10 }}>
                <input
                  type="file"
                  name="myImage"
                  onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedImage2(event.target.files[0]);
                  }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item style={{ padding: 5 }}>
        <Card style={{ width: 200, paddingBottom: 10, textAlign: "center" }}>
          <CardContent >
            <Grid container justify="center">
              <Grid item style={{ padding: 5 }}>
                {selectedImage3 ?
                  <img alt="not fount" width={"110px"} height={"110"} src={URL.createObjectURL(selectedImage3)} />
                  : <img alt="not fount" width={"110px"} height={"110"} src={defultImage} />}
              </Grid>
              <Grid item style={{ paddingLeft: 70, paddingTop: 10 }}>
                <input
                  type="file"
                  name="myImage"
                  onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedImage3(event.target.files[0]);
                  }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item style={{ padding: 5 }}>
        <Card style={{ width: 200, paddingBottom: 10, textAlign: "center" }}>
          <CardContent >
            <Grid container justify="center">
              <Grid item style={{ padding: 5 }}>
                {selectedImage4 ?
                  <img alt="not fount" width={"110px"} height={"110"} src={URL.createObjectURL(selectedImage4)} />
                  : <img alt="not fount" width={"110px"} height={"110"} src={defultImage} />
                }
              </Grid>
              <Grid item style={{ paddingLeft: 70, paddingTop: 10 }}>
                <input
                  type="file"
                  name="myImage"
                  onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedImage4(event.target.files[0]);
                  }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default UploadAndDisplayImage;