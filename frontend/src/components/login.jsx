import React, { useState } from "react";
import { loginStyles } from "../assets/dummyStyles";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, LogIn, Mail, Lock, EyeOff, Eye } from "lucide-react";

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const Login = ({ onLoginSuccess = null }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const API_BASE = "http://localhost:4000";
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setSubmitError("");
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length) return;
    setLoading(true);

    try {
      const payload = { email: email.trim().toLowerCase(), password };
      const resp = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      let data = null;
      try {
        data = await resp.json();
      } catch (e) {
        //ignore all errors
      }
      if (!resp.ok) {
        const msg = data?.message || "Login failed";
        setSubmitError(msg);
        return;
      }
      if (data?.token) {
        try {
          localStorage.setItem("authToken", data.token);
          localStorage.setItem(
            "currentUser",
            JSON.stringify(data.user || { email: payload.email }),
          );
        } catch (err) {
          // ignore all the errors
        }
        const user = data.user || { email: payload.email };
        window.dispatchEvent(
          new CustomEvent("authChanged", { detail: { user } }),
        );
        if (typeof onLoginSuccess === "function") onLoginSuccess(user);
        navigate("/", { replace: true });
      }
    } catch (err) {
      console.error("Login error", err);
      setSubmitError("Network Error");
    } finally {
      setLoading(false);
    }
  };

  const validate = () => {
    const e = {};
    if (!email) e.email = "Email is required";
    else if (!isValidEmail(email)) e.email = "Please enter a valid email";

    if (!password) e.password = "Password is required";
    return e;
  };

  return (
    <div className={loginStyles.pageContainer}>
      <div className={loginStyles.bubble1}></div>
      <div className={loginStyles.bubble2}></div>
      <Link to="/" className={loginStyles.backButton}>
        <ArrowLeft className={loginStyles.backButtonIcon} />
        <span className={loginStyles.backButtonText}>Home</span>
      </Link>
      
      <div className={loginStyles.formContainer}>
        <form onSubmit={handleSubmit} className={loginStyles.form} noValidate>
          <div className={loginStyles.formWrapper}>
            <div className={loginStyles.animatedBorder}>
              <div className={loginStyles.formContent}>
                <h2 className={loginStyles.heading}>
                  <span className={loginStyles.headingIcon}>
                    <LogIn className={loginStyles.headingIcon} />
                  </span>
                  <span className={loginStyles.headingText}>Login</span>
                </h2>
                <p className={loginStyles.subtitle}>
                  Sign in to continue to the Quiz light, Clean UI, smooth
                  micro-animation and easy validation.
                </p>
                <label className={loginStyles.label}>
                  <span className={loginStyles.labelText}>Email</span>
                  <div className={loginStyles.inputContainer}>
                    <span className={loginStyles.inputIcon}>
                      <Mail className={loginStyles.inputIconInner} />
                    </span>
                    <input
                      className={`${loginStyles.input} ${errors.email ? loginStyles.inputError : loginStyles.inputNormal}`}
                      placeholder="your@gmail.com"
                      required
                      type="email"
                      name="Email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) {
                          setErrors((s) => ({
                            ...s,
                            email: undefined,
                          }));
                        }
                      }}
                    />
                  </div>
                  {errors.email && (
                    <p className={loginStyles.errorText}>{errors.email}</p>
                  )}
                </label>

                <label className={loginStyles.label}>
                  <span className={loginStyles.labelText}>password</span>
                  <div className={loginStyles.inputContainer}>
                    <span className={loginStyles.inputIcon}>
                      <Lock className={loginStyles.inputIconInner} />
                    </span>
                    <input
                      className={`${loginStyles.input} ${loginStyles.input} ${errors.password ? loginStyles.inputError : loginStyles.inputNormal}`}
                      placeholder="*******"
                      required
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (errors.password) {
                          setErrors((s) => ({
                            ...s,
                            password: undefined,
                          }));
                        }
                      }}
                    />

                    {/* toggle button */}
                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      className={loginStyles.passwordToggle}
                    >
                      {showPassword ? (
                        <EyeOff className={loginStyles.passwordToggleIcon} />
                      ) : (
                        <Eye className={loginStyles.passwordToggleIcon} />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className={loginStyles.errorText}>{errors.password}</p>
                  )}
                </label>
                {submitError && (
                  <p className={loginStyles.submitError}>{submitError}</p>
                )}
                <div className={loginStyles.buttonsContainer}>
                  <button
                    type="submit"
                    className={loginStyles.submitButton}
                    disabled={loading}
                  >
                    {loading ? (
                      "singing in..."
                    ) : (
                      <>
                        <LogIn className={loginStyles.submitButtonIcon} />
                        <span className={loginStyles.submitButtonText}>
                          Sign in
                        </span>
                      </>
                    )}
                  </button>
                  <div className={loginStyles.signupContainer}>
                    <div className={loginStyles.signupContent}>
                      <span className={loginStyles.signupText}>
                        Dont have an account
                      </span>
                      <Link to="/signup" className={loginStyles.signupLink}>
                        Create Account
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

                      <style  className={loginStyles.animations}
 ></style>

    </div>
  );
};

export default Login;

//  className={loginStyles}
