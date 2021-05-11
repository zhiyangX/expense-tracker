import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
	//store this value in some variable which is detached from the life cycle of this component function
	// const [enteredTitle, setEnteredTitle] = useState("");
	// const [enteredAmount, setEnteredAmount] = useState("");
	// const [enteredDate, setEnteredDate] = useState("");

	// use spread operator(...) first, then override the key value you want to change
	const [userInput, setUserInput] = useState({
		title: "",
		amount: "",
		date: "",
	});

	//react schedules state update, it doesn't perform them instantly, so you could update depending on an out dated state snapshot
	//use (prevState)=>{} whenever state update depends on the previous state
	const titleChangeHandler = (event) => {
		setUserInput((prevState) => {
			return { ...prevState, title: event.target.value };
		});
	};
	const amountChangeHandler = (event) => {
		setUserInput((prevState) => {
			return {
				...prevState,
				amount: event.target.value,
			};
		});
	};
	const dateChangeHandler = (event) => {
		setUserInput((prevState) => {
			return {
				...userInput,
				date: event.target.value,
			};
		});
	};
	const submitHandler = (event) => {
		event.preventDefault();
		const expenseData = {
			...userInput,
			date: new Date(userInput.date),
		};
		props.onSaveExpenseData(expenseData);
		setUserInput({
			title: "",
			amount: "",
			date: "",
		});
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={userInput.title}
						onChange={titleChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={userInput.amount}
						onChange={amountChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2022-12-31"
						value={userInput.date}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__action">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
