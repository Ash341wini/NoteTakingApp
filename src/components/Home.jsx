import React from 'react'
import { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { Card } from './Card';
import Body from './Body';

function Home() {
  const [data,setData]= useState(null);
  const [flag,setFlag]=useState(false);
  // const getData = async () => {
  //   const response = await fetch(`http://localhost:9090/api/notes/${sessionStorage.getItem("email")}`);
  //   const json = await response.json();
  //   setData(json);
  //   console.log(json);
  // };

         
  
  // useEffect(() => {
  //   getData();
  //   setFlag(sessionStorage.getItem("email"))
  // }, []);
  return (
    
    
      <div className="page-content container note-has-grid">
        <Navbar />
        <Body/>

        

        {/* {flag!=null ? <div className="tab-content bg-transparent">
          <div id="note-full-container" className="note-has-grid row">
           {
            data?.map((note)=>{
              return <Card key={note.id} id={note.id} title={note.title} date={note.date}desc={note.description}/>
            })
           } */}
            

            
          </div>
       
      
    
  )
}

export default Home