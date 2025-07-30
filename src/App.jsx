import { useState } from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import './App.css'

function App() {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSuccess = (credentialResponse) => {
    setIsLoading(true)
    console.log('Login Success:', credentialResponse)
    
    // Decode the JWT token to get user info
    const decoded = JSON.parse(atob(credentialResponse.credential.split('.')[1]))
    console.log('Decoded:', decoded)
    setUser(decoded)
    setIsLoading(false)
  }

  const handleError = () => {
    console.log('Login Failed')
    setIsLoading(false)
  }

  const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || ""

  return (
    <div className='oauth-container'>

    
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <div className="app">
        <div className="container">
          {!user ? (
            <div className="login-container">
              <div className="login-card">
                <div className="login-header">
                  <h1>Welcome Back</h1>
                  <p>Sign in to continue to your account</p>
                </div>
                
                <div className="login-form">
                  <GoogleLogin
                    onSuccess={handleSuccess}
                    onError={handleError}
                    useOneTap
                    theme="filled_blue"
                    size="large"
                    text="signin_with"
                    shape="rectangular"
                    width={20}
                    disabled={isLoading}
                  />
                  
                  {isLoading && (
                    <div className="loading">
                      <div className="spinner"></div>
                      <p>Signing you in...</p>
                    </div>
                  )}
                </div>

                <div className="login-footer">
                  <p>By signing in, you agree to our Terms of Service and Privacy Policy</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="dashboard">
              <div className="user-profile">
                <div className="user-info">
                  <h2>Welcome, {user.name}!</h2>
                  <p>{user.email}</p>
                </div>
              </div>
              
              <div className="user-details">
                <h3>Account Details</h3>
                <div className="detail-item">
                  <span className="label">Name:</span>
                  <span className="value">{user.name}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Email:</span>
                  <span className="value">{user.email}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </GoogleOAuthProvider>
    </div>
  )
}

export default App
