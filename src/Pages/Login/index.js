import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';
import api from '../../services/api';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    const navigate = useNavigate();

    const entrar = () => {
        console.group("Dados do Login");
        console.log("Email:", email);
        console.log("Telefone:", senha);
        console.groupEnd();

        api.post("/clientes/login", {
            email: email,
            telefone: senha,  // Corrigido "telefone" para "senha"
        })
        .then((response) => {
            const userId = response.data.id;
            localStorage.setItem("userId", userId);
            localStorage.setItem("prodUser", JSON.stringify(response.data));
            navigate("/cliente");
        })
        .catch((erro) => {
            console.error("Erro ao autenticar:", erro);
            alert("Falha no login! Verifique suas credenciais.");
        });
    };

    const cadastrarUsuario = () => {
        console.group("Cadastro de Usuário");
        console.log("Email:", email);
        console.log("Telefone:", senha);
        console.groupEnd();

        const nome = email.split('@')[0];

        api.post("/clientes", {
            nome: nome,
            email: email,
            telefone: senha, // Corrigido "telefone" para "senha"
        })
        .then((response) => {
            alert(`Cliente ID ${response.data.id} cadastrado com sucesso!`);
            navigate("/home");
        })
        .catch((erro) => {
            console.error("Erro ao cadastrar:", erro);
            alert("Erro ao cadastrar usuário!");
        });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6" style={{ position: 'relative', margin: '0 auto' }}>
                    <div className="bs-docs-section">
                        <Card title="Login">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                                                <input type="email"
                                                    className="form-control"
                                                    id="exampleInputEmail1"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Digite o Email"
                                                    value={email}
                                                    onChange={e => setEmail(e.target.value)} />
                                            </FormGroup>
                                            <FormGroup label="Senha: *" htmlFor="exampleInputPassword1">
                                                <input type="password"
                                                    className="form-control"
                                                    id="exampleInputPassword1"
                                                    placeholder="Digite a Senha"
                                                    value={senha}
                                                    onChange={e => setSenha(e.target.value)} />
                                            </FormGroup>
                                            <div className="btn-group d-flex justify-content-center" role="group">
                                                <button className="btn btn-success" onClick={entrar}>
                                                    <i className="pi pi-bitcoin"></i>&nbsp; Entrar
                                                </button>
                                                <button className="btn btn-warning" onClick={cadastrarUsuario}>
                                                    <i className="pi pi-save"></i>&nbsp; Cadastrar
                                                </button>
                                                <button className="btn btn-danger" onClick={() => navigate('/home')}>
                                                    <i className="pi pi-sign-out"></i>&nbsp; Sair
                                                </button>
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
