import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {changeStateButton} from './actions';

class App extends Component {

  constructor(props) {
       super(props);
      this.videoTag = React.createRef();
}


   startVideo(e){
    navigator.mediaDevices
            .getUserMedia({video: true})
            .then((stream) => {
              this.videoTag.current.srcObject = stream;
            })
            .catch(console.log);
  }

   stopVideo(e){
     //stop web cam streaming
     let tracks = this.videoTag.current.srcObject.getTracks();
     tracks.forEach(function(track) {
        track.stop();
      });

      this.videoTag.current.srcObject = null;
  }

  render() {
    return (
      <div className="App">
      <h1>Example of matarial Ui button.Changes the button state on click event with redux</h1>

      <Button variant="raised"  color={this.props.color}  onClick={() =>this.props.changeStateButton(this.props.color)}>{this.props.color} </Button>

        <div  className="RecordingButton">
        <Button color="inherit" variant="flat"    onClick={(e) =>this.startVideo(e)}>Start </Button>
        <Button color="inherit" variant="flat"    onClick={(e) =>this.stopVideo(e)}>Stop</Button>
        </div>

      <div><h1>Click on start button to start web cam and stop button tyo stop.</h1></div>
       <div>
       <video autoPlay ref={this.videoTag} title={"Web rtc example"}  />
      </div>

      </div>
    );
  }
}

function mapStateToProps(state){
return{
	 color: state
  }
}

export default connect(mapStateToProps,{ changeStateButton })(App);
