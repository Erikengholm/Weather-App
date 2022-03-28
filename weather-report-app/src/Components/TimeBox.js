import React from "react"

class TimeBox extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        Hour: new Date().getHours() ,
        Minute: new Date().getMinutes(),
        Seconds: new Date().getSeconds(),

      };  
    }
    componentDidMount() {
        this.interval = setInterval(() => this.setState({ Minute:new Date().getMinutes(),Hour:new Date().getHours(),Seconds:new Date().getSeconds()}), 925);
      }
      componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
    return (
      <>
        
        <p>{this.state.Hour}:{this.state.Minute}:{this.state.Seconds}</p>
        
      </>
    );
    }
  }
  
  export default TimeBox;
  