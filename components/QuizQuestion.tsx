import React, {useEffect, useState} from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import {set} from "yaml/dist/schema/yaml-1.1/set";
import {useSession, useSupabaseClient} from "@supabase/auth-helpers-react";
import {Database} from "@/lib/schema";


type QuestionState = {
  wasCorrect: boolean
  wasAnswered: boolean
};
type Stats = Database['public']['Tables']['stats']['Row']


const QuizQuestion = ({ question, qCode, aCode, explanation, correctAnswer, genericID, caseSensitive}) => {
  const [state, setState] = useState<QuestionState>({wasCorrect: false, wasAnswered: false});
  
  function checkAnswer(answer) : boolean {
    answer = stripString(answer);
    correctAnswer = stripString(correctAnswer);
    if(!caseSensitive) {
        answer = answer.toLowerCase();
        correctAnswer = correctAnswer.toLowerCase();
    }
    correctAnswer = correctAnswer.replace("space", " ");
    if(answer === correctAnswer) {
        setState({
            wasCorrect: true,
            wasAnswered: true
        });
        return true;
    }
    else {
        setState({
            wasCorrect: false,
            wasAnswered: true
        });
        return false;
    }
  }
  
  function stripString(string) {
     return string.trim().replace(/\s/g, "");
  }
  
  const supabase = useSupabaseClient();
  const session = useSession()
  const supabaseDB = useSupabaseClient<Database>()
  const [stat, setStat] = useState<Stats>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      const { data: stats, error } = await supabase
        .from('stats')
        .select('* ').eq('question_id', genericID)
          .limit(1)
      if (error) console.log('error', error)
      else if(stats.length > 0){
          setStat(stats[0])
          setState({
            wasCorrect: stats[0].is_correct,
            wasAnswered: stats[0].is_complete
        });
      } else if(stats.length == 0) {
          setState({wasCorrect: false, wasAnswered: false})
          setStat({
              id: 0,
              inserted_at: "",
              user_id: session.user.id, question_id: genericID, question_name: question, user_answer: "", is_complete: false, is_correct: false})
      }
    }
    if(session) {
        fetchTodos()
    }
  }, [session]);
  
  async function addStat(answer, isCorrect) {
      let stat = {
          user_id: session.user.id,
          question_id: genericID,
          question_name: question,
          user_answer: answer,
          is_complete: true,
          is_correct: isCorrect
      }
      const {error} = await supabase
          .from('stats')
          .insert([stat])
      if (error) console.log('error', error)
      // @ts-ignore
      setStat(stat)
  };
  
  
  function questionWithoutSesssion() {
      return (
      <div className={`collapse  ${state.wasAnswered ? '' : '!quizContainerColor'} ${state.wasAnswered ? 'collapse-open' :  'collapse-closed'}  ${state.wasCorrect ? 'correct' : 'incorrect'} my-3`}>
          <div className="collapse-title">
              <p>{question}</p>
              {qCode != null &&
                  <SyntaxHighlighter language="csharp" code={qCode} style={nightOwl} useInlineStyles={true}/>}
              <form onSubmit={e => {
                  e.preventDefault(); // Prevent the form from submitting
                  // @ts-ignore
                  checkAnswer(e.target.answer.value); // Pass the input value to checkAnswer
              }}>
                  <input type="text" name="answer" placeholder="Type here" className={`input w-full max-w-xs bg-gray-700`}
                         disabled={state.wasAnswered}/>
                  <button type="submit" className={`btn btn-neutral ml-1 ${state.wasAnswered ? 'btn-disabled' : ''}`}>Submit</button>
              </form>
          </div>
          <div className="collapse-content">
              <p>
                  {explanation}
              </p>
              {aCode != null &&
                  <SyntaxHighlighter language="csharp" code={aCode} style={nightOwl} useInlineStyles={true}/>}
          </div>
      </div>
    );
  }
  
  if(!session) {
      return questionWithoutSesssion();
  }
  
  if(stat == null && session) {
      return (
          <div className={"collapse quizContainerColor py-3"}>
            <span className="loading loading-spinner loading-lg px-3"></span>
          </div>
      );
  }
  
  return (
      <div className={`collapse  ${state.wasAnswered ? '' : '!quizContainerColor'} ${state.wasAnswered ? 'collapse-open' :  'collapse-closed'}  ${state.wasCorrect ? 'correct' : 'incorrect'} my-3`}>
          <div className="collapse-title">
              <p>{question}</p>
              {qCode != null &&
                  <SyntaxHighlighter language="csharp" code={qCode} style={nightOwl} useInlineStyles={true}/>}
              <form onSubmit={e => {
                  e.preventDefault(); // Prevent the form from submitting
                  // @ts-ignore
                  let isCorrect = checkAnswer(e.target.answer.value); // Pass the input value to checkAnswer
                  if(session) {
                        // @ts-ignore
                        addStat(e.target.answer.value, isCorrect);
                  }
              }}>
                  <input type="text" name="answer" placeholder={`${(stat != null && stat.is_complete) ? stat.user_answer : "Type Here"}`} className={`input w-full max-w-xs bg-gray-700`}
                         disabled={state.wasAnswered}/>
                  <button type="submit" className={`btn btn-neutral ml-1 ${state.wasAnswered ? 'btn-disabled' : ''}`}>Submit</button>
              </form>
          </div>
          <div className="collapse-content">
              <p>
                  {explanation}
              </p>
              {aCode != null &&
                  <SyntaxHighlighter language="csharp" code={aCode} style={nightOwl} useInlineStyles={true}/>}
          </div>
      </div>
  );
  
};

export default QuizQuestion;
