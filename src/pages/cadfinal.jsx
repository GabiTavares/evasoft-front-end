import { Link } from "react-router-dom";

export default function CadFinal() {
  return (
    <div>
    <div className='my-24 max-w-7xl mx-auto flex flex-col items-center text-center'>
        <h1 className="text-4xl"> Equipamento cadastrado</h1>
        <h1 className="text-4xl"> com sucesso</h1>

    <div className=" mt-3 flex space-x-14">
        <Link to='/cadastro' 
        className='my-8 flex w-7xl px-10 py-8 text-md bg-black text-white hover:bg-gray-900 '
        >Cadastrar novo equipamento</Link>
        <Link to='/' 
        className='my-8 flex w-7xl px-10 py-8 text-md bg-black text-white hover:bg-gray-900 '
        >Retornar ao menu inicial</Link>
    </div>
    </div>
    </div>
  );
}