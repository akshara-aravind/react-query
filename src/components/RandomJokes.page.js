import {useQuery} from 'react-query'
import axios from 'axios'
const fetchRandomJokes=()=>{
   return axios.get('https://official-joke-api.appspot.com/random_joke')
}
export const RandomJokesPage = () => {
    const {isLoading,data,isError,error,}=useQuery('random-jokes',fetchRandomJokes,{
        refetchInterval:10000,
    })
    if(isLoading){
        return <h2>Loading...</h2>
    }
    if(isError){
        return <div>{error.message}</div>
    }
    return (
        <div>
        <div key={data?.data.setup}>{data?.data.setup}.....{data?.data.punchline}</div>
        </div>
        )
  }