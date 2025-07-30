# Google OAuth Login Screen

A beautiful, modern React application with Google OAuth authentication built using Vite and React.

## Features

- 🔐 Google OAuth 2.0 authentication
- 🎨 Modern, responsive UI design
- 📱 Mobile-friendly interface
- ⚡ Fast loading with Vite
- 🔄 One-tap sign-in support
- 👤 User profile display after login

## Prerequisites

Before running this application, you need to set up Google OAuth credentials:

### 1. Create a Google Cloud Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API (if not already enabled)

### 2. Configure OAuth Consent Screen

1. In the Google Cloud Console, go to "APIs & Services" > "OAuth consent screen"
2. Choose "External" user type (unless you have a Google Workspace)
3. Fill in the required information:
   - App name
   - User support email
   - Developer contact information
4. Add scopes: `email`, `profile`, `openid`
5. Add test users if needed

### 3. Create OAuth 2.0 Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth 2.0 Client IDs"
3. Choose "Web application"
4. Add authorized JavaScript origins:
   - `http://localhost:5173` (for development)
   - `http://localhost:3000` (alternative dev port)
   - Your production domain (when deployed)
5. Add authorized redirect URIs (same as origins for this app)
6. Copy the generated Client ID

### 4. Update the Application

1. Open `src/App.jsx`
2. Replace `YOUR_GOOGLE_CLIENT_ID_HERE` with your actual Google Client ID:

```javascript
const GOOGLE_CLIENT_ID = "your-actual-client-id-here.apps.googleusercontent.com"
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd google-oauth
```

2. Install dependencies:
```bash
yarn install
```

3. Start the development server:
```bash
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. **Login**: Click the "Sign in with Google" button to authenticate
2. **One-tap**: The app supports Google's one-tap sign-in for returning users
3. **Profile**: After successful login, view your profile information
4. **Logout**: Click the "Sign Out" button to log out

## Project Structure

```
google-oauth/
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Styles for the application
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## Dependencies

- **React**: UI library
- **@react-oauth/google**: Google OAuth integration
- **Vite**: Build tool and development server

## Security Notes

- Never commit your Google Client ID to version control
- Use environment variables for production deployments
- The Client ID is safe to expose in client-side code (it's public by design)
- Always validate tokens on your backend in production applications

## Environment Variables (Optional)

For better security in production, you can use environment variables:

1. Create a `.env` file in the root directory:
```
VITE_GOOGLE_CLIENT_ID=your-client-id-here
```

2. Update `src/App.jsx`:
```javascript
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || "YOUR_GOOGLE_CLIENT_ID_HERE"
```

## Deployment

When deploying to production:

1. Update your Google OAuth credentials with your production domain
2. Set the environment variable for your Client ID
3. Build the application:
```bash
yarn build
```

## Troubleshooting

### Common Issues

1. **"Invalid Client ID" error**: Make sure you've replaced the placeholder with your actual Google Client ID
2. **"Redirect URI mismatch"**: Ensure your domain is added to authorized origins in Google Cloud Console
3. **"OAuth consent screen not configured"**: Complete the OAuth consent screen setup in Google Cloud Console

### Development Tips

- Check the browser console for detailed error messages
- Verify your Google Cloud Console settings match your localhost URL
- Test with different browsers to ensure compatibility

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).
