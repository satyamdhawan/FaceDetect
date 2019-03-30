import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import SubmitUrlForm from './Components/SubmitUrlForm/SubmitUrlForm';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
 apiKey: 'aa4dc1f20ee143dcbdc83fc4735e31c7'
});


class App extends Component {
  constructor(){
    super();
    this.state = {
      input:'',
      imgUrl:'',
      facedetectbox:{},
      route: '',
      isSignedIn:false,
    }
  }

  onRouteChange=(route)=>{
    if(route === 'home'){
      this.setState({isSignedIn:true})
    }else{
      this.setState({isSignedIn:false})
    }
    this.setState({route:route});
  }

  CalculateBox =(res)=>{
        const boxCoordinates=res.outputs[0].data.regions[0].region_info.bounding_box;
        //console.log(boxCoordinates);
        const image = document.getElementById('image');
        //console.log(image);
        const height = Number(image.height);
        const width = Number(image.width);
        //console.log(width, height);
        const left=boxCoordinates.left_col * width;
        const right=width - (boxCoordinates.right_col * width);
        const top=boxCoordinates.top_row * height;
        const bottom=height - (boxCoordinates.bottom_row * height);
        //console.log(left,right,top,bottom);
        return {
          left_col:left,
          right_col:right,
          top_row:top,
          bottom_row:bottom
        }
  }

  display = (data) =>{
    console.log(data);
    this.setState({facedetectbox:data});
  }

  onInputChange= (e) =>{
    this.setState({input:e.target.value});
  }

  onSubmit= () =>{
    this.setState({imgUrl:this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then((response)=>this.display(this.CalculateBox(response)))
    .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="App">
        {/* Particles */}
        <Particles className="particles" params={{
                particles: {
                  number:{
                      value:30,
                      desity:{
                        enable:true,
                        value_area:1000
                      }
                    }
                }
              }}
              style={{
                width: '100%',
              }}/>
        {/*Navigation component*/}
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>
        {/* Sign In Component */}
        {this.state.route === 'home'?
          (<div>
            {/*SubmitUrlForm component*/}
            <SubmitUrlForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
            {/* Facregonition component*/}
            <FaceRecognition box={this.state.facedetectbox} imgUrl = {this.state.imgUrl}/>
          </div>)
          :
          (this.state.route === 'register'?
              <Register onRouteChange={this.onRouteChange}/>
              :
              <SignIn onRouteChange={this.onRouteChange}/>
          )
          
        }
      </div> 
    );
  }
}

export default App;
