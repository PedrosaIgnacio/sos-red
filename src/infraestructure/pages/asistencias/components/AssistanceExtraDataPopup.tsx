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
        <p>Incluye: </p>
        {assistance.modal.content.map(item => (
          <div className="flex flex-col gap-2 pl-8">
            <h3 className="list-item font-medium text-xs">{item.title}</h3>
            {/* <span>{item.description}</span> */}
          </div>
        ))}
        <span>{assistance.modal.footer}</span>
      </div>
    </div>
  );
};
