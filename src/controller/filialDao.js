
import database from '../config/firebaseConfig'


export default class filialDao {
    filiais = database.collection('filiais')

    async getFiliais(){
        const [ filiais , setfiliais] = useState([])
    
        await database.collection('produtos').onSnapshot((query) => {
        const list = []
        query.forEach((doc)=>{
            list.push({...doc.data(), id: doc.id})
        })
        setfiliais(list)
        })
        return filiais
    }

    addFilial(nomeFilial,enderecoFilial){
        this.filiais.add({
            "nomeFilial":nomeFilial,
            "enderecoFilial":enderecoFilial
        })
    }
    
    deleteFilial(id){
        this.filiais.doc(id).delete()
    }
}