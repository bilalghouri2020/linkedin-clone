import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import Header from './components/Header'
import Home from './components/Home'
import { getUserAuth } from './actions'
import { connect } from 'react-redux';

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, [])
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/home" exact element={<>
            <Header />
            <Home />
          </>} />
        </Routes>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserAuth: () => dispatch(getUserAuth())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

