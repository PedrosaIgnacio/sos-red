import type { FC } from 'react';
import type { Assistance } from '../data';

type AssistanceExtraDataPopupProps = {
  assistance: Assistance;
};

export const AssistanceExtraDataPopup: FC<AssistanceExtraDataPopupProps> = ({ assistance }) => {
  return (
    <div className="flex flex-col gap-2">
      <p>{assistance.modal.description}</p>
      <div className="flex flex-col gap-4">
        {assistance.modal.content.map(item => (
          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-xl">{item.title}</h3>
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
