import React, { useState } from 'react';
import DayInput from './components/DayInput';
import CalculateButton from './components/CalculateButton';
import List from './components/List';
import Logo from './components/Logo';
import './index.css';

function App() {
  const [hours, setHours] = useState(Array(7).fill(0));
  const [showList, setShowList] = useState(false);
  const [canCalculate, setCanCalculate] = useState(false);
  const [shake, setShake] = useState(false);

  // Nueva constante para las horas ajustadas con el descuento de media hora
  const adjustedHours = hours.map(hour => (hour > 5 ? hour - 0.5 : hour));

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
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div className="flex flex-col items-center p-8 min-h-screen">
      <Logo />

      <div className="w-full max-w-md bg-bgGray p-6 rounded-xl shadow-md">
        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => (
          <div key={day} className="mb-4">
            <DayInput
              day={day}
              value={hours[index]}
              onChange={(value) => handleHourChange(index, value)}
            />
          </div>
        ))}
        
        {/* Mensaje de nota debajo de todos los inputs */}
        <p className="text-xs text-gray-500 mt-4">
          * Recuerda colocar el total de horas; se descontará media hora automáticamente.
        </p>
      </div>

      <CalculateButton
        onClick={calculateTotalHours}
        disabled={!canCalculate}
        shake={shake}
      />
      {showList && <List hours={adjustedHours} />} {/* Pasamos las horas ajustadas */}
    </div>
  );
}

export default App;