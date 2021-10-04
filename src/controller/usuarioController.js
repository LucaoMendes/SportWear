import database, { userAuth } from "../config/firebaseConfig";
//UsuarioController funções para o controle do DataAccess


//Usuario Collection
const usuarios = database.collection('usuarios')
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
                return(false)
            }
            //Retorna o tipo de erro no console DEBUG
            console.error(error);
        }).then(() => {
            //Verifica se realmente foi logado e executa o bloco a seguir
            if(getUserInfo()){
                console.log('User signed in!')
                alert("LOGADO")
                return(true)
            }
        });
    }else{
        alert("Você ja está logado")
            return(true)
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


/**
 * Adicionar o usuário ao banco de dados
 * @param {string} email 
 * @param {string} senha 
 * @param {string} nome 
 * @param {string} telefone 
 * @param {number} nvAuth 
 */
export function addUser(email,senha,nome,telefone,nvAuth){
    userAuth.createUserWithEmailAndPassword(email,senha)
    .catch((error)=>{
        console.warn(error,error.code)
        if(error.code === "auth/email-already-in-use")
            alert("Esse email já esta em uso")
        if(error.code === "auth/invalid-email")
            alert("Esse email é invalido")
        if(error.code === "auth/weak-password")
            alert("A senha precisa ter no minimo 6 digitos")
    })
    .then(
        (userCredentials)=>{
            if(userCredentials){
                usuarios.add({
                    uid : userCredentials.user.uid,
                    nome : nome,
                    email : email,
                    telefone : telefone,
                    nvAuth : nvAuth
                }).then(
                    alert("usuario criado com sucesso ID: " + userCredentials.user.uid)
                )
            }
        }
        )

}
