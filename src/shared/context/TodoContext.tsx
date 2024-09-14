import { createContext, useState, ReactNode } from 'react';

interface TodoContextType {
  list: string[];
  addItem: (text: string) => void;
  deleteItem: (index: number) => void;
  moveItemUp: (index: number) => void;
  moveItemDown: (index: number) => void;
  modifyItem: (index: number, newText: string) => void;
  clearList: () => void;
}

export const TodoList = createContext<TodoContextType | undefined>(undefined);

interface TodoProviderProps {
    children: ReactNode;
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [list, setList] = useState<string[]>([]);

  const addItem = (text: string) => {
    setList((prevList) => [...prevList, text]);
  };

  const deleteItem = (index: number) => {
    setList((prevList) => prevList.filter((_, i) => i !== index));
  };

  const moveItemUp = (index: number) => {
    if (index > 0) {
      setList((prevList) => {
        const newList = [...prevList];
        [newList[index - 1], newList[index]] = [newList[index], newList[index - 1]];
        return newList;
      });
    }
  };

  const moveItemDown = (index: number) => {
    if (index < list.length - 1) {
      setList((prevList) => {
        const newList = [...prevList];
        [newList[index], newList[index + 1]] = [newList[index + 1], newList[index]];
        return newList;
      });
    }
  };

  const modifyItem = (index: number, newText: string) => {
    setList((prevList) => {
      const newList = [...prevList];
      newList[index] = newText;
      return newList;
    });
  };

  const clearList = () => {
    setList([]);
  };

  const todoValue = {
    list,
    addItem,
    deleteItem,
    moveItemUp,
    moveItemDown,
    modifyItem,
    clearList,
  }

  return (
    <TodoList.Provider value={todoValue}>
      {children}
    </TodoList.Provider>
  );
};
