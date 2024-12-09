import React from 'react';


function NewDraft() {
    return (
        <div className='App'>
            <header className='App-header'>
                <div>
                    <h1>Copie um link para acessar o draft:</h1>
                    <div>
                        <h2 href='#'>Time Ambar</h2>
                        <button onClick={() => copiarLink('Time Ambar')}>

                        </button>
                    </div>
                    <div>
                        <h2>Time Safira</h2>
                        <button onClick={() => copiarLink('Time Safira')}>

                        </button>
                    </div>
                    <div>
                        <h2>Espectador</h2>
                        <button onClick={() => copiarLink('Espectador')}>

                        </button>
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