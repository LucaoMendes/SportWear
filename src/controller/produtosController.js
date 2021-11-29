import React,{useState,useEffect} from "react";
import database from "../config/firebaseConfig";


    
/* const Produtos = [
    {
    id:"03232",
    nomeProduto : "Tênis nike sport",
    categoria: "Esportivos",
    valorVenda: 650,
    img: require('../assets/imgs/sapatos/01.jpg'),
    },
    {
    id:"0323s2",
    nomeProduto : "Tênis niske sport",
    categoria: "Esportivos",
    valorVenda: 650,
    img: require('../assets/imgs/sapatos/02.jpg'),
    },
    {
    id:"0323d2",
    nomeProduto : "Tênis nike sport",
    categoria: "Esportivos",
    valorVenda: 650,
    img: require('../assets/imgs/sapatos/03.jpg'),
    },
    {
    id:"0323f2",
    nomeProduto : "Tênis niske sport",
    categoria: "Esportivos",
    valorVenda: 650,
    img: require('../assets/imgs/sapatos/04.jpg'),
    },
    {
    id:"0323g2",
    nomeProduto : "Tênis nike sport",
    categoria: "Esportivos",
    valorVenda: 650,
    img: require('../assets/imgs/sapatos/05.jpg'),
    },
    {
    id:"03h232",
    nomeProduto : "Tênis niske sport",
    categoria: "Esportivos",
    valorVenda: 650,
    img: require('../assets/imgs/sapatos/06.jpg'),
    },
    {
    id:"03v32",
    nomeProduto : "Tênis nike sport",
    categoria: "Esportivos",
    valorVenda: 650,
    img: require('../assets/imgs/sapatos/07.jpg'),
    },
    {
    id:"0323c2",
    nomeProduto : "Tênis niske sport",
    categoria: "Esportivos",
    valorVenda: 650,
    img: require('../assets/imgs/sapatos/08.jpg'),
    },
    {
    id:"03232s",
    nomeProduto : "Tênis nike sport",
    categoria: "Esportivos",
    valorVenda: 650,
    img: require('../assets/imgs/sapatos/09.jpg'),
    },
    {
    id:"0323s2d",
    nomeProduto : "Tênis niske sport",
    categoria: "Esportivos",
    valorVenda: 650,
    img: require('../assets/imgs/sapatos/10.jpg'),
    },
    {
    id:"0323d2f",
    nomeProduto : "Tênis nike sport",
    categoria: "Esportivos",
    valorVenda: 650,
    img: require('../assets/imgs/sapatos/11.jpg'),
    },
    {
    id:"0323f2g",
    nomeProduto : "Tênis niske sport",
    categoria: "Esportivos",
    valorVenda: 650,
    img: require('../assets/imgs/sapatos/12.jpg'),
    },
    {
    id:"0323g2h",
    nomeProduto : "Tênis nike sport",
    categoria: "Esportivos",
    valorVenda: 650,
    img: require('../assets/imgs/sapatos/13.jpg'),
    },
    {
    id:"03h232i",
    nomeProduto : "Tênis niske sport",
    categoria: "Esportivos",
    valorVenda: 650,
    img: require('../assets/imgs/sapatos/14.jpg'),
    },
    {
    id:"03v32j",
    nomeProduto : "Tênis nike sport",
    categoria: "Esportivos",
    valorVenda: 650,
    img: require('../assets/imgs/sapatos/15.jpg'),
    },
    {
    id:"0323c2k",
    nomeProduto : "Tênis niske sport",
    categoria: "Esportivos",
    valorVenda: 650.05,
    img: require('../assets/imgs/sapatos/16.jpg'),
    }
]



*/

const Produtos = () => {
    const [ produtos , setProdutos] = useState([])
    const list = []
    const getProdutos = () =>{
      console.log("-------- Produtos Controller ---------")
        database.collection("produtos").orderBy('nomeProduto','asc').onSnapshot((query)=>{
            
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id})
            })
            setProdutos(list)
            
            console.log("******** FIM  PRODUTOS CONTROLLER ********")
        })
  
    }
    
  
    function deleteCategoria(id){
      database.collection("categorias").doc(id).delete()
    }
  
    useEffect(()=>{
      getProdutos()
    },[])
  
  
  return produtos
  }
export default Produtos