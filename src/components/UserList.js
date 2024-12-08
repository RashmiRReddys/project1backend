import React from 'react';

const UserList = ({ users }) => (
    <ul>
        {users.map((user) => (
            <li key={user.id}>{user.name} ({user.role})</li>
        ))}
    </ul>
);

export default UserList;
