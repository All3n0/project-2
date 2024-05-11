import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token') !== '' && localStorage.getItem('token') !== null) {
      navigate('/login');
    }
    console.log(localStorage.getItem('token'));
  }, []);

  const loginAction = (e) => {
    setValidationErrors({});
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const token = 'your_generated_token'; 
      localStorage.setItem('token', token);
      navigate('/register');
    }, 1000); 
  };

  return (
    <Layout>
      <div className="flex flex-wrap  md:justify-center mt-5">
        <div className="w-1/3">
          <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
            <div className="flex-auto p-6">
              <h5 className="mb-3 mb-4">Sign In</h5>
              <form onSubmit={(e) => { loginAction(e); }}>
                {Object.keys(validationErrors).length !== 0 && (
                  <p className="text-center ">
                    <small className="text-red-600">Incorrect Email or Password</small>
                  </p>
                )}

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); }}
                  />
                </div>
                <div className="d-grid gap-2">
                  <Link to="/">
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600 block w-full"
                    >
                      Login
                    </button>
                  </Link>
                  <p className="text-center">Don't have an account? <Link to="/register">Register here</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Login;