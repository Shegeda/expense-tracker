import ExpenseList from "./components/ExpenseList";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Marathon starter kit',
      amount: 29,
      date: new Date(2020, 7, 14)
    },
    {
      id: 'e2',
      title: 'New AirPods 3',
      amount: 179,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Getmancar',
      amount: 77,
      date: new Date(2021, 2, 28)
    },
    {
      id: 'e4',
      title: 'New MacBook Pro 14" 512Gb',
      amount: 1999,
      date: new Date(2021, 5, 12)
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseList items={expenses} />
    </div>
  );
}

export default App;