import { useNavigate } from 'react-router-dom';

function Cliente() {
    const navigate = useNavigate();

    return (
        <div className="container text-center">
            <div className="offset-md-4 col-md-4">
                <button
                    style={{ width: '100%' }}
                    onClick={() => navigate('/listafilmes')}
                    className="btn btn-success btn-lg"
                >
                    <i className="pi pi-sign-in"></i> &nbsp; Alugar filmes
                </button>
                <br /><br />
                <button
                    style={{ width: '100%' }}
                    onClick={() => navigate('/listafilmesAlugados')}
                    className="btn btn-info btn-lg"
                >
                    <i className="pi pi-sign-in"></i> &nbsp; Filmes alugados
                </button>
                <br /><br />
                <button
                    style={{ width: '100%' }}
                    onClick={() => navigate('/login')}
                    className="btn btn-danger btn-lg"
                >
                    <i className="pi pi-sign-out"></i> &nbsp; Sair
                </button>
            </div>
        </div>
    );
}

export default Cliente;
