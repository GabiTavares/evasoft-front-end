import { TableContainer, Paper, Table,
    TableBody, TableCell, TableRow,
    TableHead } from '@mui/material';
import { useState } from 'react';
import baseHyster from '../bases/BaseHyster.json';

const Catalogo = () => {
    const [busca, setBusca] = useState("");
    return(
        <div id="div_total" className='flex flex-col'>
        <h1 className='text-4xl mt-10 mb-10 text-center'>
            Consulta de Catálogo</h1>
    <div className="flex flex-row justify-between">

    </div>
    <div id="divConsulta" className=" border-2 border-black">
            <div id='divPesquisa' className="border-2 border-black ">
            <input 
           type='text' 
           onChange={(e) => setBusca(e.target.value)}
           className="focus:outline-none"
            placeholder="Digite o nome do componente, sistema ou código"
           />
            </div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                    <TableRow>
                  <TableCell align='center'>Código</TableCell>
                  <TableCell align='center'>Componente</TableCell>
                  <TableCell align='center'>Sistema</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {baseHyster.filter(val => {
                        if (busca === ''){
                            return val;
                        }else if(
                            val.Codigo.toString().toLowerCase().includes(busca.toLowerCase()) ||
                            val.Componente.toLowerCase().includes(busca.toLowerCase()) ||
                            val.Sistema.toLowerCase().includes(busca.toLowerCase())
                        ){
                            return val;
                        }
                    }).map((m, i) => (
                        <TableRow key={i}>
                            <TableCell>{m.Codigo}</TableCell>
                            <TableCell>{m.Componente}</TableCell>
                            <TableCell>{m.Sistema}</TableCell>
                        </TableRow>
                    ))}    
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
        </div>
    )
}

export default Catalogo;