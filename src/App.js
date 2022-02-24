import React, {useState} from 'react';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import {v4 as uuidv4} from 'uuid';

const App = () => {
  const usersData = [
    { id: uuidv4(), name: 'Tamara', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Hyuk', username: 'minmin' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]

  //state
  const [users, setUsers] = useState(usersData);

  //Añadir usuario
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  //Eliminar Usuarios

  const deleteUser = (id) =>{
    console.log(id)

    const arrayFiltrado = users.filter(user => user.id !== id);
    setUsers(arrayFiltrado);

  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">

        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser = {addUser}/>
        </div>

        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser}/> 
        </div>

      </div>
    </div>
  )
}

export default App;
