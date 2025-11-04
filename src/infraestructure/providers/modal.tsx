import { createContext, useState, type FC, type ReactNode } from 'react';
import { Modal } from '../components/Modal';

interface ModalContextProps {
  showModal: (content: ReactNode, modalTitle: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextProps>({
  closeModal: () => {},
  showModal: () => {},
});

const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [content, setContent] = useState<ReactNode>(null);
  const [title, setTitle] = useState<string>('');

  const showModal = (modalContent: ReactNode, modalTitle: string) => {
    setContent(modalContent);
    setTitle(modalTitle);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setContent(null);
  };

  return (
    <ModalContext.Provider value={{ showModal, closeModal }}>
      {children}
      <Modal isOpen={isOpen} onClose={closeModal} title={title}>
        {content}
      </Modal>
    </ModalContext.Provider>
  );
};

export default ModalContext;
export { ModalProvider };
