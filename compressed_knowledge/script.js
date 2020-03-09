const simple_JSX_element = <h1>Hello JSX!</h1>;

const complex_JSX_element = (
  <div>
    <h1>Header</h1>
    <p>paragraph</p>
    <ul>
      <li>list element</li>
      <li>list element</li>
      <li>list element</li>
    </ul>
  </div>
);

const Stateless_functional_component= () => {
  return <div>some text</div>;
};

ReactDOM.render(simple_JSX_element, document.getElementById("simple"));
ReactDOM.render(complex_JSX_element, document.getElementById("complex"));
ReactDOM.render(<Stateless_functional_component />, document.getElementById("stateless"));
