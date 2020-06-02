import React from 'react';

function Tweet({name, message, likes}) {
    return(
        <div>
            <h3>{name}</h3>
            <p>{message}</p>
            <h3>Total of likes: {likes}</h3>
        </div>
    );
}

export default Tweet;