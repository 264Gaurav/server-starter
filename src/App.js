import './App.css';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useEffect } from 'react';


const BASE_URL = process.env.REACT_APP_SPA;


function App() {
  const login = async ({ email, password }) => {
    try {
      const result = await axios.post(`${BASE_URL}/user/login`, { email, password });
      if (result?.data?.token) {
        //console.log(result?.data?.user?.email, "looged in")
        toast.success("You are logged In ");
      }
      //console.log('login ', result);
    } catch (error) {
      //console.error('login ', error);
      toast.error(error?.response?.data?.message || 'Login failed');
    }
  };

  useEffect(() => {
    const email = process.env.REACT_APP_EMAIL;
    const password = process.env.REACT_APP_PASSWORD;

    const loginInterval = setInterval(() => {
      login({ email, password });
    }, 3*1*1000);

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
