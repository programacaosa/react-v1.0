// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Importe BrowserRouter
import Header from './Header'; // Importe o componente Header

const App = () => {
  return (
    <Router> {/* Envolve tudo com o Router */}
      <div>
        <Header /> {/* Renderiza o Header dentro do Router */}
        {/* Aqui você pode definir suas rotas usando <Route> */}
      </div>
    </Router>
  );
};

export default App;
