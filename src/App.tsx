import './assets/styles/global.scss' 

import Input from './components/atoms/Input/Input';
import Button from './components/atoms/Button/Button';
import Title from './components/atoms/Title/Title';
import { TitleType } from './shared/styles/styles';
import { useState } from 'react';

const App = () => {
  
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <Title variant={TitleType.H2}>Terry's Todo</Title>
      <Input
        label="Add Item"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter text"
      />
      <Button label="Add" />


      <Button label="Up" />
      <Button label="Down"  />
      <Button label="Delete"  />

      <Button label="Clear List" />
    </div>
  );
};

export default App;
