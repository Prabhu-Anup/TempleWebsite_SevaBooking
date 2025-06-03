import React, { useState } from 'react';

const sevas = [
  { name: 'Archana', amount: 100 },
  { name: 'Abhisheka', amount: 500 },
  { name: 'Annadana', amount: 1000 },
  { name: 'Deepa Seva', amount: 200 },
  // Add more sevas as needed
];

const SevaVenkatramanDev = () => {
  const [selected, setSelected] = useState(
    sevas.map(() => ({ checked: false, qty: 0 }))
  );

  const handleCheck = (idx) => {
    setSelected((prev) =>
      prev.map((item, i) =>
        i === idx
          ? { ...item, checked: !item.checked, qty: !item.checked ? 1 : 0 }
          : item
      )
    );
  };

  const handleQtyChange = (idx, value) => {
    const qty = Math.max(1, parseInt(value) || 1);
    setSelected((prev) =>
      prev.map((item, i) =>
        i === idx ? { ...item, qty } : item
      )
    );
  };

  // Calculate totals
  const totalAmount = selected.reduce(
    (sum, item, idx) => item.checked ? sum + item.qty * sevas[idx].amount : sum,
    0
  );
  const selectedNames = sevas
    .map((seva, idx) => (selected[idx].checked ? seva.name : null))
    .filter(Boolean)
    .join(', ');

  return (
    <div className="min-h-screen bg-[#FFF9E5] flex flex-col items-center py-12">
      <h1 className="text-3xl font-bold text-blue-800 mb-8">
        Sevas at Shri Venkatraman Dev, Kumta
      </h1>
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-md p-6 overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr>
              <th className="py-2 px-3">#</th>
              <th className="py-2 px-3">Seva Name</th>
              <th className="py-2 px-3">Amount (₹)</th>
              <th className="py-2 px-3">Select</th>
              <th className="py-2 px-3">Quantity</th>
              <th className="py-2 px-3">Total (₹)</th>
            </tr>
          </thead>
          <tbody>
            {sevas.map((seva, idx) => (
              <tr key={seva.name} className="border-t">
                <td className="py-2 px-3">{idx + 1}</td>
                <td className="py-2 px-3">{seva.name}</td>
                <td className="py-2 px-3">{seva.amount}</td>
                <td className="py-2 px-3">
                  <input
                    type="checkbox"
                    checked={selected[idx].checked}
                    onChange={() => handleCheck(idx)}
                  />
                </td>
                <td className="py-2 px-3">
                  <input
                    type="number"
                    min={1}
                    className="w-16 border rounded px-2 py-1"
                    value={selected[idx].checked ? selected[idx].qty : 0}
                    onChange={(e) => handleQtyChange(idx, e.target.value)}
                    disabled={!selected[idx].checked}
                  />
                </td>
                <td className="py-2 px-3">
                  {selected[idx].checked ? selected[idx].qty * seva.amount : 0}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="font-bold border-t">
              <td colSpan={5} className="py-2 px-3 text-right">Total Amount (₹):</td>
              <td className="py-2 px-3">{totalAmount}</td>
            </tr>
            <tr>
              <td colSpan={6} className="py-2 px-3 text-left">
                <span className="font-semibold">Selected Sevas:</span> {selectedNames || 'None'}
              </td>
            </tr>
            <tr>
              <td colSpan={6} className="py-2 px-3 text-left">
                <span className="font-semibold">Total Amount in Words:</span> {totalAmount === 0 ? 'Zero' : numberToWords(totalAmount)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      {/* Book Seva Button */}
      <button
        className="mt-8 px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow hover:bg-blue-800 transition disabled:opacity-50"
        disabled={totalAmount === 0}
        onClick={() => {
          if (totalAmount === 0) return;
          alert(
            `Seva Booked!\n\nSelected Sevas: ${selectedNames}\nTotal Amount: ₹${totalAmount}\n${numberToWords(totalAmount)}`
          );
        }}
      >
        Book Seva
      </button>
    </div>
  );
};

function numberToWords(num) {
  if (num === 0) return 'Zero';
  const a = [
    '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
    'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
  ];
  const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const g = ['', 'Thousand', 'Lakh', 'Crore'];

  function inWords(n) {
    if (n < 20) return a[n];
    if (n < 100) return b[Math.floor(n / 10)] + (n % 10 ? ' ' + a[n % 10] : '');
    if (n < 1000) return a[Math.floor(n / 100)] + ' Hundred' + (n % 100 ? ' and ' + inWords(n % 100) : '');
    if (n < 100000) return inWords(Math.floor(n / 1000)) + ' Thousand' + (n % 1000 ? ' ' + inWords(n % 1000) : '');
    if (n < 10000000) return inWords(Math.floor(n / 100000)) + ' Lakh' + (n % 100000 ? ' ' + inWords(n % 100000) : '');
    return inWords(Math.floor(n / 10000000)) + ' Crore' + (n % 10000000 ? ' ' + inWords(n % 10000000) : '');
  }

  return inWords(num) + ' Rupees Only';
}

export default SevaVenkatramanDev;