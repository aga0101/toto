import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import CheckboxComponent from './CheckboxComponent'
import { useAuth0 } from "../react-auth0-spa";
import Axios from 'axios';
import StepProgressBar from './Progressbar.js';

// class PostForm extends React.Component {

//  render() {
//   return(
//    <div>
//     <header class="masthead bg-tercary text-white text-center">
//      <div class="container d-flex align-items-center flex-column">
      
//      </div>
//     </header>
//    </div>
//   )
//  }
// }

function PostForm() {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
   <div>
    <header class="masthead bg-tercary text-black text-center">
     <div class="container d-flex align-items-center flex-column">
      <div class="polaroid">
        <div {...getRootProps()}>
         <input {...getInputProps()} />
       <br/>
       <span class="magenta">1</span>
          {
           isDragActive ?
           <p class="text-small">Drop the photo here ...</p> :
           <p class="text-small">Drop or upload the photo.</p>
          }
         </div>
        </div> 
        <br/>
       {/* <div class="polaroid">
        <br/>
        <span class="blue">2</span>
         <p class="text-small">Select traits.</p> 
          <div class="text-small-left">
           <CheckboxComponent/>
          </div>
       </div> */}
      </div>
     </header>
    </div>
  )
}

export default PostForm;


