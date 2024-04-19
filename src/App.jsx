import  { useState, useEffect, useCallback } from 'react';
import './App.css'
function App() {
  const [colorRed, setRed] = useState(0);
  const [colorGreen, setGreen] = useState(0);
  const [colorBlue, setBlue] = useState(0);

  const change = useCallback(() => {
    const color = `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`;
    document.body.style.backgroundColor = color;
  }, [colorRed,colorGreen,colorBlue]);

  useEffect(() => {
    change();
  }, [change]);

  return (
    <div className='b'>
      <div className='color-changer-div'>
        <div className='red'>
            <input type="range" min={0} max={255} value={colorRed} className="cursor-pointer-red" onChange={(r) => { setRed(parseInt(r.target.value)) }} />
            <label>Red</label>
        </div>
        <div className="green">
            <input type="range" min={0} max={255} value={colorGreen} className="cursor-pointer-green" onChange={(g) => { setGreen(parseInt(g.target.value)) }} />
            <br></br>
            <label>Green</label>
        </div>
        <div className='blue'>
            <input type="range" min={0} max={255} value={colorBlue} className="cursor-pointer-blue" onChange={(b) => { setBlue(parseInt(b.target.value)) }} />
            <br></br>
            <label>Blue</label>
        </div>
        
        
      </div>
    </div>
  );
}

export default App;
