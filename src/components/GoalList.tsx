import { FC } from "react";

interface Goal {
    title: string;
    description: string;
}

interface GoalListProps {
    goals: Goal[];
    setGoals: React.Dispatch<React.SetStateAction<Goal[]>>;
}

const GoalList: FC<GoalListProps> = ({ goals, setGoals }) => {
    const handleDelete = (index: number) => {
        setGoals(goals.filter((_, i) => i !== index));
    };

    return (
        <ul className="goal-list">
            {goals.map((goal, index) => (
                <li key={index} className="goal-item">
                    <div className="goal-content">
                        <h3 className="goal-title">{goal.title}</h3>
                        <p className="goal-description">{goal.description}</p>
                    </div>
                    <button
                        className="delete-button"
                        onClick={() => handleDelete(index)}
                    >
                        ×
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default GoalList;