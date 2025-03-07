import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Career Coach",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            <footer className="bg-white py-6 shadow-md">
  <div className="max-w-4xl mx-auto px-4 text-center text-gray-700">
    <p className="text-sm">
      Made with <span className="text-red-500">❤️</span> by 
      <span className="font-semibold text-gray-900"> BADMOSS Developers</span>
    </p>

    {/* Links Section */}
    <div className="flex justify-center space-x-6 mt-3 text-sm">
      <a 
        href="/privacy-policy.html" 
        className="hover:text-gray-900 transition duration-300"
      >
        Privacy Policy
      </a>
      <a 
        href="/terms-of-service.html" 
        className="hover:text-gray-900 transition duration-300"
      >
        Terms of Service
      </a>
      <a 
        href="/contact.html" 
        className="hover:text-gray-900 transition duration-300"
      >
        Contact
      </a>
    </div>

    {/* Copyright Section */}
    <div className="mt-4 text-xs text-gray-500">
      © {new Date().getFullYear()} BADMOSS Developer. All rights reserved.
    </div>
  </div>
</footer>



          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
