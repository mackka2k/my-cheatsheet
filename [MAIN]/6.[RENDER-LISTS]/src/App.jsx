import List from './List'

function App() {

	const fruits = 
	[{id: 1, name: "apple", calories: 95},
	{id: 2, name: "banana", calories: 105},
	{id: 3, name: "orange", calories: 62},
	{id: 4, name: "grapes", calories: 62},
	{id: 5, name: "kiwi", calories: 42}];

  const vegetables = 
  [{id: 6, name: "carrot", calories: 110},
  {id: 7, name: "broccoli", calories: 55},
  {id: 8, name: "cucumber", calories: 45},
  {id: 9, name: "spinach", calories: 23},
  {id: 10, name: "lettuce", calories: 5}];

  return (<>
      {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
  </>)
}

export default App
