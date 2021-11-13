import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ImageAdd from './image/imageAdd.png';


const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [defultImage,] = useState(ImageAdd);


  return (
        <Card style={{ width: 200, paddingBottom: 10, textAlign: "center" }}>
          <CardContent >
            <Grid container justify="center" >
              <Grid item style={{ padding: 5 }}>
                {selectedImage ?
                  <img alt="not fount" width={"110px"} height={"110"} src={URL.createObjectURL(selectedImage)} />
                  : <img alt="not fount" width={"110px"} height={"110"} src={defultImage} />}
              </Grid>
              <Grid item style={{ paddingLeft: 70, paddingTop: 10 }}>
                <input
                  type="file"
                  name="myImage"
                  onChange={(event) => {
                    setSelectedImage(event.target.files[0]);
                  }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
  );
};

export default UploadAndDisplayImage;