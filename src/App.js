// App.js
import React, { useState } from 'react';
import DayInput from './components/DayInput';
import CalculateButton from './components/CalculateButton';
import List from './components/List';
import Logo from './components/Logo';
import './index.css'

function App() {
  const [hours, setHours] = useState(Array(7).fill(0));
  const [showList, setShowList] = useState(false);
  const [canCalculate, setCanCalculate] = useState(false); // Estado para habilitar/deshabilitar el botón
  const [shake, setShake] = useState(false); // Estado para la animación de shake

  const handleHourChange = (index, value) => {
    const updatedHours = [...hours];
    updatedHours[index] = Number(value);
    setHours(updatedHours);

    // Verifica si al menos un valor es mayor que 0 para habilitar el botón
    setCanCalculate(updatedHours.some(hour => hour > 0));
  };

  const calculateTotalHours = () => {
    if (canCalculate) {
      setShowList(true);
    } else {
      setShake(true); // Activa la animación de shake
      setTimeout(() => setShake(false), 500); // Resetea el shake después de 500ms
    }
  };

  return (
    <div className="flex flex-col items-center p-8 min-h-screen">
      <Logo />

      <div className="w-full max-w-md bg-bgGray p-6 rounded-xl shadow-md">
        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => (
          <DayInput
            key={index}
            day={day}
            value={hours[index]}
            onChange={(value) => handleHourChange(index, value)}
          />
        ))}
      </div>

      {/* Botón Calculate usando el componente CalculateButton */}
      <CalculateButton
        onClick={calculateTotalHours}
        disabled={!canCalculate}
        shake={shake}
      />

      {showList && <List hours={hours} />}
    </div>
  );
}

export default App;