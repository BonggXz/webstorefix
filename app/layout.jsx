import { GoogleOAuthProvider } from "@react-oauth/google";
import "@/styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
          {children}
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
