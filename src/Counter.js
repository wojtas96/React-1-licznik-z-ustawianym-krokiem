// // Stworzenie komponentu funkcyjnego 'Counter'
// const Counter = () => {
//     const [count, setCount] = useState(0); /*stworzenie stanu 'count' za pomocą funkcji 'useState, który przech. akt. wartość licznika. Pocz. wart. licznika to 0.*/
//     const [step, setStep] = useState(1); /* -,,- 'step'za pomocą f. 'useState' - przech.wartość kroku. Pocz. wart. kroku to 1.*/

//     // Definicja funkcji 'increaseCount', która zwiększa wartość licznika o wartość kroku
//     const increaseCount = () => {
//         setCount(count + step);
//     };

//     // Renderowanie komponentu Counter
//     return ( /*zwracanie jsx, który definiuje wygląd naszego komponentu 'Counter'*/
//         <div>
//             <h1>Aplikacja licznika w ReactJS</h1>
//             <h2>Licznik: {count}</h2>
//             {/* po kliknięciu przycisku Zwiększ o... jest wywołana f. 'increaseCount' */}
//             <button onClick={increaseCount}>Zwiększ o {step}</button>
//             <h3>Krok:</h3>

//             {/* Służy do umieszczenia komponentu 'Step' w komponencie 'Counter' oraz 
// przekazanie wart. kroku ('step') i f. do aktualizacji kroku ('setStep' z komp. 
// 'Counter' do komp. 'Step'. Dzięki temu komponent 'Step' może wyświetlać aktualną wartość kroku i aktualizować ją, gdy użytkownik wprowadzi nową wartość. ) */}
//             <Step step={step} setStep={setStep} />
//         </div>
//     );
// };

import { useEffect, useState } from 'react';
import './Counter.css';
import './components/Step';
import Display from './components/Display';
import ButtonsPanel from './components/ButtonsPanel';
import Step from './components/Step';

const Counter = (props) => {

    const [counter, setCounter] = useState(props.counterInitValue);
    const [step, setStep] = useState(1);
   //const [showClock, setShowClock] = useState(true);

    const updateCounter = (action) => {
        if (action === 'add') {
        setCounter(prevCounter => prevCounter + step);
    } else if (action === 'reset') {
        setCounter(props.counterInitValue);
    } else {
        setCounter(0);
    }
};

    // const counter = Math.floor(Math.random() * 10);
    // console.log(props)

    useEffect(() => {
        console.log('wywołanie use effect');
    }, [counter])

    return (
        <div className="counter">
            <Display counter={counter} />
            <ButtonsPanel updateCounter = {updateCounter} />
            <p>Krok: {step}</p>
            {
                <Step step={step} setStep={setStep} />
            }
        </div>
    );
};

export default Counter;