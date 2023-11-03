import React, { useState } from 'react';
import { Dark, Light } from '@/styles/themes';
import { useTheme } from '@/context/contextTheme';

const Switcher: React.FC = () => {
  const { toggleTheme, currentTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Alterar Tema
      {currentTheme === 'Light' ? <Dark /> : <Light />}
    </button>
  );
};

export default Switcher;
