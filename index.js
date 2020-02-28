const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];
 
function Frameworks() {
 const renderFrameworks = frontEndFrameworks.map((item) =>
  <li key={Math.random()}>{item}</li>
);
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};


ReactDOM.render(<Frameworks />, document.getElementById("challenge-node"));
