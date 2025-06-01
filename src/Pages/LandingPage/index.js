import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate(); // Criando a função de navegação

    return (
        <div className="container text-center">

            <br />
            <br />
            <br />
            <br />
            <br />
            <h2>Sistema de automação para locadoras</h2>
            <br />
            <br />
            <br />
            <br />
            <h4>Sig Loca</h4>
            <br />
            <br />
            <br />

            <div className="offset-md-4 col-md-4">
                <button
                    style={{ width: "100%" }}
                    onClick={() => navigate('/home')} // Usando a navegação corretamente
                    className="btn btn-success btn-lg"
                >
                    <i className="pi pi-sign-in">&nbsp; Acessar</i>
                </button>
            </div>
        </div>
    );
};


export default LandingPage;