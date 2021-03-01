import React from 'react';
import Product from './Product';
import './App.css';

function App() {
    return (
        <main>
            <Product
                image="https://www.plusonline.nl/sites/plusonline/files/citroen_1.jpg"
                title="Citroen"
                description="Een citroen is voor de meeste mensen te zuur om zo uit de hand te eten. Van citroen kun je het vruchtvlees, het sap en de schil gebruiken. Het sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel."
            />
        </main>
    );
}

export default App;