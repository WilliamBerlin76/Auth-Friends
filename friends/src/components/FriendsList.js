import React, { useState, useEffect } from 'react';
import axios from 'axios'

import { axiosWithAuth } from '../utils/axiosWithAuth'
 
const FriendsList = () => {
    const [friends, setFriends] = useState({id: Date.now()});
    const [friendsList, setFriendsList] = useState([])

    const handleChanges = e => {
        setFriends({
            ...friends,
            [e.target.name]: e.target.value
            }
        )
        console.log(friends)
    }
    useEffect(() => {
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res);
            setFriendsList(res.data)
        })
        .catch(err => {
            console.log('data not coming', err)
        })
    }, [])
      

    const submit = e => {
        e.preventDefault()
        axiosWithAuth()
        .post('http://localhost:5000/api/friends', friends)
        .then(res => {
            console.log(res)
            setFriendsList(res.data)
        })
        .catch(err => {
            console.log('could not add friend', err)
        })
    }

    return(
        <>
            <h1>Friends List</h1>
            <form>
                <input
                    placeholder='Name'
                    type='text'
                    name='name'
                    value={friends.name}
                    onChange={handleChanges}
                />
                <input
                    placeholder='age'
                    type='text'
                    name='age'
                    value={friends.age}
                    onChange={handleChanges}
                />
                <input
                    placeholder='email'
                    type='text'
                    name='email'
                    value={friends.email}
                    onChange={handleChanges}
                />
                <button onClick={submit}>Add Friend </button>
            </form>
            {friendsList.map(item => {
                return(
                    <>
                    <h3>{item.name}</h3>
                    <p>{item.age}</p>
                    <p>{item.email}</p>
                    </>
                )
            })}

        </>
    )
};

export default FriendsList;