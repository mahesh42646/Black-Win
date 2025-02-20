import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { auth, signInWithGoogle, onAuthStateChanged } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ show, handleClose }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            handleClose();
        } catch (error) {
            setError("Invalid email or password!");
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await signInWithGoogle();
            handleClose();
        } catch (error) {
            setError("Google login failed!");
        }
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <div className="login-modal rounded-3 p-3">
                <button className="close-btn" onClick={handleClose}><i className="bi bi-x-circle"></i></button>
                <h3 className="text-center mb-4">WELCOME BACK</h3>

                <div className="rounded-4 p-3 text-white card bg-transperent-1">
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3 text-start">
                            <Form.Label>EMAIL <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                className="bg-transperent border-top-0 border-start-0 border-end-0 rounded-0"
                                type="email"
                                placeholder="Enter your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 text-start">
                            <Form.Label>PASSWORD <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                className="bg-transperent border-top-0 border-start-0 border-end-0 rounded-0"
                                type="password"
                                placeholder="Enter your Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        {error && <p className="text-danger">{error}</p>}

                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <Form.Check
                                type="checkbox"
                                label="Remember Password"
                                checked={remember}
                                onChange={(e) => setRemember(e.target.checked)}
                            />
                            <a href="#" className="forgot-password">Forgot Password?</a>
                        </div>

                        <Button type="submit" className="login-btn w-100">LOG IN</Button>
                    </Form>

                    <p className="text-center mt-3">
                        Don't have an account? <a href="#" className="signup-link">SIGN UP NOW</a>
                    </p>

                    <div className="social-login text-center mt-3">
                        <p>OR</p>
                        <button onClick={handleGoogleLogin} className="btn border text-white w-100">
                            Login With Google <i className="bi bi-google"></i>
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default Login;
