import "./App.css";
import Notes from "./Notes";
import SearchNotes from "./SearchNotes";
import { Routes, Route, Link } from "react-router-dom";
import DeletedNotesPage from "./DeletedNotesPage";

function App() {
  return (
    <div className="app">
      <div className="header">
        <Link to='/'><h2>NOTES</h2></Link>
        <Link to='/deleted'><button className="btn">DELETED NOTES</button></Link>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchNotes />
              <Notes />
            </>
          }
        />
        <Route path="/deleted" element={<DeletedNotesPage />}/>
      </Routes>
    </div>
  );
}

export default App;
