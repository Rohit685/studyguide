import {useSession, useSupabaseClient} from "@supabase/auth-helpers-react";
import {Database} from "@/lib/schema";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";


export default function UserStats() {
  const supabase = useSupabaseClient();
  const session = useSession();
  const router = useRouter();  
  const [userStats, setStats] = useState([]);
  const [percentCorrect, setPercent] = useState(0);
  
  useEffect(() => {
    const fetchTodos = async () => {
      const { data: stats, error } = await supabase
        .from('stats')
        .select('* ')
      if (error) console.log('error', error)
      else if(stats.length > 0) {
          let frac = stats.filter(obj => obj.is_correct).length / stats.length;
          let percent = ((frac) * 100).toFixed(2)
          setPercent(percent);
          setStats(stats)
      }
    }
    if(session) {
        fetchTodos()
    }
  }, [session]);
  
  
  if(userStats == null && session) {
      return (
          <div className={"collapse quizContainerColor py-3"}>
            <span className="loading loading-spinner loading-lg px-3"></span>
          </div>
      );
  }  
    
    
    // @ts-ignore
    return (
    <div>
        <div className="stats shadow">

            <div className="stat">
                <div className="stat-title">Total Number of Questions Correct</div>
                <div className="radial-progress mt-3 text-green-600 items-center mx-auto" style={{"--value": percentCorrect}} role="progressbar">{`${percentCorrect}%`}</div>
            </div>
        </div>
    </div>
    );
}