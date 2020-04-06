import React, {Component} from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import News from './components/NewsComponent';
import { NEWS } from './shared/news';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: NEWS
    };
  }

  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Main />
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
