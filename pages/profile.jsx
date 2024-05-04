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
        <div className="stats">
            <div className="stat bg-gray-700">
                <div className="stat-title text-white">Total Number of Questions Correct</div>
                <div className="radial-progress mt-3 text-green-600 items-center mx-auto" style={{"--value": percentCorrect}} role="progressbar">{`${percentCorrect}%`}</div>
            </div>
        </div>
        <div className="overflow-x-auto">
            <h1 className={"card-title flex mx-auto justify-center items-center mb-6"}>Your Answers</h1>
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th className={"text-white"}>Completion Date</th>
                    <th className={"text-white"}>Question</th>
                    <th className={"text-white"}>Your Answer</th>
                </tr>
                </thead>
                <tbody>
                {userStats.map((stat) => (
                    <tr key={stat.id} className={`${stat.is_correct ? "correct" : "incorrect"}`}>
                        <td>
                            <div className="flex items-center">
                                <div>
                                    <div className="font-bold">{new Date(stat.inserted_at).toDateString()}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="flex items-center w-3/4">
                                <div>
                                    <div className="font-bold">{stat.question_name}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="flex items-center">
                                <div>
                                    <div className="font-bold">{stat.user_answer === "" ? "No Answer Given" : stat.user_answer}</div>
                                </div>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>

            </table>
        </div>
    </div>
    );
}