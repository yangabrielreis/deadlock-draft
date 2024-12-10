import React from 'react';
import { Link } from 'react-router-dom';


function NewDraft() {
    return (
        <div className='App'>
            <header className='App-header'>
                <div>
                    <h1>Copie um link para acessar o draft:</h1>
                    <div>
                        <h2 href='#'>Time Ambar</h2>
                        <button onClick={() => copiarLink('localhost:3000/true-draft')}>
                        Copiar Link
                        </button>
                    </div>
                    <div>
                        <h2>Time Safira</h2>
                        <button onClick={() => copiarLink('localhost:3000/true-draft')}>
                        Copiar Link
                        </button>
                    </div>
                    <div>
                        <h2>Espectador</h2>
                        <button onClick={() => copiarLink('localhost:3000/true-draft')}>
                        Copiar Link
                        </button>
                    </div>
                    <div>
                    <Link to="/">
                    <button>Voltar</button>
                    </Link>
                    </div>
                </div>
            </header>
        </div>
    );
  


function copiarLink(text) {
    navigator.clipboard.writeText(text);
    alert('Link copiado para a área de transferência!');
}


}

export default NewDraft;