import React from 'react';
import './Step.css';

// Komponent 'Step'
const Step = (props) => { /* Stworzenie komponentu funkcyjnego 'Step, który przyjmuje jako argumenty aktualną wartość kroku ('step') oraz funkcję do aktualizacji kroku ('setStep')*/
    const updateStep = (e) => { /* Definicja funkcji 'updateStep', która aktualizuje wartość kroku na podstawie wartości wprowadzonej prze użytkownika*/
        const newStep = Math.max(Number(e.target.value), 1); /*math.max() to funkcja, która zwraca większą z dwóch wartości*/
        props.setStep(newStep);
    };

// Renderowanie komponentu Step: wartość pola jest ustawiona na aktualną wartość kroku ('value={step}). Po zmianie wartości w polu wywoływana jest f. 'updateStep', która aktualizuje stan kroku w komponencie 'Counter'
    return (
        <div>
            <input type="number" value={props.step} onChange={updateStep} min="1" />
        </div>
    );
};

export default Step;
