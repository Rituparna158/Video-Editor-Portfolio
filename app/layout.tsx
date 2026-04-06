
import './globals.css';

export const metadata = {
  title: "Video Editor Portfolio",
  description: "Portfolio Website"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
