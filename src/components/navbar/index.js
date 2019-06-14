import React ,{Component} from 'react'

export default class Navbar extends Component{
    state = {
        name : "ismael"
    }
    render(){
        return(
            <nav class="black">
            <div class="nav-wrapper">
            <a href="#" class="brand-logo" ><i class="material-icons">cloud</i>Logo</a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="">SignIn</a></li>
              </ul>
            </div>
          </nav>
        )
    }
}