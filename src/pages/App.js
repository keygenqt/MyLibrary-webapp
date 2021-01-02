import Menu from "../components/Menu";
import List from "../components/List";
import SearchBlock from "../components/SearchBlock";
import BookView from "./BookView";

function App() {
    return (
        <div className="App">
            <div className="MenuBlock">
                <Menu/>
            </div>
            <div className="ListBlock">
                <div className="ListSearch">
                    <SearchBlock/>
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
