import { React, Component } from 'react';
import { Link } from 'react-router-dom';

class NotFoundPage extends Component{
    render(){
        return <div>
            <h1 style={{textAlign:"center"}}>PAGE NOT FOUND</h1>
            <h1 style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </h1>
          </div>;
    }
}
export default NotFoundPage;