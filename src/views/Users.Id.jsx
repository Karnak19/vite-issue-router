import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';

const getUser = (id) => fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((r) => r.json());

function UsersId() {
  const { id } = useParams();

  const { data, isLoading } = useQuery(`user-${id}`, () => getUser(id));

  return (
    <div>
      {isLoading && !data ? (
        <p>Loading...</p>
      ) : (
        <div>
          {Object.values(data).map((val, i) => {
            if (val instanceof Object) {
              return <p key={i}>hey</p>;
            } else {
              return <p key={i}>{val}</p>;
            }
          })}
        </div>
      )}
    </div>
  );
}

export default UsersId;
