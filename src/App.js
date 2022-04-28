import React from 'react';
import { useState } from "react"

import {useSelector, useDispatch} from 'react-redux'
import {addFaq, removeAll, removeFaq, updateFaq} from './actions/counterAccion'

function App() {

  const [valor, setValor] = useState("");
  const [valor2, setValor2] = useState("");
  const [valor3, setValor3] = useState("");
  const [valor4, setValor4] = useState("");


  function AddV (e) {
    setValor (e.target.value)
  }
  
  function AddV2 (e) {
    setValor2 (e.target.value)
  }

  function AddV3 (e) {
    setValor3 (e.target.value)
  }

  function AddV4 (e) {
    setValor4 (e.target.value)
  }

  const question = useSelector((state)=>{
    return state.question.question;
  })

  console.log(question)
  const dispatcher = useDispatch();
  
  return (
    <div className="App">
      <h1>Question</h1>
      <input value = {valor} onChange={AddV} />

      <button onClick={() => {
        dispatcher(addFaq(valor))}}> Agregue pregunta </button>
    

      <div>
      <input placeholder='Indice' value = {valor2} onChange={AddV2} />
      <button onClick={() => {
              dispatcher(removeFaq(valor2))}}> Borrar una pregunta </button>
      </div>

      <div>
      <input placeholder='Nueva pregunta' value = {valor3} onChange={AddV3} />
      <input placeholder='Indice' value = {valor4} onChange={AddV4} />
      <button onClick={() => {
              dispatcher(updateFaq(valor3, valor4))}}> Modificar una pregunta </button>

      </div>

      <div>
      <button onClick={() => {
              dispatcher(removeAll())}}> Borrar todas las preguntas </button>
      </div>
      <div>
        {question.Qs}
      </div>

    </div>

  );
}

export default App;
