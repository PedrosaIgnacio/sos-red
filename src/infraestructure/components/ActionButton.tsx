import type { CSSProperties, FC, JSX } from 'react';

type ActionButtonProps = {
  text: string;
  title: string;
  icon?: JSX.Element;
  color: CSSProperties['color'];
  animationProps?: any;
  onClick: VoidFunction;
};

export const ActionButton: FC<ActionButtonProps> = ({ text, title, color, animationProps, onClick, icon }) => {
  return (
    <button
      {...animationProps}
      onClick={onClick}
      className={`bg-[${color}] flex flex-1 flex-col justify-between items-center py-9 px-6 rounded-4xl gap-6 cursor-pointer hover:scale-101 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]`}
    >
      <div className={`flex gap-2 items-center w-full justify-center`}>
        {icon && icon}
        <span className="text-white font-bold text-2xl text-center 2xl:text-4xl">{title}</span>
      </div>
      <div className={`flex-1 flex items-center justify-center w-full`}>
        <span className="font-semibold text-base rounded-3xl p-4 bg-[#EDE2CF] text-center 2xl:text-2xl w-full min-h-20 flex items-center justify-center">
          {text}
        </span>
      </div>
    </button>
  );
};
