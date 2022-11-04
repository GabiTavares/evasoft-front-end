import { useState } from 'react';
import baseHyster from '../bases/BaseHyster.json';

const Catalogo = () => {
    const [busca, setBusca] = useState("");
    return(
        <div>
           <input 
           type='text' 
           placeholder="Search..."
           onChange={(e) => setBusca(e.target.value)}
           />
            <table>
                <thead>
                    <tr>
                        <th>CÓDIGO</th>
                        <th>COMPONENTE</th>
                        <th>SISTEMA</th>
                    </tr>
                </thead>
                <tbody>
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
                        <tr key={i}>
                            <th>{m.Codigo}</th>
                            <th>{m.Componente}</th>
                            <th>{m.Sistema}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Catalogo;