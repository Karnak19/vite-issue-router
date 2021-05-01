import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const getUsers = () => fetch('https://jsonplaceholder.typicode.com/users').then((r) => r.json());

function Users() {
  const { data, isLoading } = useQuery('users', getUsers);
  return (
    <div className="w-full">
      <h1 className="text-3xl text-steel-300">Users list page</h1>

      {isLoading && !data ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-3 gap-2 w-1/2 mx-auto">
          {data.map((user) => {
            return (
              <p key={user.id} className="border border-steel-400 p-2 hover:bg-steel-800 cursor-pointer">
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Users;
