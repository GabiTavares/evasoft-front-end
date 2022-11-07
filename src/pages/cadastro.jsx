import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import ForkliftList from '../bases/ForkliftList.json'


export default function CadastroEquip() {

  

  //juntar todas as functions para enviar para back 
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/cadastro_finalizado')

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
  const models = [
'8FG25 ',          
'FG18  ',          
'8FG18 ',          
'8FGU25',          
'8FGU18',          
'FGZN25',          
'8FG25B',          
'8FGJ35',          
'8FGU30',   
'8FG18C',   
'SWEB140',   
'H060 FT',   
'H50CT',   
'H50FT',   
'R1.6H',   
'S1.6',   
'FMX 16',   
'FMX 17',   
'FMX G115 8825',   
'FMX G115 8825 TR',
'FMX17',
'EGV 16',
'FMXG115 8825',    
'18AK ',          
'GP050LX',        
'MR20D',           
'MS16' ,          
'VX50',            
"VX60"            
  ]

  const [marca, setMarca] = useState();
  const [showhide, setShowHide] = useState('');

  const handleShowHide = (e) => {
    const getMarca = e.target.value;
    setShowHide(getMarca);
    setMarca({value: e.target.value});
  }

  return (
    <div className='max-w-7xl mx-auto flex flex-col items-center'>

        <h1 className='text-4xl mt-10 mb-10'>Cadastro de Equipamentos</h1>
        <div className="flex flex-col justify-center items-center">
          
        <form  onSubmit={handleSubmit} className="flex flex-col items-center">
        <div id='divForm' className=" flex flex-col items-center">
            <div className="flex flex-col justify-center">
            {
                  showhide === 'TOYOTA' && (
                    <input 
                  id='serie'
                  name='serie'
                  required='required'
                  type='text'
                  className='border-2 focus:outline-none'
                  placeholder='Nº de série'
                //   onChange={handleChangesValue}
                  //carregar json antes da validação/cadastro
                />
                  )
                }
                {
                  showhide === 'newMarca' && (
                    <input 
                  id='serie'
                  name='marca'
                  required='required'
                  type='text'
                  className='border-2 focus:outline-none'
                  placeholder='Nova Categoria'
                  //carregar json antes da validação/cadastro
                />
                  )
                }
                {
                  showhide === 'newModelo' && (
                    <input 
                  id=''
                  name='modelo'
                  required='required'
                  type='text'
                  className='border-2 focus:outline-none'
                  placeholder='Nova Categoria'
                  //carregar json antes da validação/cadastro
                />
                  )
                }
                {
                  showhide === 'newAno' && (
                    <input 
                  id='serie'
                  name='ano'
                  required='required'
                  type='text'
                  className='border-2 focus:outline-none'
                  placeholder='Nova Categoria'
                  //carregar json antes da validação/cadastro
                />
                  )
                }
                {
                  showhide === 'newMotor' && (
                    <input 
                  id='serie'
                  name='motor'
                  required='required'
                  type='text'
                  className='border-2 focus:outline-none'
                  placeholder='Nova Categoria'
                  //carregar json antes da validação/cadastro
                />
                  )
                }
          
            <select
          className="my-4 border-2 border-gray-300 px-20 py-3 text-md text-black"
          required='required'
          name='marca'
          onChange={(e) => handleShowHide(e)}
          >
          <option value=''>Marca</option>
          <option value='TOYOTA'>TOYOTA</option>  
          <option value='HYSTER'>HYSTER</option>  
          <option value='STILL'>STILL</option>  
          <option value='YALE'>YALE</option>
          <option value='newMarca'>Adicionar +</option> 

          </select>
          <select
          className="my-4 border-2 border-gray-300 px-20 py-3 text-md text-black"
          required='required'
          name='modelo'
          onChange={(e) => handleShowHide(e)}
          >
          <option value=''>Modelo</option>
          {models.map((md, i) => (
            <option key={i}>{md}</option>
          ))} 
          <option value='newModelo'>Adicionar +</option> 
          </select>
          <select
          className="my-4 border-2 border-gray-300 px-20 py-3 text-md text-black"
          name='ano'
          onChange={(e) => handleShowHide(e)}
          >
          <option>Ano</option>
          {years.map(y => (
            <option>{y}</option>
          ))} 
          <option value='newAno'>Adicionar +</option> 
          </select>
          <select
          className="my-4 border-2 border-gray-300 px-20 py-3 text-md text-black"
          name='motor'
          onChange={(e) => handleShowHide(e)}
          >
          <option value=''>Motor</option>
          <option value='Elétrica'>Elétrica</option>  
          <option value='GLP'>GLP</option>
          <option value='newMotor'>Adicionar +</option> 
          </select>

          </div>
    </div>
        <button
        className='my-4 flex px-16 py-3 text-md bg-black text-white hover:bg-gray-900 '
        id='link-cad'
        type='submit'
        >Cadastrar</button>

          </form>        

        <Link to='/' 
        className='my-2 flex px-16 py-3 text-md bg-black text-white hover:bg-gray-900 '
        id='link-cad'
        >Menu Inicial</Link>

        </div>
    </div>
  );
}