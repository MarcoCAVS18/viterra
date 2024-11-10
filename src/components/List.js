import React, { useEffect, useState } from 'react';

function List({ hours }) {
  const BASE_RATE = 30.89;
  const WEEKEND_BASE = 24.6470;

  const [completedDays, setCompletedDays] = useState([]);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [tax, setTax] = useState(0);
  const [earningsAfterTax, setEarningsAfterTax] = useState(0);

  const calculateDailyEarnings = (day, hoursWorked) => {
    let earnings = 0;

    if (['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].includes(day)) {
      if (hoursWorked <= 8) {
        earnings = hoursWorked * BASE_RATE;
      } else {
        earnings = (8 * BASE_RATE) + ((hoursWorked - 8) * BASE_RATE * 1.5);
      }
    } else if (day === 'Saturday') {
      earnings = hoursWorked * (WEEKEND_BASE * 1.5);
    } else if (day === 'Sunday') {
      earnings = hoursWorked * (WEEKEND_BASE * 2.5);
    }

    return earnings;
  };

  useEffect(() => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const completed = [];
    let total = 0;

    days.forEach((day, index) => {
      if (hours[index] > 0) {
        const earnings = calculateDailyEarnings(day, hours[index]);
        completed.push({ day, earnings: earnings.toFixed(2) });
        total += earnings;
      }
    });

    const calculatedTax = total * 0.15;
    const totalAfterTax = total - calculatedTax;

    setCompletedDays(completed);
    setTotalEarnings(total.toFixed(2));
    setTax(calculatedTax.toFixed(2));
    setEarningsAfterTax(totalAfterTax.toFixed(2));
  }, [hours]);

  return (
    <div className="w-full max-w-md mt-8 bg-bgGray p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Earnings Summary</h2>
      <ul>
        {completedDays.map((item, index) => (
          <li key={index} className="flex justify-between py-2 border-b border-gray-300">
            <span className="font-medium">{item.day}:</span>
            <span>${item.earnings}</span>
          </li>
        ))}
        {completedDays.length > 0 && (
          <>
            <li className="flex justify-between py-2 font-bold mt-4 border-t border-gray-500">
              <span>Total Earnings:</span>
              <span>${totalEarnings}</span>
            </li>
            <li className="flex justify-between py-2 text-gray-700">
              <span>Tax (15%):</span>
              <span>-${tax}</span>
            </li>
            <li className="flex justify-between py-2 font-bold border-t border-gray-500">
              <span>Total after Tax:</span>
              <span>${earningsAfterTax}</span>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default List;
