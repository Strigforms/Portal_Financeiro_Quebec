import '../pages/paglogin.css';
import Botaologin from'../components/buttons';

function Camposlogin() {
    return (
        <div className='background'>
            <body>
                <div className='box_login'>
                    <div>
                        <img src={'../../imgtopo.png'} className='imgborda' alt='Imagem topo box login' />
                    </div>
                    <form className='login'>
                        <fieldset>
                            <label className='desc_input'>Login</label>
                            <input placeholder='Digite seu login' className='campologin'></input>
                        </fieldset>
                        <fieldset>
                            <label className='desc_input'>Senha</label>
                            <input placeholder='Digite sua senha' className='campologin'></input>
                        </fieldset>
                    </form>
                    <div>
                        <Botaologin />
                    </div>
                    <div>
                        <img src={'../../imgbottom.png'} className='imgborda' alt='Imagem bottom box login' />
                    </div>
                </div>
            </body>

        </div>
    );
}

export default Camposlogin;