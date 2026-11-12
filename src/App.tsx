import { useEffect, useRef, useState } from 'react';

import { Button } from './components/Button';
import { Board } from './components/Board';

import { initialItems, type Item } from './utils/constant';

import './App.css';
const RETURN_TIMEOUT = 5000;
const types = ['Fruit', 'Vegetable'];

function App() {
  const [list, setList] = useState(initialItems);
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);

  const timers = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  useEffect(() => {
    const pending = timers.current;
    return () => Object.values(pending).forEach(clearTimeout);
  }, []);

  const handleReturnItem = (item: Item) => {
    clearTimeout(timers.current[item.name]);
    delete timers.current[item.name];

    setSelectedItems((prev) => prev.filter((i) => i.name !== item.name));
    setList((prev) => [...prev, item]);
  };

  const handleSelectItem = (item: Item) => {
    setList((prev) => prev.filter((i) => i.name !== item.name));
    setSelectedItems((prev) => [...prev, item]);

    const timeoutId = setTimeout(() => handleReturnItem(item), RETURN_TIMEOUT);
    timers.current[item.name] = timeoutId;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <section className="container h-150 mx-auto my-28 max-w-2xl grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-2">
          {list.map((item) => (
            <Button
              key={item.name}
              onClick={() => handleSelectItem(item)}
              label={item.name}
            />
          ))}
        </div>

        {types.map((type, index) => (
          <Board
            key={index}
            type={type as 'Fruit' | 'Vegetable'}
            items={selectedItems.filter((i) => i.type === type)}
            onSelectItem={handleReturnItem}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
