import React from "react";
import Routes from "../src/routes";
import 'bootswatch/dist/darkly/bootstrap.css';
import 'toastr/build/toastr.css';
import 'toastr/build/toastr.min.js';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';

function App() {
  return (
    <div className="App">
     
     <Routes/>

    </div>
  );
}

export default App;


//git remote remove origin  # Remove o remote incorreto
//t remote add origin https://github.com/ReginaldoTeixeiraNascimento/frontend_curso.git  # Adiciona o remote correto
//git checkout -b locadora  # Cria e muda para o branch locadora
//git add .                 # Adiciona os arquivos ao staging
//git commit -m "Primeiro commit"  # Cria um commit inicial
//git push -u origin locadora  