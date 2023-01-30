import React from 'react';
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';
import PageTitle from './components/PageTitle';
import style from './styles/modules/app.module.scss';

function App() {
  return (
    <div className="container">
      <PageTitle> TO DO List</PageTitle>
      <div className={style.app__wrapper}>
        <AppHeader />
        <AppContent />
      </div>
    </div>
  );
}

export default App;
