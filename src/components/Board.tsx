import { Button } from './Button';
import type { Item } from '../utils/constant';

interface BoardProps {
  type: Item['type'];
  items: Item[];
  onSelectItem?: (item: Item) => void;
}

export const Board = ({ type, items, onSelectItem }: BoardProps) => {
  return (
    <div className="flex flex-col border border-gray-300 bg-white rounded-md shadow-md">
      <div className="bg-gray-200 text-gray-800 text-center border-b border-gray-300 font-semibold py-2 px-4">
        {type}
      </div>

      <div className="p-2 flex flex-col gap-2">
        {items.map((item) => (
          <Button
            key={item.name}
            label={item.name}
            onClick={() => onSelectItem?.(item)}
          />
        ))}
      </div>
    </div>
  );
};
