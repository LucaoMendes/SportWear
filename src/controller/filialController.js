import { useState } from 'react'
import database from '../config/firebaseConfig'
//filiaisController Controladora de filiais, acontece todo o dataAccess aqui


//Collection das filiais
filiais = database.collection('filiais')


/**
 * 
 * @returns retorna a lista de filiais em forma de ARRAY de Objetos JSON
 */
export function getFiliais(){
    const [ filiais , setfiliais] = useState([])

    database.collection('filiais').onSnapshot((query) => {
        const list = []
        query.forEach((doc)=>{
            list.push({...doc.data(), id: doc.id})
        })
        setfiliais(list)
    })
    return filiais
}


/**
 * Adiciona uma filial ao banco de dados
 * @param {string} nomeFilial 
 * @param {string} enderecoFilial 
 */
export function addFilial(nomeFilial,enderecoFilial){
    this.filiais.add({
        "nomeFilial":nomeFilial,
        "enderecoFilial":enderecoFilial
    })
}

/**
 * Remove uma filial do banco de dados
 * @param {string} id 
 */
export function deleteFilial(id){
    this.filiais.doc(id).delete()
}
