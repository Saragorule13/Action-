import './globals.css'


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">
        {children}
      </body>
    </html>
  );
}
