import React from 'react';
import user from '../images/user.png';
import deleteIcon from '../images/delete.jpg'; // Import your delete image here

const CardContact = (props) => {
    const { id, name, email, onDeleteContact } = props.contact;

    const handleDelete = () => {
        onDeleteContact(id);
    };

    return (
        <div>
            <hr /> {/* Horizontal line above the first contact */}
            <div className="item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img className="ui avatar image" src={user} alt="user" style={{ marginRight: '10px' }} />
                    <div className="content">
                        <div className="header">{name}</div>
                        <div>{email}</div>
                    </div>
                </div>
                <img src={deleteIcon} alt="Delete" style={{ cursor: 'pointer', width: '16px', height: '16px' }} onClick={handleDelete} />
            </div>
            <hr /> {/* Horizontal line between contacts */}
        </div>
    );
};

export default CardContact;
