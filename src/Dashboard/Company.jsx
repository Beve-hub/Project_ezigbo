import React, {useState} from 'react'
import Sidebar from './Sidebar'
import Login from './Login'
import Register from './Register'

const Company = () => {
  const [currentForm, setCurrentForm] = useState('Login')

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className='overflow-hidden'>
      <div>
        <Sidebar/>
      </div>
      <div className='sm:flex justify-center items-center mx-auto '>
        {
          currentForm === "Login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
        }
      </div>
    </div>
  )
}

export default Company
