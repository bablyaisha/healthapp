import React , {useState} from 'react'
import Navbar from '../components/navbar/navbar'
import Sidebar from '../components/sidebar/sidebar'

function Home() {
    const [isOpen, setIsOpen]= useState(false);
    
    const toggle= () =>{
        setIsOpen(!isOpen)
    }

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar  toggle={toggle}/>
    </div>
  )
}

export default Home
