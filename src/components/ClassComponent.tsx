
import {Component} from "react";

class ClassComponent extends Component {
    render() {
        const title = "is a Class Component"
        return <h1 className="text-center mt-12 text-xl">This {title}</h1>;
    }
}
export default ClassComponent;