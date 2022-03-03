import React, { FC, useEffect } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import ds from 'ds-heightmap';
import styles from './HeightMapGenerator.module.scss';

import PageHeader from '../PageHeader/PageHeader';

interface HeightMapGeneratorProps {}

const HeightMapGenerator: FC<HeightMapGeneratorProps> = () => {

  useEffect(() => {

    const powerOfTwo = 9;
    const mapSize = 2 ** powerOfTwo + 1;

    console.log('test')
    var c:HTMLCanvasElement = document.getElementById("my-canvas") as HTMLCanvasElement;
    var ctx = c.getContext("2d");
    ctx!.fillStyle = "#FF0000";
    ctx!.fillRect(20, 20, 150, 100);

    let image = new Image();
    
    // example image - gray small square
    image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9oMCRUiMrIBQVkAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAADElEQVQI12NgoC4AAABQAAEiE+h1AAAAAElFTkSuQmCC";

    var myImageData = ctx!.createImageData(mapSize, mapSize);

    // generation magic

    ds.init(powerOfTwo, {
      corner: [1, 1, 1, 1], // determine the heights of four corners
      offset: 0.9,         // effect the overall height of the map from -0.9 to 0.9
      range: 100,             // all the height values in the map will be within -range to range
      rough: 0.8            // effect the terrain variability (roughness)
    });                     // pass factors
    ds.run();               // generate a new heightmap base on the factors above
    const data = ds.out();  // return a 2D-array of numbers

    let i, widthI, heightJ, counter = 0;
    for (widthI = 0; widthI < mapSize; widthI ++) {
      for (heightJ = 0; heightJ < data[widthI].length; heightJ ++) {
        
        // console.log(Math.floor(((widthI * mapSize) + heightJ)) + counter);
        myImageData.data[Math.floor(((widthI * mapSize) + heightJ)) + counter] = 130 + 10 * data[widthI][heightJ];
        myImageData.data[Math.floor(((widthI * mapSize) + heightJ)) + counter + 1] = 130 + 10 * data[widthI][heightJ];
        myImageData.data[Math.floor(((widthI * mapSize) + heightJ)) + counter + 2] = 130 + 10 * data[widthI][heightJ];
        myImageData.data[Math.floor(((widthI * mapSize) + heightJ)) + counter + 3] = 255;
        counter += 3;
      }
    }
    ctx!.putImageData(myImageData, 9, 9);
    // ctx!.drawImage(image, 9, 9);
    
    console.log('data', data);
    console.log('myImageData', myImageData);
  });

  return <>
    <div className={styles.HeightMapGenerator} data-testid="HeightMapGenerator">
      <PageHeader text="Map Generator Experiment" />
      <div>
        <TextField id="outlined-basic" label="File" variant="outlined" />
        <Button variant="contained">Load image</Button>
      </div>
      <div id="canvas-wrapper">
        <canvas id="my-canvas" className={styles.myCanvas} width="1000" height="1000">
          Your browser does not support the HTML5 canvas tag.
        </canvas>
      </div>
    </div>
  </>
};

export default HeightMapGenerator;
