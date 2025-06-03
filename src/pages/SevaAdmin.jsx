import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

// Seva lists for each temple
const sevasVenkatraman = [
  { name: 'Archana', amount: 100 },
  { name: 'Abhisheka', amount: 500 },
  { name: 'Annadana', amount: 1000 },
  { name: 'Deepa Seva', amount: 200 },
];
const sevasMukyaprana = [
  { name: 'Tulasi Archana', amount: 50 },
  { name: 'Panchamrita Abhisheka', amount: 300 },
  { name: 'Naivedya', amount: 150 },
  { name: 'Deepa Seva', amount: 100 },
];
const sevasGanapati = [
  { name: 'Ganahoma', amount: 400 },
  { name: 'Modaka Naivedya', amount: 80 },
  { name: 'Pushparchana', amount: 60 },
  { name: 'Deepa Seva', amount: 100 },
];

function SevaTable({ title, sevas, selected, setSelected, devoteeName, devoteePhone, devoteeAddress }) {
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

  const totalAmount = selected.reduce(
    (sum, item, idx) => item.checked ? sum + item.qty * sevas[idx].amount : sum,
    0
  );
  const selectedNames = sevas
    .map((seva, idx) => (selected[idx].checked ? seva.name : null))
    .filter(Boolean)
    .join(', ');

  const handleBookSeva = () => {
    if (!devoteeName || !devoteePhone || !devoteeAddress) {
      alert('Please enter devotee name, phone, and address.');
      return;
    }
    if (totalAmount === 0) {
      alert('Please select at least one seva.');
      return;
    }
    alert(
      `Seva Booked for ${devoteeName}!\nPhone: ${devoteePhone}\nAddress: ${devoteeAddress}\nSelected Sevas: ${selectedNames}\nTotal Amount: ₹${totalAmount}\n${numberToWords(totalAmount)}`
    );
  };

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-red-700 mb-2">{title}</h2>
      <div className="bg-white rounded-xl shadow-md p-4 overflow-x-auto">
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
              <td colSpan={5} className="py-2 px-3 text-right">Grand Total (₹):</td>
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
            <tr>
              <td colSpan={6} className="py-2 px-3 text-right">
                <button
                  className="mt-4 px-8 py-2 bg-red-700 text-white font-semibold rounded-lg shadow hover:bg-red-800 transition disabled:opacity-50"
                  disabled={totalAmount === 0}
                  onClick={handleBookSeva}
                >
                  Book Seva
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

const SevaAdmin = () => {
  const location = useLocation();
  const adminName = location.state?.userName || '';

  // Tab state
  const [activeTab, setActiveTab] = useState('venkatraman');

  // Devotee details state
  const [devoteeName, setDevoteeName] = useState('');
  const [devoteePhone, setDevoteePhone] = useState('');
  const [devoteeAddress, setDevoteeAddress] = useState('');

  // Seva selection state for each temple
  const [selectedVenkatraman, setSelectedVenkatraman] = useState(sevasVenkatraman.map(() => ({ checked: false, qty: 0 })));
  const [selectedMukyaprana, setSelectedMukyaprana] = useState(sevasMukyaprana.map(() => ({ checked: false, qty: 0 })));
  const [selectedGanapati, setSelectedGanapati] = useState(sevasGanapati.map(() => ({ checked: false, qty: 0 })));

  return (
    <div className="min-h-screen bg-[#FFF9E5] flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold text-red-800 mb-4">Seva Booking (Receptionist Mode)</h1>
      <div className="mb-4 text-red-700 font-semibold">
        Receptionist: {adminName}
      </div>
      <div className="mb-8 w-full max-w-md bg-red-50 rounded-lg p-4 shadow">
        <h2 className="font-semibold mb-2 text-red-800">Devotee Details</h2>
        <input
          type="text"
          className="border rounded px-3 py-2 mb-2 w-full"
          placeholder="Devotee Name"
          value={devoteeName}
          onChange={e => setDevoteeName(e.target.value)}
        />
        <input
          type="tel"
          className="border rounded px-3 py-2 mb-2 w-full"
          placeholder="Phone Number"
          value={devoteePhone}
          onChange={e => setDevoteePhone(e.target.value.replace(/\D/, '').slice(0, 10))}
          maxLength={10}
        />
        <input
          type="text"
          className="border rounded px-3 py-2 mb-2 w-full"
          placeholder="Address"
          value={devoteeAddress}
          onChange={e => setDevoteeAddress(e.target.value)}
        />
      </div>
      {/* Tabs */}
      <div className="flex mb-6 gap-2">
        <button
          className={`px-4 py-2 rounded-t-lg font-semibold ${activeTab === 'venkatraman' ? 'bg-red-700 text-white' : 'bg-white text-red-700 border'}`}
          onClick={() => setActiveTab('venkatraman')}
        >
          Shri Venkatraman Dev
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg font-semibold ${activeTab === 'mukyaprana' ? 'bg-red-700 text-white' : 'bg-white text-red-700 border'}`}
          onClick={() => setActiveTab('mukyaprana')}
        >
          Shri Mukyaprana Dev
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg font-semibold ${activeTab === 'ganapati' ? 'bg-red-700 text-white' : 'bg-white text-red-700 border'}`}
          onClick={() => setActiveTab('ganapati')}
        >
          Shri Mooda Ganapati Dev
        </button>
      </div>
      <div className="w-full max-w-4xl">
        {activeTab === 'venkatraman' && (
          <SevaTable
            title="Shri Venkatraman Dev, Kumta"
            sevas={sevasVenkatraman}
            selected={selectedVenkatraman}
            setSelected={setSelectedVenkatraman}
            devoteeName={devoteeName}
            devoteePhone={devoteePhone}
            devoteeAddress={devoteeAddress}
          />
        )}
        {activeTab === 'mukyaprana' && (
          <SevaTable
            title="Shri Mukyaprana Dev"
            sevas={sevasMukyaprana}
            selected={selectedMukyaprana}
            setSelected={setSelectedMukyaprana}
            devoteeName={devoteeName}
            devoteePhone={devoteePhone}
            devoteeAddress={devoteeAddress}
          />
        )}
        {activeTab === 'ganapati' && (
          <SevaTable
            title="Shri Mooda Ganapati Dev, Chitrigi"
            sevas={sevasGanapati}
            selected={selectedGanapati}
            setSelected={setSelectedGanapati}
            devoteeName={devoteeName}
            devoteePhone={devoteePhone}
            devoteeAddress={devoteeAddress}
          />
        )}
      </div>
    </div>
  );
};

// Helper function for amount in words (same as before)
function numberToWords(num) {
  if (num === 0) return 'Zero';
  const a = [
    '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
    'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
  ];
  const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
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

export default SevaAdmin;