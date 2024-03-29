import { TableContainer, Paper, Table,
    TableBody, TableCell, TableRow,
    TableHead, TablePagination } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import baseHyster from '../bases/BaseHyster.json';
import ForkliftList from '../bases/ForkliftList.json';
import swal from 'sweetalert2'

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

  //Infos da ForkliftList
  const marcasBh = baseHyster.map(mc => mc.Marca.toUpperCase())
  const marcasBhNorepeat = [...new Set(marcasBh)]

  const anosFk = ForkliftList.map(ano => ano.ANO)
  const anosFkNorepeat = [...new Set(anosFk)]

  const modelsFk = ForkliftList.map(md => md.MODELO)
  const modelsFkNorepeat = [...new Set(modelsFk)];

  const motorFk = ForkliftList.map(mt => mt.MOTOR)
  const motorFkNorepeat = [...new Set(motorFk)];

//ShowTable
  const [showtable, setShowTable] = useState('');

  const handleShowTable = () => {
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
          {ForkliftList.filter(m => {
            if(values === undefined) {
              return null;
            }
            else if(m.MARCA.toUpperCase().includes(values.marca)){
              return m
            }
          }).map(m => {
            return <>
              {modelsFkNorepeat
              .filter(mf => {
                if(mf === m.MODELO){
                  return mf;
                }
              })
              .map((md, i) => (
                <option key={i}>{md}</option>
              ))
              }
            </>
          })}
          </select>
          <select
          className="my-4 border-2 border-gray-300 px-20 py-3 text-md text-black"
          name='ano'
          onChange={(e) => {
            handleChangesValues(e)}}
          >
          <option value=''>Ano</option>
          {ForkliftList.filter(m => {
            if(values === undefined) {
              return null;
            }
            else if(m.MARCA.toUpperCase().includes(values.marca) &&
                    m.MODELO.toUpperCase().includes(values.modelo)){
              return m
            }
          }).map(m => {
            return <>
              {anosFkNorepeat
              .filter(yf => {
                if(yf === m.ANO){
                  return yf;
                }
              })
              .map((y, i) => (
                <option key={i}>{y}</option>
              ))
              }
            </>
          })}
          </select>
          <select
          className="my-4 border-2 border-gray-300 px-20 py-3 text-md text-black"
          name='motor'
          onChange={(e) => {
            (handleChangesValues(e))
            }}
          >
          <option value=''>Motor</option>
          {ForkliftList.filter((m) => {
            if(values === undefined) {
              return null;
            }
            else if(m.MARCA.toUpperCase().includes(values.marca) &&
                    m.MODELO.toUpperCase().includes(values.modelo) &&
                    m.ANO.toString().includes(values.ano)){
              return m
            }
          }).map(m => {
            return <>
              {motorFkNorepeat
              .filter(mtf => {
                if(mtf === m.MOTOR){
                  return mtf;
                }
              })
              .map((mt, i) => (
                <option key={i}>{mt}</option>
              ))
              }
            </>
          })} 
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
                        if(filt.MARCA.includes(marcasBhNorepeat)){
                          return true;
                        }else {
                          swal.fire({
                            icon: 'error',
                            title: 'Alerta',
                            text: 'Não possuimos catálogo pra esse equipamento'
                          })
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
                            }else {
                              console.log(v.Marca)
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