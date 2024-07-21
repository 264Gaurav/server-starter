import './App.css';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

const BASE_URL = process.env.REACT_APP_SPA;
console.log(BASE_URL);

function App() {
  const login = async ({ email, password }) => {
    try {
      const result = await axios.post(`${BASE_URL}/user/login`, { email, password });
      if (result?.data?.token) {
        toast.success(result?.data?.message);
      }
      console.log('login ', result);
    } catch (error) {
      console.error('login ', error);
      toast.error(error?.response?.data?.message || 'Login failed');
    }
  };

  useEffect(() => {
    const email = 'akash@gmail.com';
    const password = 'Akash@123';

    const loginInterval = setInterval(() => {
      login({ email, password });
    }, 3*6*1000);

    // Cleanup interval on component unmount
    return () => clearInterval(loginInterval);
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div className="App">
      <h2>SERVER-STARTER</h2>
    </div>
  );
}

export default App;
