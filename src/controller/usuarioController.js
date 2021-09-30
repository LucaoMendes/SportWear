import { userAuth } from "../config/firebaseConfig";
//UsuarioController funções para o controle do DataAccess
/**
 * LoginUser -- Verifica a veracidade das informações passadas por parametros
 * e efetua o login
 * @param {string} login 
 * @param {string} senha 
 * 
 */
export function loginUser(login,senha){
    if(!getUserInfo()){
        userAuth.signInWithEmailAndPassword(login,senha)
        .catch(error=>{
            //Erros no login
            if(error.code === 'auth/wrong-password'){
                //Acrescentar funcionamento de erro
                alert("Senha incorreta")
                console.log("Senha Incorreta")
            }
            //Retorna o tipo de erro no console DEBUG
            console.warn(error);
        }).then(() => {
            //Verifica se realmente foi logado e executa o bloco a seguir
            if(getUserInfo()){
                console.log('User signed in!')
                alert("LOGADO")
            }
        });
    }else{
        alert("Você ja está logado")
    }
}


/**
 * LogoutUser
 * Desconecta a atual conexão
 */
export function logoutUser(){
    if(getUserInfo()){
        userAuth.signOut().then(() => {
            console.log('User signed out!')
            alert("DESLOGADO") 
        });
    }else{
        alert("Você não está logado")
    }
}

/**
 * 
 * @returns JSON com as informações do atual usuario conectado
 */
export function getUserInfo(){
    return userAuth.currentUser
}


export function addUser(login,senha,telefone){

}
