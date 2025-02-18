import GoalList from "./components/GoalList";
import { useState } from "react";
import GoalForm from "./components/GoalForm";
import "./App.css";

function App() {
    const initialGoals = [
        { title: "Learn Html", description: "Learn basics tags" },
        { title: "Learn Css", description: "Learn basics css" },
        { title: "Learn JavaScript", description: "Learn basics JS" },
    ];

    const [goals, setGoals] = useState(initialGoals);

    return (
        <div className="app-container">
            <GoalForm setGoals={setGoals} />
            <GoalList goals={goals} setGoals={setGoals} />
        </div>
    );
}

export default App;