import "./App.css";
import Container from "./components/Container";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="content_container">
                <Container />
            </div>
        </div>
    );
}

export default App;
