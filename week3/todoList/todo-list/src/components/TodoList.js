import Button  from '@mui/material/Button';
import { Checkbox } from '@mui/material';
import React from 'react';
import { textAlign } from '@mui/system';

const TodoList = (props) => {
  const {task, index, list, setList} = props;

  const onClick = () => {
    const newList = () => list.filter((task) => list.indexOf(task) !== index);

    setList(newList);
  };

  const onChange = e => {
    list[index].isComplete = !list[index].isComplete;
    setList([...list]);
  }

  return (
    <formgroup style={{
      display : 'flex', 
      alignItems : 'center', 
      justifyContent: 'center',
      background : 'tan',}}>
      <h4 style={{padding : 10}}>{task.name}</h4>
      <div>
        <label
          style={{ textDecorationLine: task.isComplete ? "line-through" : 'none' }}
          htmlFor="checkbox"
        >
          Completed?
        </label>
        <Checkbox
          onChange={onChange}
          type="checkbox"
          name=""
          color='primary'
          checked={task.isComplete}
        ></Checkbox>
        <Button onClick={onClick} variant='contained' color='primary'> Delete </Button>
      </div>
    </formgroup>
  );
}

export default TodoList;