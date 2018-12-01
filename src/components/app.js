import { h, Component } from "preact";
import Home from "../routes/home";

export default class App extends Component {
    componentDidMount() {
        //setTimeout(() => this.setState({}), 0);
        this.setState({});
    }

    render() {
        return (
            <div id="app" style="padding: 50px; border: 2px solid red;">
                <Home path="/" />
            </div>
        );
    }
}
