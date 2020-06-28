import React , {Component , useEffect }from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

class App extends Component {
  

  // create a initial  state for declaring the class name

  constructor(props){
        super(props);
        
       this.togglemenu = this.togglemenu.bind(this);

        this.state = {
            showMenu : false,
            fabs : 'fabs',
            icons : "text-white prime zmdi zmdi-phone-in-talk",
            linksrc :"fab",
            chatbox :"chat",
            closecap : "text-white zmdi zmdi-phone-in-talk",
            labelname :"",
            phone_number:"",
            imge_src :""
        }
    }



  componentDidMount() {
  axios.get('https://codifyinditest.com/script_test/api-test/')
  .then(response => {
    this.setState({
             labelname : response.data["script test"].labels,
            phone_number: response.data["script test"].phone_number,
            imge_src : "https://codifyinditest.com/script_test/" + response.data["script test"].feature_img,
        });


    console.log(response.data["script test"]);
  })
  .catch(error => {
    console.log(error);
  });
}
  


  // toggle menu option is used to toggle the class name according to it ....
  togglemenu(e) {
    console.log(this.state.showMenu )
    if(this.state.showMenu === false)
    {
      this.setState({
            fabs : "is-visible",
            icons : "text-white prime zmdi zmdi-close is-active is-visible",
            linksrc :"fab is-float is-visible",
            chatbox :"chat is-visible",
            closecap : "text-white prime zmdi zmdi-close is-active is-visible",
            showMenu : true
        });

    }
    
     if(this.state.showMenu === true){
      this.setState({
            fabs : 'fabs',
            icons : "text-white prime zmdi zmdi-phone-in-talk",
            linksrc :"fab",
            chatbox :"chat",
            closecap : "text-white zmdi zmdi-phone-in-talk",
            showMenu : false
       });
    }

     
 }


render() {
  return (
    <div className="App">
      <div align="center  ">
          <h2>Call Now Widget on bottom of the Website</h2>

          <img src={this.state.imge_src} style={{width:'100%',height:'50%'}}/>
      </div>

      <div className="fabs">
        <div className={this.state.chatbox}>
          <div className="chat_header">
            <div className="chat_option">
              <div className="header_img">
            <img src={"http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg"}/>
          </div>
              <span id="chat_head">{this.state.labelname} Now </span> 
            <br/>
            <span className="agent">
            <a href={`tel:${this.state.phone_number}`} className="text-white">  <i className="text-white zmdi zmdi-phone-in-talk "></i>
             {this.state.phone_number}</a></span>
            </div>
          </div>
        </div>
        <a id="prime"  className={this.state.linksrc} onClick={this.togglemenu}>
          <i className={this.state.icons}></i></a>
      </div>
	
    </div>
  );
}
}

export default App;
