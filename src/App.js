import './App.css';


import Heading from './components/Heading';
import Counter from './Counter';


const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Heading text="Aplikacja licznika w ReactJS :)" classValue='gray'/>
            </header>
            <Counter counterInitValue={0}/>
        </div>
    );
};


// Eksport komponentu 'Counter', aby mógł być używany w innych częsciach aplikacji.
export default App;