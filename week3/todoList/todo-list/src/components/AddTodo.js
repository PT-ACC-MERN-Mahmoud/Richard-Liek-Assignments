import { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import TableCell from '@mui/material';
const AddTodo = (props) => {
  const {list, setList} = props;

  const [input, setInput] = useState("");

  const onChange = e => {
    setInput(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    let task = {
      name: input,
      isComplete: false,
    };

    setList([...list, task]);
    e.target.value = "";
  }

  return (
    <form onSubmit={onSubmit} style={{padding : 10,}}>
      <TextField onChange={onChange} label='Add Todo' id='margin-dense' size='small' name="task" value={input} />
      <Button onClick={onSubmit} variant='contained' size='normal' alignItem='center' color='primary'>Sumbit!</Button>
    </form>
  );
}

export default AddTodo;