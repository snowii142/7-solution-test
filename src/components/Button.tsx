import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, ...props }) => {
  return (
    <button
      className="bg-white cursor-pointer hover:bg-gray-100 text-gray-800 font-semibold py-2 border border-gray-300 rounded shadow active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 border-border bg-background hover:bg-muted hover:text-foreground h-11 gap-1.5 px-2.5"
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};
