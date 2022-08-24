import StatisticLine from "./StatisticLine"

const Statistics = ({good, neutral, bad, total}) =>{
    if(!good && !bad && !neutral){
      return (
        <div>
            No feedback given
        </div>
      )
    }  
return(
   <div>
     <h1>Statistics</h1> 
      <table> 
        <tbody>
          <StatisticLine text={'good'} value={good} />
          <StatisticLine text={'neutral'} value={neutral} />
          <StatisticLine text={'bad'} value={bad} />
          <StatisticLine text={'all'} value={total} />
          <StatisticLine text={'average'} value={(total/3).toFixed(1)} />
          <StatisticLine text={'posiitive'} value={((good/total)*100).toFixed(1)} />
          </tbody>
       </table>   
   </div> 
 )  
}
export default Statistics