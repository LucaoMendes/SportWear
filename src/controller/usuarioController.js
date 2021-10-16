import database, { userAuth } from "../config/firebaseConfig";
//UsuarioController funções para o controle do DataAccess

//Usuario Collection
const usuarios = database.collection('usuarios')

/**
 * LoginUser verifica as informações do usuário e retorna a autenticação 
 * @param {string} email 
 * @param {string} senha 
 * @param {NAVIGATION} navigation
 */
export async function loginUser(email,senha,{navigation}){
    console.log("[USUARIO-CONTROL]","-------- Login User --------")
    console.log("[USUARIO-CONTROL]"," Solicitação de login usuário : \" "+email+" \" ")
    try{
        let response = await userAuth.signInWithEmailAndPassword(email,senha).catch(error=>{
            //Erros no login
            if(error.code === 'auth/wrong-password'){
                //Acrescentar funcionamento de erro
                console.log("[USUARIO-CONTROL]"," Senha incorreta do Usuário: \" "+email+" \" ")
            }
            //Retorna o tipo de erro no console DEBUG
            console.error(error);
        })
        if(response && response.user){
            alert("Bem vindo: " + response.user.email)
            console.log("[USUARIO-CONTROL]"," Login bem sucedido do Usuário: \" "+email+" \" ")
            navigation.replace("DrawerNavigation")
        }
    } catch (e){
        console.error("[USUARIO-CONTROL]",e.message)
    }
    console.log("[USUARIO-CONTROL]","x-x-x-x- Login User FIM  -x-x-x-x")
}



/**
* 
* LogoutUser
* Desconecta a atual conexão
*
* @param {NAVIGATION} navigation
* @param {Array} params
*/
export async function logoutUser({navigation},params) {
    console.log("[USUARIO-CONTROL]","-------- Logout User --------")
    console.log("[USUARIO-CONTROL]","Verificando se tem alguma sessão logada")
    if(isLoggedIn()){
        await userAuth
            .signOut()
            .then(()=> 
                console.log("[USUARIO-CONTROL]"," Logout bem sucedido")
            )
        navigation.replace("Login",params)
    }else{
        console.log("[USUARIO-CONTROL]"," Solicitação de logout sem usuário conectado")
    }
    console.log("[USUARIO-CONTROL]","x-x-x-x- Logout User FIM  -x-x-x-x")  
}


/**
 * Busca as informações do usuário conectado no banco de dados
 * @returns JSON
 */
export async function getUserInfo(){
    console.log("[USUARIO-CONTROL]","-------- GetUserInfo --------")
    console.log("[USUARIO-CONTROL]"," Obtendo informações do usuário")
    var user = null
    console.log("[USUARIO-CONTROL]"," Variaveis inicializadas")
    if(isLoggedIn()){
        console.log("[USUARIO-CONTROL]"," Login Confirmado")
        user = 
             await usuarios
            .where('uid',"==",userAuth.currentUser.uid)
            .get()
            .then(querySnapshot =>{
                console.log("[USUARIO-CONTROL]"," Informações do usuario obtidas")
                console.log("[USUARIO-CONTROL]"," ID: "+ userAuth.currentUser.uid)
                console.log("[USUARIO-CONTROL]"," Obtendo informações do banco de dados")
                const data = querySnapshot.docs.map(doc=>({
                    id:doc.id,
                    ...doc.data()
                }))
                console.log("[USUARIO-CONTROL]"," Informações do banco de dados obtidas")
                console.log("[USUARIO-CONTROL]"," Informações gerais do usuário:")
                return data
            })
            console.log("[USUARIO-CONTROL]  Informações:", user)
    }
    console.log("[USUARIO-CONTROL]","x-x-x-x- GetUserInfo FIM  -x-x-x-x")
    return user
}

/**
 * Faz a verificação de usuário logado ou não
 * @returns boolean
 */
export function isLoggedIn(){
    console.log("[USUARIO-CONTROL]","-------- isLoggedIn --------")
    console.log("[USUARIO-CONTROL]"," Verificação de Usuário Logado")
    if(userAuth.currentUser != null){
        console.log("[USUARIO-CONTROL]"," Logado, UID: "+ userAuth.currentUser.uid)
        console.log("[USUARIO-CONTROL]","x-x-x-x- isLoggedIn FIM  -x-x-x-x")
        return true
    }else{
        console.log("[USUARIO-CONTROL]","Sem login confirmado")
        console.log("[USUARIO-CONTROL]","x-x-x-x- isLoggedIn FIM  -x-x-x-x")
        return false
    }
    
}


/**
 * Adicionar o usuário ao banco de dados
 * @param {NAVIGATION} navigation
 * @param {string} email 
 * @param {string} senha 
 * @param {string} nome 
 * @param {string} telefone 
 * @param {number} nvAuth 
 */
export async function addUser({navigation},email,senha,nome,telefone,nvAuth){
    console.log("[USUARIO-CONTROL]","-------- AddUser --------")
    console.log("[USUARIO-CONTROL]"," Cadastro de usuário")
    console.log("[USUARIO-CONTROL]"," Inicializando variaveis")
    var retorno = false;
    await userAuth.createUserWithEmailAndPassword(email,senha)
    .catch((error)=>{
        console.warn("[USUARIO-CONTROL] " + error,error.code)
        if(error.code === "auth/email-already-in-use"){
            alert("Esse email já esta em uso")
        }else if(error.code === "auth/invalid-email"){
            alert("Esse email é invalido")
        }else if(error.code === "auth/weak-password"){
            alert("A senha precisa ter no minimo 6 digitos")
        }
            
    })
    .then(
        async (userCredentials)=>{
            if(userCredentials){
                const userRef = await usuarios.add({
                    uid : userCredentials.user.uid,
                    nome : nome,
                    email : email,
                    telefone : telefone,
                    nvAuth : nvAuth
                })
                console.log("[USUARIO-CONTROL]"," Cadastro Confirmado ID DB: "+userRef.id)
                retorno = true
                logoutUser({navigation},{ cadastro : true })
            }
        }
    )
    console.log("[USUARIO-CONTROL]","x-x-x-x- AddUser FIM  -x-x-x-x")
        return retorno
}
