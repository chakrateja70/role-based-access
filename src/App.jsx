import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
const USER_TYPES = {
  PUBLIC: "Public User",
  NORMAL_USER: "Normal User",
  EMPLOYEE: "EMPLOYEE",
  MANAGER: "MANAGER"
}

const CURRENT_USER_TYPE = USER_TYPES.MANAGER;

const App = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar'>
        <Link to={"/"} className='link-item'>HOME</Link>
        {/* {
          (CURRENT_USER_TYPE === USER_TYPES.NORMAL_USER || CURRENT_USER_TYPE === USER_TYPES.EMPLOYEE || CURRENT_USER_TYPE === USER_TYPES.MANAGER)? 
          <>
          <Link to={"/user"} className='link-item'>USER</Link>
          </> : null
        }
        {
          (CURRENT_USER_TYPE === USER_TYPES.EMPLOYEE || CURRENT_USER_TYPE === USER_TYPES.MANAGER )? 
          <>
          <Link to={"/user"} className='link-item'>USER</Link>
          <Link to={"/employee"} className='link-item'>EMPLOYEE</Link>
          </> : null 
        }
        {
          (CURRENT_USER_TYPE === USER_TYPES.MANAGER)? 
          <>
          <Link to={"/user"} className='link-item'>USER</Link>
          <Link to={"/employee"} className='link-item'>EMPLOYEE</Link>
          <Link to={"/manager"} className='link-item'>MANAGER</Link>
          </> : null 
        } */}
          <Link to={"/user"} className='link-item'>USER</Link>
          <Link to={"/employee"} className='link-item'>EMPLOYEE</Link>
          <Link to={"/manager"} className='link-item'>MANAGER</Link>
        <div className='link-item-user'>You are logged in as: <span className='user-logged'>{CURRENT_USER_TYPE}</span></div>
      </div>
  
      <AppRoutes />
    </div>
  )
}

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<PublicElement><Home /></PublicElement>}></Route>
       
        <Route path='/user' element={<UserElement><User /></UserElement>}></Route>
        <Route path='/employee' element={<EmployeeElement><Employee /></EmployeeElement>}></Route>
        <Route path='/manager' element={<ManagerElement><Manager /></ManagerElement>}></Route>
        <Route path='*' element={<div>Page Not Found!</div>}></Route>
      </Routes>
    </div>
  )
}

function Home() {
  return <div className='alert-mssg'>Accessing Home Page as: {CURRENT_USER_TYPE}</div>
}
function User() {
  return <div className='alert-mssg'>Accessing User Page as: {CURRENT_USER_TYPE}</div>
}
function Employee() {
  return <div className='alert-mssg'>Accessing Employee Page as: {CURRENT_USER_TYPE}</div>
}
function Manager() {
  return <div className='alert-mssg'>Accessing Manager Page as: {CURRENT_USER_TYPE}</div>
}

function PublicElement({children}) {
  return <>
    {children}
  </>
}

function UserElement({children}) {
  if(CURRENT_USER_TYPE === USER_TYPES.NORMAL_USER || CURRENT_USER_TYPE === USER_TYPES.EMPLOYEE || CURRENT_USER_TYPE === USER_TYPES.MANAGER) {
    return <>
      {children}
  </>
  } else {
    return <div className='alert-mssg'>You do not have access to this page!</div>
  }
}
function EmployeeElement({children}) {
  if(CURRENT_USER_TYPE === USER_TYPES.EMPLOYEE || CURRENT_USER_TYPE === USER_TYPES.MANAGER ) {
    return <>
      {children}
  </>
  } else {
    return <div className='alert-mssg'>You do not have access to this page!</div>
  }
}
function ManagerElement({children}) {
  if(CURRENT_USER_TYPE === USER_TYPES.MANAGER ) {
    return <>
      {children}
  </>
  } else {
    return <div className='alert-mssg'>You do not have access to this page!</div>
  }
}

export default App
