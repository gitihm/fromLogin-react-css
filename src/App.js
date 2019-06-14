import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'

export default class App extends Component{

  render(){
    return (
      <div name="abc">
      <div class="row "  >
        <div class="col s4 m3">
          <div class="card" name="test" name="see">
            <div class="card-content black-text" name="see">
              <span class="card-title">Login</span>
              <div class="input-field">
                <input placeholder="Email" id="email" type="text" class="validate"/>
                <input placeholder="Password" id="password" type="password" class="validate"/>
              </div><center>
                <a class="waves-effect waves-light btn">Login</a>
              </center>
                
            </div>
          </div>
        </div>
      </div>
      </div>
     
    );
  }
  
}
const style = { display: 'run-in', justifyContent: 'center', alignItems: 'center', width: '', height: ''}

