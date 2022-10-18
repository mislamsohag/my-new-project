import "../styles/App.css"
import Layout from "./Layout";
import Quiz from "./pages/Quiz";
// import Loging from "./pages/Login";
// import Signoup from "./pages/Signup";
// import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Home /> */}
        {/* <Signoup /> */}
        {/* <Loging /> */}
        <Quiz />
      </Layout>
    </div>
  );
}

export default App;
