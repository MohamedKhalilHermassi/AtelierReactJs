import React, { Suspense, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import FormEditEvent from "./components/formEditEvent";
const Header = React.lazy(() => import('./components/Header'))
const Products = React.lazy(() => import('./components/Products'))
const Events = React.lazy(() => import('./components/Events'))
const EventDetails = React.lazy(() => import('./components/EventDetails'))
const FormEvent = React.lazy(() => import('./components/FormEvent'))
function App() {

  const [show, setShow] = useState(true)
  const [role,setRole]=useState("admin")
  let name = "Test";
  let person = {
    name: "Test",
    age: 30,
  };

  let b = true;

  const style1 = {
    color: 'red',
    backgroundColor: 'blue'
  }

  let students = [
    { name: "s1", age: 10 },
    { name: "s2", age: 20 },
    { name: "s3", age: 30 },
  ];
  
  function test() {
    console.log("I m here")
  }

  function getPerson(person1) {
    return person1;
  }
  return (
    <>
      {/* <Header name={name} age='30' />
      <Counter PropName={name} />
      <button onClick={()=>setShow(!show)}>Update Show</button>
      {show && <Products PropName={name} />} */}
       {/* <h1 > Hello, { name }</h1>
        <h2>Hello ,{getPerson("Test 2")}</h2>
  { b ? <p style={style1}>{person.name}</p> : <p className="age">{person.age}</p> }
  { b && <p>True</p> }
  {
    students.map((s, i) => {
      return (
        <ul key={i}>
          <li>{s.name}</li>
          <li>{s.age}</li>
        </ul>
      )
    })
  }
      <img /> 
      <button onClick={()=>test()} >Click Me</button>  */}

      {/* <Events /> */}
      <Suspense fallback={<h1>Loading</h1>}>
      <Header />
      <Routes>
        {/* {role !== 'admin' ? (
          <Route path="/admin" element={<Dashboard />} >
            <Route path="users" element={<Users/>}/>
          </Route>
        ) : ( */}
            {/* <> */}
              {/*  */}
        <Route path="/events">
          <Route index element={<Events />} />
          <Route path=":id/:title" element={<EventDetails/>}/>
          <Route path="/events/:eventId"element={<FormEditEvent/>} />
         
        
          <Route path="add" element={<FormEvent/>}/>
          </Route>
        <Route path="/products" element={<Products />} />
            <Route path="/counter" element={<Counter />} />
            {/* </> */}
        {/* )} */}
        <Route path="*" element={<h1>Not Found</h1>}/>
      </Routes>
      </Suspense>
      </>
  );
}

export default App;
