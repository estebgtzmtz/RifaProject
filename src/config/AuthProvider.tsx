import { Auth0Provider } from "@auth0/auth0-react";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_OAUTH_DOMAIN}
      clientId={import.meta.env.VITE_OAUTH_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "https://dev-4lhr8clbv7zx3s6y.us.auth0.com/api/v2/",
        scope: "read:current_user update:current_user_metadata",
      }}
    >
      {children}
    </Auth0Provider>
  );
};
