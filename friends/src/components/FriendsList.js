import React, { useState, useEffect } from 'react';
import axios from 'axios'



const FriendsList = () => {
    const [friends, setFriends] = useState({id: Date.now()});

    const handleChanges = e => {
        setFriends({
            ...friends,
            [e.target.name]: e.target.value
            }
        )
        console.log(friends)
    }
    useEffect(() => {
        axios
        .get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log('data not coming', err)
        })
        }
    )

    const submit = e => {
        axios
        .post('http://localhost:5000/api/friends', friends)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log('could not add friend', err)
        })
    }

    return(
        <>
            <h1>Friends List</h1>
            <form onSubmit={submit}>
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
                <button>Add Friend </button>
            </form>

        </>
    )
};

export default FriendsList;