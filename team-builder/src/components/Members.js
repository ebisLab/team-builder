import React, {useState} from 'react';

function Members(props){
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = e => {
        setIsEditing(!isEditing)
    }
    return (
        <div>
            <h2>Member:</h2>
            <p>{props.member.name}</p>
            <h2>Name:</h2>
            <h2>Email:</h2>
            <h2>Role</h2>

            <button onClick={handleEdit}>Edit</button>
        </div>
    )
}

export default Members