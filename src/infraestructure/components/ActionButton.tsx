import type { CSSProperties, FC } from 'react';

type ActionButtonProps = {
  text: string;
  title: string;
  color: CSSProperties['color'];
  animationProps?: any;
  onClick: VoidFunction;
};

export const ActionButton: FC<ActionButtonProps> = ({ text, title, color, animationProps, onClick }) => {
  return (
    <button
      {...animationProps}
      onClick={onClick}
      className={`bg-[${color}] flex flex-1 flex-col justify-between items-center py-9 px-6 rounded-4xl gap-6 cursor-pointer hover:scale-101 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]`}
    >
      <span className="text-white font-bold text-2xl text-center 2xl:text-4xl max-w-[60%]">{title}</span>
      <span className="font-semibold text-base rounded-3xl p-4 bg-[#EDE2CF] text-center  2xl:text-2xl">{text}</span>
    </button>
  );
};
