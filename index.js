const List = (props) => {
  return <p>{props.tasks.join(", ")}</p>
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* change code below this line */}
        <List tasks={['clean home', 'buy potatoes']} />
        <h2>Tomorrow</h2>
        <List tasks={['read book', 'visit friend', 'bake pizza']} />
        { /* change code above this line */}
      </div>
    );
  }
};



ReactDOM.render(<ToDo />, document.getElementById('challenge-node'))


