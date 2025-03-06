interface DividerProps {
  className?: string;
  width?: 'full' | 'half' | number;
  thickness?: number;
}

/*
<Divider width="half" className="mx-auto" /> for half width, centered
<Divider thickness={2} />  // 2px thick
<Divider thickness={5} />  // 5px thick
*/

const Divider = ({
  className = '',
  width = 'full',
  thickness = 1,
}: DividerProps) => {
  const getWidth = () => {
    if (typeof width === 'number') return `${width}px`;
    return width === 'full' ? 'w-full' : 'w-1/2';
  };

  return (
    <div
      className={`my-6 ${getWidth()} ${className} bg-gray-200`}
      style={{ height: `${thickness}px` }}
    />
  );
};

export default Divider; 