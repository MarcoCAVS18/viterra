import React, { useState } from 'react';
import DayInput from './components/DayInput';
import CalculateButton from './components/CalculateButton';
import List from './components/List';
import Logo from './components/Logo';

function App() {
  const [hours, setHours] = useState(Array(7).fill(0));
  const [showList, setShowList] = useState(false);

  const handleHourChange = (index, value) => {
    const updatedHours = [...hours];
    updatedHours[index] = Number(value);
    setHours(updatedHours);
  };

  const calculateTotalHours = () => {
    setShowList(true);
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

      <CalculateButton onClick={calculateTotalHours} />

      {showList && <List hours={hours} />}
    </div>
  );
}

export default App;



