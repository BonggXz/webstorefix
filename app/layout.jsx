import { ThemeProvider } from "@/components/ThemeProvider";
import "@/styles/globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
