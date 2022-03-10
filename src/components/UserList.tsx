import React, {FC, useEffect} from 'react';

import {useTypedSelector} from '../hooks/useTypeSelector';
import {fetchUser} from "../store/actionCreators/userActionCreatоr";
import {useActions} from "../hooks/useActions";

const UserList: FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.user);
    const {fetchUser} = useActions()
    useEffect(() => {
        fetchUser()
    }, []);

    if (loading) {
        return <h1>Идёт загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(user =>
                <div key={user.id}>{user.name}</div>
            )}
        </div>
    );
};

export default UserList;