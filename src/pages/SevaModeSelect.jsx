import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'password123';

const SevaModeSelect = () => {
  const [mode, setMode] = useState(null);
  const [adminUser, setAdminUser] = useState('');
  const [adminPass, setAdminPass] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const [userName, setUserName] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);

  const navigate = useNavigate();

  // Dummy OTP logic for demo
  const handleSendOtp = () => {
    if (userPhone.length === 10) setShowOtp(true);
    else alert('Enter valid phone number');
  };

  const handleAdminLogin = () => {
    if (adminUser === ADMIN_USERNAME && adminPass === ADMIN_PASSWORD) {
      navigate('/SevaAdmin', { state: { mode: 'admin', userName: adminUser } });
    } else {
      alert('Invalid admin credentials');
    }
  };

  const handleUserLogin = () => {
    if (otp === '1234') {
      if (isNewUser && (!userName || !userAddress)) {
        alert('Please enter your name and address');
        return;
      }
      navigate('/seva/select', {
        state: {
          mode: 'user',
          userPhone,
          userName: isNewUser ? userName : undefined,
          userAddress: isNewUser ? userAddress : undefined,
        },
      });
    } else {
      alert('Invalid OTP (use 1234 for demo)');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF9E5]">
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-red-800 mb-6 text-center">Seva Booking</h1>
        {!mode && (
          <div className="flex flex-col gap-4">
            <button
              className="bg-red-700 text-white py-3 rounded-lg font-semibold hover:bg-red-600"
              onClick={() => setMode('admin')}
            >
              Admin (Receptionist)
            </button>
            <button
              className="bg-red-700 text-white py-3 rounded-lg font-semibold hover:bg-red-600"
              onClick={() => setMode('user')}
            >
              User
            </button>
          </div>
        )}

        {mode === 'admin' && (
          <div className="flex flex-col gap-4 mt-4">
            <input
              type="text"
              placeholder="Username"
              className="border rounded px-3 py-2"
              value={adminUser}
              onChange={e => setAdminUser(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="border rounded px-3 py-2"
              value={adminPass}
              onChange={e => setAdminPass(e.target.value)}
            />
            <button
              className="bg-red-700 text-white py-2 rounded-lg font-semibold hover:bg-red-600"
              onClick={handleAdminLogin}
            >
              Login as Admin
            </button>
            <button
              className="text-red-700 underline"
              onClick={() => setMode(null)}
            >
              Back
            </button>
          </div>
        )}

        {mode === 'user' && (
          <div className="flex flex-col gap-4 mt-4">
            <input
              type="tel"
              placeholder="Phone Number"
              className="border rounded px-3 py-2"
              value={userPhone}
              onChange={e => setUserPhone(e.target.value.replace(/\D/, '').slice(0, 10))}
              maxLength={10}
            />
            
            {!showOtp && (
              <button
                className="bg-red-700 text-white py-3 rounded-lg font-semibold hover:bg-red-800"
                onClick={handleSendOtp}
              >
                Send OTP
              </button>
              
            )}
            <button
                className="text-red-700 underline"
                onClick={() => setMode(null)}
                >
                Back
                </button>
            {showOtp && (
              <>
                <input
                  type="text"
                  placeholder="Enter OTP (1234)"
                  className="border rounded px-3 py-2"
                  value={otp}
                  onChange={e => setOtp(e.target.value)}
                  maxLength={4}
                />
                
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={isNewUser}
                    onChange={e => setIsNewUser(e.target.checked)}
                  />
                  New User?
                </label>
                {isNewUser && (
                  <>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="border rounded px-3 py-2"
                      value={userName}
                      onChange={e => setUserName(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Your Address"
                      className="border rounded px-3 py-2"
                      value={userAddress}
                      onChange={e => setUserAddress(e.target.value)}
                    />
                  </>
                )}
        
                <button
                  className="bg-red-700 text-white py-3 rounded-lg font-semibold hover:bg-red-800"
                  onClick={handleUserLogin}
                >
                  Login as User
                </button>
                <button
                  className="text-red-700 underline"
                  onClick={() => setMode(null)}
                >
                  Back
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SevaModeSelect;