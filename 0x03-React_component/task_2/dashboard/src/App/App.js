import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import './App.css';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

   coursesList = [{ id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }]

   notificationsList = [
    { id: 1, value: 'New course available', type: 'default' },
    { id: 2, value: 'New resume available', type: 'urgent' },
  ]

  handleKeyPress(e) {
    if (e.ctrlKey && e.key === "h") {
      alert("Logging you out");
      this.props.logOut();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  render() {
    return (
      <>
        <Notifications displayDrawer={true}/>
        <div className="App">
          <Header />
          <div className='App-body'>
            {this.props.isLoggedIn ? <CourseList listCourses={this.coursesList} /> : <Login />}
          </div>
          <Footer />
        </div>
      </>
    );
  }
}



App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {
    return;
  },
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};




export default App;
