import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function Pizza({id, name, img, price, desc, size , addToBasket}) {
    const [nmb, setNmb] = useState(Object.keys(price)[0]);
    const [vasif , setVasif] = useState(1);
    const path = "./assets/img/";
    
    function std(e){
       setNmb(e.target.value)
    }
    function change(arg){
       if(arg && vasif<20){ setVasif(vasif+1)}
       else if(!arg && vasif>1) {setVasif(vasif-1)}
    }
    return (
        <div className="my-4  ">
            <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src={path + img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text style={{ height: '80px' }}>
                        {desc}
                    </Card.Text>
                    <div className='d-flex justify-content-between align-center'>
                    <Form.Select onChange={std} aria-label="Default select example" style={{flexBasis: "70%"}}>
                        {
                             Object.keys(price).map((item,i)=>  <option key={i} value={item}>{size[item]}</option>)
                        }
                    </Form.Select>
                    <span className='py-1 text-nowrap' style={{flexBasis: "20%"}}>{price[nmb] * vasif} Azn</span>
                    </div>
                    <div className='d-flex py-3'>
                    <Button variant="primary" onClick={()=> change(false)} >-</Button>
                    <Form.Control readOnly className='text-center' value={vasif}/>
                    <Button variant="primary" onClick={()=> change(true)}>+</Button>
                    </div>
                    <Button onClick={() =>  {addToBasket( id , nmb , vasif )}} variant="primary">Add to </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Pizza
