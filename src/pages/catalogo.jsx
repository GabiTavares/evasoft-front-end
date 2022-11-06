import { TableContainer, Paper, Table,
    TableBody, TableCell, TableRow,
    TableHead, TablePagination } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import baseHyster from '../bases/BaseHyster.json';
import ForkliftList from '../bases/ForkliftList.json'

const Catalogo = () => {
    const [busca, setBusca] = useState("");
    const [showinput, setShowInput] = useState('');
    const [marca, setMarca] = useState();
    
    const handleShowInput = (e) => {
    const getMarca = e.target.value;
        setShowInput(getMarca);
        setMarca({value: e.target.value});
    }

  const [values, setValues] = useState();

  const handleChangesValues = (event) => {
    setValues((prevValue) => ({
      ...prevValue,
      [event.target.name]: event.target.value}))
  }

    const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
    2020,
    2021,
    2022
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

  const [showtable, setShowTable] = useState('');

  const handleShowTable = (e) => {
    if(values === undefined){
        alert('Preencha os campos')
        } else if (
        values.ano !== undefined &&  
        values.marca !== undefined &&
        values.motor !== undefined &&
        values.modelo !== undefined){
    setShowTable(true);
    }else {
        alert('Preencha todos os campos')
    }
    // const getValues = e.target.value;
    // setShowTable(getValues)
    // setMarca({value: e.target.value});
  }

    return(
        <div id="div_total" className='flex flex-col'>
        <h1 className='text-4xl mt-10 mb-10 text-center'>
            Consulta de Catálogo</h1>
        <div className="flex flex-row justify-between">
        <div id='divForm' className=" flex flex-col items-center">
            <form className="flex flex-col items-center ml-11">
            <div className="flex flex-col justify-center">
            {
                  showinput === 'TOYOTA' && (
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
          
            <select
          className="my-4 border-2 border-gray-300 px-20 py-3 text-md text-black"
          required='required'
          name='marca'
          onChange={(e) => {
            (handleShowInput(e));
            (handleChangesValues(e))
            }}
          >
          <option value=''>Marca</option>
          <option value='TOYOTA'>TOYOTA</option>  
          <option value='HYSTER'>HYSTER</option>  
          <option value='STILL'>STILL</option>  
          <option value='YALE'>YALE</option>  

          </select>
          <select
          className="my-4 border-2 border-gray-300 px-20 py-3 text-md text-black"
          required='required'
          name='modelo'
          onChange={(e) => {
            (handleChangesValues(e))
          }}
          >
          <option value=''>Modelo</option>
          {models.map((md, i) => (
            <option key={i}>{md}</option>
          ))} 
          </select>
          <select
          className="my-4 border-2 border-gray-300 px-20 py-3 text-md text-black"
          name='ano'
          onChange={(e) => {
            handleChangesValues(e)}}
          >
          <option value=''>Ano</option>
          {years.map((y, i)=> (
            <option key={i}>{y}</option>
          ))} 
          </select>
          <select
          className="my-4 border-2 border-gray-300 px-20 py-3 text-md text-black"
          name='motor'
          onChange={(e) => {
            (handleChangesValues(e))
            }}
          >
          <option value=''>Motor</option>
          <option value='Elétrica'>Elétrica</option>  
          <option value='GLP'>GLP</option>  
          </select>

          </div>

          </form>
          <button
          className='my-2 flex items-center px-16 py-3 text-md bg-black text-white hover:bg-gray-900 '
          id='link-cad'
          onClick={(e) => handleShowTable(e)}
          >Procurar</button>
        
          <Link to='/' 
        className='my-2 flex items-center px-16 py-3 text-md bg-black text-white hover:bg-gray-900 '
        id='link-cad'
        >Menu Inicial</Link>
    </div>

        <div id="divConsulta" className=" border-2 border-black">
            <div id='divPesquisa' className="border-2 border-black ">
            <input 
            id='pesquisa'
           type='text' 
           onChange={(e) => setBusca(e.target.value)}
           className="focus:outline-none"
            placeholder="Digite o nome do componente, sistema ou código"
           />
            </div>
            {showtable && (
                <>
                    <TableContainer component={Paper}>
                <Table stickyHeader sx={{ minWidth: 550 }} size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                  <TableCell align='center'>Código</TableCell>
                  <TableCell align='center'>Componente</TableCell>
                  <TableCell align='center'>Sistema</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                      {ForkliftList.filter( id => {
                        if(values.marca === null && values.modelo === null){
                          return false;
                        }
                          else if(
                            id.MARCA.toUpperCase().includes(values.marca) &&
                            id.MODELO.toUpperCase().includes(values.modelo) &&
                            id.ANO.toString().toUpperCase().includes(values.ano) &&
                            id.MOTOR.includes(values.motor)
                          ){
                              return id;
                          }
                      })
                      .filter( filt => {
                        if(filt.ID !== false){
                          return true;
                        }
                      }
                      )
                      .map
                      (fk => {
                        return <>
                          {baseHyster
                            .filter(v => 
                            {if(fk.MARCA === v.Marca.toUpperCase()){
                                return v;
                            }} 
                            )
                            .filter(val => {
                                if (busca === ''){
                            return val;
                                }else if(
                            val.Codigo.toString().toLowerCase().includes(busca.toLowerCase()) ||
                            val.Componente.toLowerCase().includes(busca.toLowerCase()) ||
                            val.Sistema.toLowerCase().includes(busca.toLowerCase())
                        ){
                            return val;
                        }
                    })
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((m, i) => (
                        <TableRow key={i}>
                            <TableCell align='center'>{m.Codigo}</TableCell>
                            <TableCell align='center'>{m.Componente}</TableCell>
                            <TableCell align='center'>{m.Sistema}</TableCell>
                        </TableRow>
                    ))}    
                        </>
                      })
                    }
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
            rowsPerPageOptions={[8, 10, 25, 50, 100]}
            component="div"
            count={baseHyster.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
      />
                </>
            )}
            </div>
        </div>
        </div>
    )
}

export default Catalogo;