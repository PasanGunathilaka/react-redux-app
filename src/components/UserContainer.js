import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios";

import { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } from '../redux'


function UserContainer() {
    const dispatch = useDispatch()

    const userss = useSelector(state => state.user.users)


    useEffect(() => {
        dispatch(fetchUsersRequest)

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchUsersFailure(errorMsg))

            })
    }, [])

    return (
        <div>UserContainer
            {
                userss.map((todo) =>
                    <li key={todo.id}>
                        {todo.name}
                    </li>
                )}
        </div>
    )
}

export default UserContainer