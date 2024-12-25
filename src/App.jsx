import "./App.css";
import ContentContainer from "./components/ContentContainer";
import Signin from "./components/Signin";
import Layout from "./Layout";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/" element={
            <Layout>
                <ContentContainer/>
            </Layout>
            }
          />
      </Routes>
    </Router>
  );
}

export default App;