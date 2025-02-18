import { FC, FormEvent, useState } from "react";

interface Goal {
    title: string;
    description: string;
}

interface GoalFormProps {
    setGoals: React.Dispatch<React.SetStateAction<Goal[]>>;
}

const GoalForm: FC<GoalFormProps> = ({ setGoals }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!title.trim() || !description.trim()) {
            alert("Please fill in both fields");
            return;
        }

        setGoals(prev => [...prev, { title, description }]);
        setTitle("");
        setDescription("");
    };

    return (
        <form className="goal-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title"
                className="form-input"
            />
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description"
                className="form-input"
            />
            <button type="submit" className="submit-button">
                Add Goal
            </button>
        </form>
    );
};

export default GoalForm;