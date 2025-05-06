import { useState } from 'react'


function botones(){

    const [tipoFormulario, setTipoFormulario] = useState('');
    

    const ClicK = (valor) => {
        setTipoFormulario(valor);
      };       
      const [texto, setTexto] = useState('');

      const manejarCambio = (e) => {
        setTexto(e.target.value);
      }; 



    return(
        <>
            <div className='row text-center justify-content-center'>
                <div className="col-sm-6 col-md-3">
                    <button className='btns' onClick={()=>ClicK('login')}>
                        Login

                    </button>

                </div>
                <div className="col-sm-6 col-md-3">
                <button className='btns' onClick={()=>ClicK('register')}>
                        Register

                </button>
                    
                </div>

                {tipoFormulario === 'login' && (

                    <form>
                    <h3>Formulario de Login</h3>
                    <input type="text" placeholder="Usuario" />
                    <input type="password" placeholder="Contraseña" />
                    <button type="submit">Entrar</button>
                    </form>


                )}

                {tipoFormulario === 'register' && (
                    <form>
                    <h3>Formulario de Registro</h3>
                    <input type="text" placeholder="Nombre" />
                    <input type="email" placeholder="Correo" />
                    <input type="password" placeholder="Contraseña" />
                    <button type="submit">Registrarse</button>
                    </form>
                )}

            </div>
         </>
    


    )
}


export default botones