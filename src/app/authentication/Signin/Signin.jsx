import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing FontAwesome icons
import roleuser from '../../../assets/data/roleuser.json'; // Import user data
import './Signin.css';

function Signin() {
    const navigate = useNavigate();
    const users = roleuser;

    const [formValues, setFormValues] = useState({ username: '', password: '' });
    const [formErrors, setFormErrors] = useState({ username: '', password: '', message: '' });
    const [showPassword, setShowPassword] = useState(false);

    // Validate form input
    const validateForm = () => {
        const errors = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formValues.username) {
            errors.username = 'Email is required';
        } else if (!emailPattern.test(formValues.username)) {
            errors.username = 'Invalid email format';
        }

        if (!formValues.password) {
            errors.password = 'Password is required';
        } else if (formValues.password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            const user = users.find(
                (user) => user.username === formValues.username && user.password === formValues.password
            );

            if (user) {
                localStorage.setItem('user', JSON.stringify({ username: user.username, role: user.role }));

                // Redirect based on user role
                if (user.role === 'Admin') {
                    navigate('/adm');
                } else if (user.role === 'Staff') {
                    navigate('/staff');
                } else if (user.role === 'Student') {
                    navigate('/student');
                }
            } else {
                setFormErrors({ ...formErrors, message: 'Invalid credentials' });
            }
        }
    };

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    // Toggle password visibility
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    return (
        <main className="main-content mt-0">
            <section>
                <div className="page-header min-vh-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
                                <div className="card card-plain">
                                    <div className="card-header pb-0 text-start">
                                        <h4 className="font-weight-bolder">Sign In</h4>
                                        <p className="mb-0">Enter your email and password to sign in</p>
                                    </div>
                                    <div className="card-header pb-0 text-start">
                                        {formErrors.message && <span className="text-danger">{formErrors.message}</span>}
                                    </div>
                                   
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <input
                                                    type="email"
                                                    id="username"
                                                    name="username"
                                                    className="form-control form-control-lg"
                                                    placeholder="Email"
                                                    aria-label="Email"
                                                    value={formValues.username}
                                                    onChange={handleChange}
                                                />
                                                {formErrors.username && (
                                                    <span className="text-danger">{formErrors.username}</span>
                                                )}
                                            </div>

                                            <div className="mb-3 position-relative">
                                                <input
                                                    type={showPassword ? 'text' : 'password'}
                                                    id="password"
                                                    name="password"
                                                    className="form-control form-control-lg"
                                                    placeholder="Password"
                                                    value={formValues.password}
                                                    onChange={handleChange}
                                                />
                                                <div
                                                    className="password-toggle-icon"
                                                    onClick={togglePasswordVisibility}
                                                    style={{
                                                        position: 'absolute',
                                                        right: '10px',
                                                        top: '50%',
                                                        transform: 'translateY(-50%)',
                                                        cursor: 'pointer',
                                                        zIndex: 1, // Ensure the icon is above the input field
                                                    }}
                                                >
                                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                                </div>
                                                {formErrors.password && (
                                                    <span className="text-danger">{formErrors.password}</span>
                                                )}
                                            </div>

                                            <div className="text-center">
                                                <button
                                                    type="submit"
                                                    className="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0"
                                                >
                                                    Sign in
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
                                <div
                                    className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                                    style={{
                                        backgroundImage:
                                            "url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg')",
                                        backgroundSize: 'cover',
                                    }}
                                >
                                    <span className="mask bg-gradient-primary opacity-6"></span>
                                    <h4 className="mt-5 text-white font-weight-bolder position-relative">
                                        "Attention is the new currency"
                                    </h4>
                                    <p className="text-white position-relative">
                                        The more effortless the writing looks, the more effort the writer actually put into
                                        the process.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Signin;
