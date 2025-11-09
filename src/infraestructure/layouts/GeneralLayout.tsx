import type { FC, JSX } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
type GeneralLayoutProps = {
  children: JSX.Element;
};

export const GeneralLayout: FC<GeneralLayoutProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex flex-col relative">
      <Navbar />
      <div className="min-h-[calc(100dvh-5rem)] flex flex-col">{children}</div>
      <Footer />
    </div>
  );
};
