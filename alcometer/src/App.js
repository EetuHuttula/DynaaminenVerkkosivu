import './App.css';
import {useState} from "react"


function App() {

  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [gender, setGender] = useState(0);
  const bLooper = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const hLooper = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function calculate() {
    
  
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5; 
    let burning = weight / 10;
    let left = grams - (burning * hours);

          if (gender === 'Male') {
            let answer = left / (weight * 0.7);
              if(answer < 0){
                setAnswer(0);
              }
           else {
            setAnswer(answer);
          }
        }
          else if (gender === 'Female') {
            let answer = left / (weight * 0.6);
            if (answer < 0){
              setAnswer(0);
            }
          else {
              setAnswer(answer);
            }
          }
  }
  return (
    <div className="App">
      <h3>Alcometer</h3>
      <form>
        <div>
          <label>Weight</label>
          <input type="number" value={weight} onChange={e=>setWeight (e.target.value)}></input>
        </div>

        <div>
          <label>Bottles</label>
          <select type="number" value={bottles} onChange={e=>setBottles (e.target.value)}>
          {bLooper.map((bLooper) => {
             return ( <option>{bLooper}</option> );
          })}
          </select>
        </div>

        <div>
          <label>Time</label>
          <select type="number" value={hours} onChange={e=>setHours (e.target.value)}>
          {hLooper.map((hLooper) => {
            return ( <option>{hLooper}</option> );
          })}
          </select>
        </div>

        <div>
          <label>Gender</label>
          <input type="radio" value="Male" name="gender" onChange={e=>setGender(e.target.value)} /> Male
          <input type="radio" value="Female" name="gender"onChange={e=>setGender(e.target.value)}  /> Female
        </div>

        <div>
            <span>{answer.toFixed(2)}</span>
        </div>
            <button type="button" onClick={calculate}>Calculate</button>
      </form>
        
    </div>
  );
}

export default App;
