import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Basket from "./Basket";


const sizes = {xs: 'Mini pizza, 15', sm: 'Kiçik, 23', md: 'Orta, 30', lg: 'Böyük, 35', lx: 'NY Style, 40'}
const pizza = [
  {
    id: 1,
    img: "chicken_barbekyu.jpg",
    name: "Çiken Barbekyu",
    desc: "Qril Toyuq, Göbələk, Barbekyu Sousu, Mozzarella Pendiri",
    price: { xs: 5.5, sm: 10, md: 16, lg: 22 },
    cath: ['Chick']
  },
  {
    id: 2,
    img: "2.png",
    name: "Cheddar Çiken Club",
    desc: "Qril toyuğu, Pomidor, Vetçina, Mozzarella, Cheddar, Ranç sousu",
    price: { sm: 11, md: 18, lg: 22 },
    cath: ['Chick']
  },
  {
    id: 3,
    img: "meksika.jpg",
    name: "Meksika",
    desc: "Qril Toyuq, Pomidor, Göbələk, Yaşıl Bibər, Halapenyo Bibəri, Mozzarella Pendiri",
    price: { xs: 5.5, sm: 9, md: 15, lg: 20 },
    cath: ['Chick', 'Spicy']
  },
  {
    id: 4,
    img: "qarishiq_et.jpg",
    name: "Qarışıq Ət",
    desc: "Pepperoni, İtalyan Sosisi, Mal Əti, Mal Ətindən Vetçina, Mozzarella Pendiri",
    price: { sm: 13, md: 21, lg: 25 },
    cath: ['Meat']
  },
  {
    id: 5,
    img: "hot_and_spaysi.jpg",
    name: "Hot and Spaysi",
    desc: "Mal Əti, Pomidor, Yaşıl Bibər, Halapenyo Bibəri, Mozzarella Pendiri",
    price: { xs: 5.5, sm: 10, md: 16, lg: 21 },
    cath: ['Meat', 'Spicy']
  },
  {
    id: 6,
    img: "1.png",
    name: "Qril Çiken Parmezan",
    desc: "Sarımsaqlı Parmezan sousu, Qril Toyuğu, Vetçina, Pomidor, Mozzarella Pendiri, Halapeno Bibəri",
    price: { xs: 5.5, sm: 11, md: 17, lg: 20 },
    cath: ['Chick', 'Spicy']
  },
  {
    id: 7,
    img: "New-York-Style-Margarita.jpg",
    name: "New York Style Marqarita",
    desc: "Pizza Sous, Mozzarella, Pomidor, Oreqano",
    price: { lx: 26 },
    cath: ['Vegan']
  },
  {
    id: 8,
    img: "New-York-Style-Pepperoni.jpg",
    name: "New York Style Pepperoni",
    desc: "Pizza Sous, Pepperoni, Mozzarella ",
    price: { lx: 23 },
    cath: ['Meat']
  },
  {
    id: 9,
    img: "vegetarian-acili.png",
    name: "Acılı Vegetarian",
    desc: "Halapenyo Bibəri, Pomidor, Göbələk, Qara Zeytun, Yaşıl Bibər və Mozzarella Pendiri",
    price: { xs: 5.5, sm: 9, md: 13, lg: 18 },
    cath: ['Vegan', 'Spicy']
  },
  {
    id: 10,
    img: "papamiks-sayt.png",
    name: "Papa Miks",
    desc: "Çiken BBQ, Hot&Spaysi, Marqarita, Klassik Pepperoni",
    price: { lx: 20 },
    cath: ['Chick', 'Spicy']
  },
  {
    id: 11,
    img: "4-pendir.png",
    name: "4 Pendir",
    desc: "Pizza sousu, Mozzarella Pendiri, Feta Penidiri, Parmezan Pendiri, Cheddar Pendiri",
    price: { sm: 11, md: 16, lg: 22 },
    cath: ['Vegan']
  },
  {
    id: 12,
    img: "vegetarian.jpg",
    name: "Vegetarian",
    desc: "Pomidor, Göbələk, Yaşıl Bibər, Qara Zeytun, Mozzarella Pendiri",
    price: { xs: 5.5, sm: 9, md: 13, lg: 18 },
    cath: ['Vegan']
  },
  {
    id: 13,
    img: "klassik_pepperoni.jpg",
    name: "Klassik Pepperoni",
    desc: "Pepperoni, Ekstra Mozzarella",
    price: { xs: 5.5, sm: 9, md: 14, lg: 19 },
    cath: ['Meat']
  },
  {
    id: 14,
    img: "new_orleans_pizza.jpg",
    name: "Nyu Orleans",
    desc: "Qarğıdalı, Qril Toyuq, Göbələk, Yaşıl Bibər, Sarımsaq Sousu, Mozzarella Pendiri",
    price: { sm: 10, md: 15, lg: 21 },
    cath: ['Chick']
  },
  {
    id: 15,
    img: "Mushroom%20320x220%20px.jpg",
    name: "Çiken Göbələk",
    desc: "Qril toyuq, Turşu xiyar, Göbələk, Mozzarella, Göbələk sousu",
    price: { sm: 12, md: 19, lg: 23 },
    cath: ['Chick']
  },
  {
    id: 16,
    img: "Marinera.jpg",
    name: "Marinera",
    desc: "QrilTon Balığı, Yaşıl Bibər, Qara Zeytun, Mozzarella Pendiri",
    price: { xs: 5.5, sm: 10, md: 18, lg: 22 },
    cath: ['Vegan']
  }
];



function App() {
  const [modalShow, setModalShow] = useState(false);
  const [order , setOrder] = useState([])
  const [arr, setArr] = useState(pizza);

  function addToBasket(id , nmb , vasif ){
    let b = [...order]
    let controller = order.some(item => item.pid === id && item.size === nmb)

    if(!controller){
      b.push ({sid: b.length +1, pid: id, size: nmb, quantity: vasif})
    }else {
      let newobj = order.find(item => item.pid === id)
      newobj.quantity += vasif;
      console.log(newobj);
    }
    setOrder(b)
  }
  function removeFromBasket(id){
    let b = order.filter(item =>  item.pid !== +id)
    setOrder(b)
  }

  function fltr(arg){
    if(arg === "All") {
      return setArr(pizza)} 
      else {
        return setArr(pizza.filter(item => item.cath.includes(arg)))
      }
    }
  return (
    <>
     <Header order={order} setModalShow={setModalShow} />
     <Main arr={arr} pizza={pizza} sizes={sizes} setArr={setArr} fltr={fltr} addToBasket={addToBasket}/>
     <Footer />
     <Basket removeFromBasket={removeFromBasket} show={modalShow} onHide={() => setModalShow(false)} order={order} setOrder={setOrder} pizza={pizza} />
   </>
  );
}

export default App;
