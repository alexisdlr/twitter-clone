import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import Layout from "@/components/Layout";
import "@/styles/globals.css";
import RegisterModal from "@/components/modals/RegisterModal";
import LoginModal from "@/components/modals/LoginModal";
import { Toaster } from "react-hot-toast";
import EditModal from "@/components/modals/EditModal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <RegisterModal />
      <EditModal />
      <LoginModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
