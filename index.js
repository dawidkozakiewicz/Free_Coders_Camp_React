const NonCitrus = () => {
    return (
        <div>
            <h3>Non Citrus:</h3>
            <ul>
                <li>Apples</li>
                <li>Blueberries</li>
                <li>Strawberries</li>
                <li>Bananas</li>
            </ul></div>
    )
}

const Citrus = () => {
    return (
        <div>
            <h3>Citrus:</h3>
            <ul>
                <li>Lemon</li>
                <li>Lime</li>
                <li>Grapefruit</li>
                <li>Orange</li>
            </ul>
        </div>
    )
}

const Vegetables = () => {
    return (
        <div>
            <h2>Vegetables:</h2>
            <ul>
                <li>Brussel Sprouts</li>
                <li>Broccoli</li>
                <li>Squash</li>
            </ul>
        </div>
    )
}


class Fruits extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Fruits:</h2>
                <NonCitrus />
                <Citrus />
            </div>
        );
    }
};

class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                <Fruits />
                <Vegetables />
            </div>
        );
    }
};

ReactDOM.render(
    <TypesOfFood />,
    document.getElementById('challenge-node')
);
