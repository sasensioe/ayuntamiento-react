import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
  
import Navbar from './components/navbar/Navbar';
import Contact from './components/pages/contact/Contact';
import News from './components/pages/news/News';
import Main from './components/pages/main/Main';
import Article from './components/pages/article/Article';
import Footer from './components/footer/Footer';
import Areas from './components/pages/areas/Areas';
import Login from './components/pages/admin/Login';
import Admin from './components/pages/admin/Admin';



function App() {


  return (
    <Router>
    <div>
      <Navbar />
      <Switch>

        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/areas">
          <Areas />
        </Route>
        <Route path="/articles/:id">
          <Article />
        </Route>
        <Route path="/news">
          <News />
        </Route> 
        <Route path="/">
          <Main />
        </Route>

      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
