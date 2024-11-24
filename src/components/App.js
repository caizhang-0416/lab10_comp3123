import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, logoutUser } from '../actions/actions';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    // Simulate a successful login with JWT
    const fakeJWT = 'fake-jwt-token'; // Replace with actual JWT logic
    localStorage.setItem('jwt', fakeJWT);
    dispatch(setUser({ name: username }));
  };

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    dispatch(logoutUser());
  };

  return (
      <div>
        <h1>React Redux with JWT</h1>
        {user ? (
            <div>
              <p>Welcome, {user.name}</p>
              <button onClick={handleLogout}>Logout</button>
            </div>
        ) : (
            <div>
              <input
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
              />
              <button onClick={handleLogin}>Login</button>
            </div>
        )}
      </div>
  );
}

export default App;
