import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create"
import BlogDetails from "./BlogDetails";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  // const title = 'Welcome to the new blog';
  // const likes = 50;
  // const person = {name: 'yoshi',age: 30};
  // const link = "www.google.com";
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        {/* <Home/> */}
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
