import React from 'react';

function DayInput({ day, value, onChange }) {
  return (
    <div className="flex items-center justify-between mb-2">
      <label className="text-gray-800 font-medium">{day}</label>
      <input
        type="number"
        className="w-20 p-2 bg-bgGray rounded-lg shadow-inner focus:outline-none"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder="9"
        min="0"
      />
    </div>
  );
}

export default DayInput;
