import * as React from 'react';
import { Button } from '@mui/material';
import {useState} from 'react';
const PersonCard = (props) => {
    const [birthday, setBirthday] = useState(props.age)

    return (
        <div>
            <h1>{props.name}</h1>
            <p>Age: { birthday }</p>
            <p>Hair Color: {props.hairColor}</p>
            <Button variant='contained' onClick={(event) => setBirthday(birthday + 1)}>Birthday Button for {props.name}</Button>
        </div>
    )
}

export default PersonCard;