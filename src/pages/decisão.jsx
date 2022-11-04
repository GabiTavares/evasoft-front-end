import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Analise = () => {
    const [value, setValue] = useState();
    const [showhide, setShowHide] = useState('');

    const handleChangesValues = (event) => {
        setValue((prevValue) => ({
          ...prevValue,
          [event.target.name]: event.target.value}))
      }

    const handleShowHide = () => {
        if(value === undefined){
        alert('Preencha os campos')
        } else if (
            value.ano !== undefined &&  
            value.sistemas !== undefined &&
            value.motor !== undefined &&
            value.hm !== undefined){
        setShowHide(true);
        }else {
            alert('Preencha todos os campos')
        }
    }

    const years = [
        2007,
        2008,
        2009,
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
      ]

    console.log(value)
    return (
        <div className='flex flex-col'>
        <h1 className='text-4xl mt-10 mb-10 text-center'>
            Diagnóstico de Falha</h1>
    <div className="flex flex-row">
        <div id='divForm' className=" flex flex-col items-center">
        <form className="flex flex-col items-center ml-11">
        <input
            id='hm'
            name='hm'
            type="text"
            onChange={e => handleChangesValues(e)}
            className="my-4 border-2 border-gray-300 py-3 text-md text-black"
            placeholder="HORAS/MÊS"/>

            <select
          className="my-4 border-2 border-gray-300 px-20 py-3 text-md text-black"
          name='ano'
          onChange={(e) => handleChangesValues(e)}
          >
          <option>Ano</option>
          {years.map((y, i) => (
            
          <option className='text-black' key={i}>
              {y}
            </option>
          )
          )}  
          </select>
          
        <select
        name='motor'
        className="my-4 border-2 border-gray-300 px-20 py-3 text-md text-black"
        onChange={(e) => handleChangesValues(e)}>
            <option value=''>Motor</option>
            <option value='1'>GLP</option>
            <option value='2'>Elétrico</option>
        </select>
        <select 
        name='sistemas'
        className="my-4 border-2 border-gray-300 px-20 py-3 text-md text-black"
        onChange={(e) => 
        {
            handleChangesValues(e)
        }
        }>
            <option value='null'>Sistemas</option>            
            <option value='1'>Mecânico</option>            
            <option value='2'>Elétrico</option>            
            <option value='3'>Hidráulico</option>            
        </select>
          </form>
          <button
          className='my-2 flex items-center px-16 py-3 text-md bg-black text-white hover:bg-gray-900 '
          id='link-cad'
          onClick={(e) => handleShowHide(e)}>Procurar</button>
      
        <Link to='/' 
        className='my-2 flex items-center px-16 py-3 text-md bg-black text-white hover:bg-gray-900 '
        id='link-cad'
        >Menu Inicial</Link>
        </div>
        <div id="divConsulta" className="border-2 border-black ml-12">
            {showhide && (
                <div id='div-img'>
                    <img src='/falha.jpg' alt='falha' />
                    </div>
            )}

        </div>
            
        </div>
        <div id='div-falha'>
            <p> <strong>Observações: </strong> MOTOR: 1 - GLP / 2 - Elétrico ~ SISTEMAS: 1 - Mecânico / 2 - Elétrico / 3 - Hidráulico</p>
        </div>
        
    </div>
    )
}

export default Analise;