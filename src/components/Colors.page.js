import {useMutation} from 'react-query'
import {useQuery} from 'react-query'
import { useState } from 'react' 
import axios from 'axios'
const fetchColors=()=>{
   return axios.get('http://localhost:4000/colors')
}
const addColor=(color)=>{
    return axios.post('http://localhost:4000/colors',color)

}
export const ColorsPage = () => {
    const[label,setLabel]=useState('')
   
  
    const {mutate}=useMutation(addColor)
    const handleAddColorClick=()=>{
        const color={label}
        mutate(color)
    }
    const {isLoading,data,isError,error,}=useQuery('colors',fetchColors)
    if(isLoading){
        return <h2>Loading...</h2>
    }
    if(isError){
        return <div>{error.message}</div>
    }
    return (
            <div>
            <input
              type='text'
              value={label}
              onChange={e => setLabel(e.target.value)}
            />
            <button onClick={handleAddColorClick}>Add Color</button>
            {data?.data.map(colors => {
                        return ( 
                          <div key={colors.id}>
                              {colors.id} {colors.label}
                          </div>
                        )
                      })}
            </div>
    )

  }