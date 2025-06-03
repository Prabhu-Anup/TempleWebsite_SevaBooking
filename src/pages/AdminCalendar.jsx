import React, { useState } from 'react';

const daysShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

const AdminCalendar = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({
    date: '',
    time: '',
    title: '',
    description: '',
  });
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [login, setLogin] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');

  // Simple hardcoded admin credentials
  const ADMIN_USER = 'admin';
  const ADMIN_PASS = 'admin123';

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (!form.date || !form.title) return;
    setEvents([...events, { ...form }]);
    setForm({ date: '', time: '', title: '', description: '' });
  };

  // Login handlers
  const handleLoginChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (login.username === ADMIN_USER && login.password === ADMIN_PASS) {
      setIsAdmin(true);
      setShowLogin(false);
      setLoginError('');
      setLogin({ username: '', password: '' });
    } else {
      setLoginError('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
  };

  // Generate calendar grid
  const calendarDays = [];
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    calendarDays.push(d);
  }

  // Get events for a specific day
  const getEventsForDay = (day) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return events.filter((ev) => ev.date === dateStr);
  };

  return (
    <div className="min-h-screen bg-[#FFF9E5] flex flex-col items-center py-12 relative">
      {/* Admin/Login Button */}
      <div className="absolute top-6 right-8 z-10">
        {!isAdmin ? (
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded shadow"
            onClick={() => setShowLogin(true)}
          >
            Admin
          </button>
        ) : (
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded shadow"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-20">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xs">
            <h2 className="text-lg font-bold text-red-800 mb-4">Admin Login</h2>
            <form onSubmit={handleLoginSubmit} className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <input
                  type="text"
                  name="username"
                  value={login.username}
                  onChange={handleLoginChange}
                  className="w-full border rounded px-2 py-1"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={login.password}
                  onChange={handleLoginChange}
                  className="w-full border rounded px-2 py-1"
                  required
                />
              </div>
              {loginError && <div className="text-red-600 text-sm">{loginError}</div>}
              <div className="flex justify-between items-center mt-2">
                <button
                  type="button"
                  className="text-gray-500 hover:underline text-sm"
                  onClick={() => setShowLogin(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-4 py-1 rounded"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-2xl mb-8">
        <div className="flex justify-between items-center mb-4">
          <button onClick={prevMonth} className="text-xl px-2 py-1 rounded hover:bg-yellow-100">&lt;</button>
          <div className="text-xl font-bold text-red-800">
            {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}
          </div>
          <button onClick={nextMonth} className="text-xl px-2 py-1 rounded hover:bg-yellow-100">&gt;</button>
        </div>
        <div className="grid grid-cols-7 gap-2 mb-2">
          {daysShort.map((day) => (
            <div key={day} className="text-center font-semibold text-yellow-700">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {calendarDays.map((day, idx) => {
            const isToday =
              day &&
              day === today.getDate() &&
              currentMonth === today.getMonth() &&
              currentYear === today.getFullYear();
            const dayEvents = day ? getEventsForDay(day) : [];
            return (
              <div
                key={idx}
                className={`h-20 flex flex-col items-center justify-start rounded-lg p-1 border ${isToday ? 'bg-yellow-400 text-white font-bold' : 'bg-yellow-50 text-red-800'}`}
              >
                <div>{day || ''}</div>
                <div className="w-full">
                  {dayEvents.map((ev, i) => (
                    <div key={i} className="mt-1 text-xs bg-yellow-200 rounded px-1 py-0.5 text-yellow-900">
                      <span className="font-semibold">{ev.time && `[${ev.time}] `}</span>
                      {ev.title}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Admin Event Form */}
      {isAdmin && (
        <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md">
          <h2 className="text-lg font-bold text-red-800 mb-4">Add Event</h2>
          <form onSubmit={handleAddEvent} className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleInputChange}
                className="w-full border rounded px-2 py-1"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleInputChange}
                className="w-full border rounded px-2 py-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleInputChange}
                className="w-full border rounded px-2 py-1"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleInputChange}
                className="w-full border rounded px-2 py-1"
                rows={2}
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded"
            >
              Add Event
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminCalendar;