import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/home/HomePage';
import { GeneralLayout } from '../layouts/GeneralLayout';
import type { FC, JSX } from 'react';
import { AsistenciasPage } from '../pages/asistencias/AsistenciasPage';
import { NovedadesPage } from '../pages/novedades/NovedadesPage';
import { ContactanosPage } from '../pages/contactanos/ContactanosPage';
import { LineaDirectaPage } from '../pages/linea-directa/LineaDirectaPage';
import { SignaturePage } from '../pages/signature/SignaturePage';
type WithLayoutProps = {
  component: JSX.Element;
};

const WithLayout: FC<WithLayoutProps> = ({ component }) => {
  return <GeneralLayout>{component}</GeneralLayout>;
};

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WithLayout component={<HomePage />} />} />
        <Route path="/asistencias" element={<WithLayout component={<AsistenciasPage />} />} />
        <Route path="/novedades" element={<WithLayout component={<NovedadesPage />} />} />
        <Route path="/contactanos" element={<WithLayout component={<ContactanosPage />} />} />
        <Route path="/linea-directa" element={<WithLayout component={<LineaDirectaPage />} />} />
        <Route path="/firma-sos" element={<SignaturePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
