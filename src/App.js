import './App.css';
import DomainDescription from "./domain/DomainDescription";
import axios from "axios";
import {useState} from "react";

function App() {
    const [orderDomain, setOrderDomain] = useState(undefined);
    axios.get("https://raw.githubusercontent.com/charlespichery/node-bounded-context-canvas/main/export/orderBoundedContext.json"
    ).then(res => {
        console.log(res.data)
        setOrderDomain(res.data)
    })
    return (
        <div className="App">
            <header className="App-header">
                {orderDomain && <DomainDescription domain={orderDomain}/>}
            </header>
        </div>
    );
}

export default App;
