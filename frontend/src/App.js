import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserForm from "./components/UserForm";
import SurveyList from "./components/SurveyList";

function App() {
    return (
        <Routes>
            <Route exact path='/' element={<UserForm />} />
            <Route exact path='/surveylist' element={<SurveyList />} />
        </Routes>
    );
}

export default App;