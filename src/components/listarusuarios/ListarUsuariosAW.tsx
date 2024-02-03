import { useEffect, useState } from 'react';
import { consultar } from '../../services/Service';

interface User {
  id: number;
  name: string;
}

function ListarUsuariosAW() {

  const [users, setUsers] = useState<User[]>([]);

  async function consultarUsuarios() {
    try {
      await consultar('/users', setUsers);
    } catch (error: any) {
        alert('Erro!')
      }
    }

  useEffect(() => {
    consultarUsuarios();
  }, []);

  return (
    <div className='lista'>
      <h2>Lista de usuários Async/Await</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListarUsuariosAW;