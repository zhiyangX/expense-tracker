import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses({ items }) {
	return (
		<Card className="expenses">
			{items.map(({ title, amount, date }) => (
				<ExpenseItem title={title} amount={amount} date={date} />
			))}
		</Card>
	);
}

export default Expenses;
