import Head from 'next/head'
import { useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react'
import {Auth, ThemeMinimal, ThemeSupa} from '@supabase/auth-ui-react'
import {useEffect, useState} from "react";
import {Database} from "@/lib/schema";
import {useRouter} from "next/router";

type Stats = Database['public']['Tables']['stats']['Row']
export default function Home() {
  const {session, isLoading} = useSessionContext()
  const supabase = useSupabaseClient();
  const router = useRouter()

    if(isLoading) {
        return (
            <div className={"flex items-center pt-5"}>
            <span className="loading loading-spinner loading-lg mx-auto"></span>
                </div>
        )
    }
    if(session) router.push('/')
  return (
    <>
      <Head>
        <title>Login Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <div>
            <h3>
              Login
            </h3>
            <Auth
                supabaseClient={supabase}
                onlyThirdPartyProviders={true}
                providers={['google','github']}
                appearance={{
                    style: {
                        button: { background: '0f1729', color: 'white', borderRadius: "0.5rem", padding:"0.5rem"},
                        anchor: { color: '#93c5fd' },
                        input: { borderRadius: "0.5rem", padding:"0.5rem"},
                    },
                }}
                
            />
        </div>
      </div>
    </>
  )
}
