import '@/styles/globals.css'
import { supabase } from '@/lib/initSupabase'
import Layout from "../components/Layout";
import {SessionContextProvider} from "@supabase/auth-helpers-react";

export default function App({ Component, pageProps }) {
  return (
      <SessionContextProvider supabaseClient={supabase}>
      <Layout>
      <Component {...pageProps} />
      </Layout>
          </SessionContextProvider>
  )
}
