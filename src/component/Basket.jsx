
import {Button,Modal ,Table} from 'react-bootstrap/';
import { FaTrash } from 'react-icons/fa';

function Basket({ removeFromBasket, order, setOrder,pizza, ...props}) {

     function change(arg, obj){
      // console.log(bool, obj);
      if(arg){obj.quantity += 1}
      else if(!arg && obj.quantity >1 ){obj.quantity -= 1}

      setOrder([...order])
    }

    const path = "./assets/img/";

    let total = order.reduce((t,o) => t+= o.quantity* pizza.find(p => p.id === o.pid).price[o.size], 0)
  return (
    
    
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
       
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Şəkil</th>
          <th>Ad</th>
          <th>Ölçü</th>
          <th>Qiymət</th>
          <th>Say</th>
          <th>Cəm</th>
          <th>Artir</th>
          <th>Sil</th>
        </tr>
      </thead>
      <tbody>
        {
         
            order.map((item,id)=> {
                let newpiz = pizza.find(piz => piz.id === item.pid)

           return( <tr key={id}>
                <td><img style={{width:"60px"}} src={path + newpiz.img} alt="" /></td>
                <td>{newpiz.name}</td>
                <td>{item.size}</td>
                <td>{newpiz.price[item.size]}</td>
                <td>{item.quantity}</td>
                <td>{newpiz.price[item.size] * item.quantity}</td>
                <td> <button onClick={()=> change(false,item)}>-</button> <input value={item.quantity} type='text' />  <button onClick={()=> change(true,item)} >+ </button> </td>
                <td><FaTrash onClick={()=>{ removeFromBasket(item.pid)}} /> </td>
              </tr>)})
        }
         <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th>Cəm</th>
          <th>{total}</th>
          <th></th>
        </tr>

      </tbody>
    </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Basket