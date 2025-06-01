import React from "react";
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate(); // Criando a função de navegação corretamente

    return (
        <div className="container text-center">
            <div className="offset-md-4 col-md-4">
                <br/><br/>
                <br/><br/>
                <br/><br/>
                <button style={{ width: '100%' }}
                    onClick={() => navigate('/login')} // ✅ Corrigido: Usando navigate()
                    className="btn btn-success btn-lg">
                    <i className="pi pi-sign-in"></i> &nbsp; Login
                </button>
                <br/><br/>

                <button style={{ width: '100%' }}
                    onClick={() => navigate('/home')} // ✅ Corrigido: Usando navigate()
                    className="btn btn-info btn-lg">
                    <i className="pi pi-sign-in"></i> &nbsp; Home
                </button>
                <br/><br/>

                <button style={{ width: '100%' }}
                    onClick={() => navigate('/')} // ✅ Corrigido: Usando navigate()
                    className="btn btn-danger btn-lg">
                    <i className="pi pi-sign-in"></i> &nbsp; Voltar
                </button>
            </div>
        </div>
    );
}

// ✅ Corrigido: Exportando o componente correto
export default LandingPage;