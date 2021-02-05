import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

const Form = () => {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit =(e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true)
    }
  }

  return (
    <>
      <section className="container">
        <h1 className="title">Mon nuancier</h1>
        <div className="formu">
          <form onClick={handleSubmit}>
            <input 
              type="text" 
              value={color} 
              onChange={(e) => setColor(e.target.value)} 
              placeholder="Entrez une couleur." 
              className={`${error?'error' : null}`}
            />
            <button className="btn" type="submit">Valider</button>
          </form>
        </div>
      </section>
      
      {/*Nuancier*/}
      <section className="colors">
        {list.map((color,index) =>{
          return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
        })}
      </section>
    </>   
  );
}
export default Form;