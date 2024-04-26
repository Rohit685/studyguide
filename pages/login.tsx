import Head from 'next/head'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import {Auth, ThemeMinimal, ThemeSupa} from '@supabase/auth-ui-react'
import {useEffect, useState} from "react";
import {Database} from "@/lib/schema";
import {useRouter} from "next/router";

type Stats = Database['public']['Tables']['stats']['Row']
export default function Home() {
  const session = useSession()
  const supabase = useSupabaseClient();
  const router = useRouter()
  // const supabaseDB = useSupabaseClient<Database>()
  // const [stats, setStats] = useState<Stats[]>([])
  // const [newTaskText, setNewTaskText] = useState('')
  // const [errorText, setErrorText] = useState('')
  //
  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     const { data: stats, error } = await supabase
  //       .from('stats')
  //       .select('*')
  //       .order('id', { ascending: true })
  //
  //     if (error) console.log('error', error)
  //     else {
  //         setStats(stats)
  //         console.log(stats)
  //     }
  //   }
  //
  //   fetchTodos()
  // }, [supabase])
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
