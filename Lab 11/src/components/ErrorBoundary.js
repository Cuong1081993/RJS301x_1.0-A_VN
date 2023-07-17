import { Component } from "react";

class ErrorBoundary extends Component{
    constructor(){
        super();
        this.state=({hasErr:false})
    }
    componentDidCatch (error){
console.log(error);
this.setState({hasErr: true})
    }
   render(){
    if(this.state.hasErr){
        return <p>Something went wrong ! </p>
    }
    return this.props.children;
   }
}
export default ErrorBoundary;