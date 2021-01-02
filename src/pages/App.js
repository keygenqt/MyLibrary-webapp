import Menu from "../components/Menu";
import List from "../components/List";
import Search from "../components/Search";
import BookView from "./BookView";

function App() {
    return (
        <div className="App">
            <div className="MenuBlock">
                <Menu/>
            </div>
            <div className="ListBlock">
                <div className="ListSearch">
                    <Search/>
                </div>
                <div className="ListContent">
                    <List/>
                </div>
            </div>
            <div className="AppContent">
                <BookView/>
            </div>
        </div>
    );
}

export default App;
