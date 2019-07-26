import React, {useState} from 'react';

function Members(props){

    console.log('member props', props)
    // const [isEditing, setIsEditing] = useState(false);

    // const handleEdit = e => {
    //     setIsEditing(!isEditing)
    // }
    return (
        <div>
            <h2>Member:</h2>
            <p>{props.member.name}</p>
            <h2>Name: {props.member.name}</h2>
            <h2>Email: {props.member.email}</h2>
            <h2>Role: {props.member.role}</h2>

            <button /*onClick={handleEdit} */>Edit</button>
        </div>
    )
}

export default Members