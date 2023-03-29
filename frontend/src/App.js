import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./Components/Login/Login";
import Posts from "./Components/Posts/Posts";

function App() {
  return (
    <div className='container'>
      <h1>Hello React</h1>
      <Login />
      <hr />
      <Posts />
    </div>
  );
}

export default App;
