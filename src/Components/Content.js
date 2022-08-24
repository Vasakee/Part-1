import Part1 from './Part1'
import Part2 from './Part2'
import Part3 from './Part3'
const Content = ({part1, exercises1, part2,exercises2, part3,exercises3}) =>{

    return(
        <div>
        <Part1 part1={part1} exercise1={exercises1} />
        <Part2 part2={part2} exercises2={exercises2} />
        <Part3 part3={part3} exercise3={exercises3} />
        </div>
    )
}
export default Content