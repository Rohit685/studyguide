import {useRouter} from "next/router";


export default function RedirectPage() {
    const router = useRouter()
    router.push("https://xnjqkroyhkbdpgvgadad.supabase.co/auth/v1/callback")
}