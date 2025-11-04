import React, { type ReactNode } from 'react';
import ReactDOM from 'react-dom';
import CloseIcon from '../../assets/close.svg?react';
import { SectionSeparator } from '../pages/home/components/SectionSeparator';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={`fixed inset-0 flex items-center justify-center z-50`}>
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div
        className={`bg-[#EDE2CF] rounded-t-3xl z-10 shadow-lg w-3xl`}
        data-aos="fade"
        data-aos-offset="200"
        data-aos-delay="0"
        data-aos-duration="300"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="px-8 pt-8">
          <div className="flex justify-between items-center">
            <p className="text-[#FF4020] font-bold text-xl 2xl:text-3xl">{title}</p>
            <CloseIcon className="w-3 h-3 2xl:w-4 2xl:h-4 cursor-pointer" onClick={onClose} />
          </div>
          <div className="p-4">{children}</div>
        </div>
        <SectionSeparator height={'2rem'} />
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement
  );
};
