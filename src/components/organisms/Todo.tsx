
import { useContext, useState } from 'react';
import Title from '../atoms/Title/Title';
import Input from '../atoms/Input/Input';
import Button from '../atoms/Button/Button';
import { AlignItems, FlexDirection, TitleType } from '../../shared/styles/styles';
import { TodoList } from '../../shared/context/TodoContext';
import Flex from '../atoms/Flex/Flex';

const Todo = () => {

    const { list, addItem, deleteItem, moveItemUp, moveItemDown, modifyItem, clearList } = useContext(TodoList) || {};
  
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() && addItem) {
      addItem(inputValue);
      setInputValue('');
    }
  };

  return (
    <div>
      <Title variant={TitleType.H2}>Terry's Todo</Title>
      <Flex direction={FlexDirection.ROW} alignItems={AlignItems.CENTER}>
        <Input
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Add Item"
        />
        <Button label="Add" onClick={handleAddItem} />
      </Flex>


      <ul>
        {list ? list.map((item, index) => (
          <li key={index}>
            <input
              type="text"
              value={item}
              onChange={(e) => modifyItem?.(index, e.target.value)}
            />
            <Button label="Up" onClick={() => moveItemUp?.(index)} />
            <Button label="Down" onClick={() => moveItemDown?.(index)} />
            <Button label="Delete" onClick={() => deleteItem?.(index)} />
          </li>
        )) : null}
      </ul>

      <Button label="Clear List" onClick={clearList} />
    </div>
  );
};

export default Todo;
