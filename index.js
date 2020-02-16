class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// change code below this line
 
const Camper = (props) => {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  )
};
// change code below this line
Camper.defaultProps = { name: 'CamperBot'}
// Camper.prop-types = {
//   name: PropTypes.string.isRequired
// };


ReactDOM.render(<CampSite />, document.getElementById("challenge-node"));
