import { Button,Badge } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import{FaShoppingBasket} from 'react-icons/fa'
function Header({ order ,setModalShow}) {
  return (

    <Nav className='bg-danger p-3 text-white '>
      <div className='d-flex justify-content-between container '>
        <div className='d-flex'>
          
        </div>
       <Button variant='outline-light' className='position-relative' onClick={() => setModalShow(true)}> <FaShoppingBasket />
         <Badge className='position-absolute top-0 start-100 translate-middle  ' bg="secondary">{order.length}</Badge></Button>
      </div>
    </Nav>
  );
}

export default Header;