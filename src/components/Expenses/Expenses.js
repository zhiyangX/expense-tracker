import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState("2021");
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};
	return (
		<Card className="expenses">
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			{props.items.map(({ id, title, amount, date }) =>
				date.toISOString().split("-")[0] === filteredYear ? (
					<ExpenseItem key={id} title={title} amount={amount} date={date} />
				) : null
			)}
		</Card>
	);
}

export default Expenses;
