import React, { useState, useEffect } from 'react';


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
    
    const removeFriend = e => {
        
        axiosWithAuth()
        .delete(`http://localhost:5000/api/friends/${e.target.value}`)
        .then(res => {
            console.log(res);
            setFriendsList(res.data);
        })
        .catch(err => {
            console.log('could not remove friend', err)
        })
    
    }

    const submit = e => {
        e.preventDefault()
        axiosWithAuth()
        .post('http://localhost:5000/api/friends', friends)
        .then(res => {
            console.log(res)
            localStorage.setItem('friend', res.data)
            setFriendsList(res.data)
        })
        .catch(err => {
            console.log('could not add friend', err)
        })
    };

    

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
                    <div className='friend-card' key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{item.age}</p>
                        <p>{item.email}</p>
                        <button onClick={removeFriend} value={item.id} >Remove Friend</button>
                    </div>
                )
            })}

        </>
    )
};

export default FriendsList;