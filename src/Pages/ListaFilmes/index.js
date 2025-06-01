import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import FilmesTable from '../FilmesTable';

function ListaFilmes() {
    const navigate = useNavigate();

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        api.get("/filmes/disponiveis")
            .then((response) => {
                setFilmes(response.data);
                console.log(response.data);
            })
            .catch((erro) => {
                console.error("Erro ao buscar filmes:", erro);
            });
    }, []);

    return (
        <div className="container">
            <h2>Filmes Disponíveis</h2>
            <FilmesTable filmes={filmes} />
        </div>
    );

    
}

export default ListaFilmes;

