import React, { useContext } from 'react';
import styled from 'styled-components';
import Switch from 'react-switch'
import { Dark, Light } from '@/styles/themes';
import { useTheme } from '@/context/contextTheme';
import { theme } from '@/styles/themes/theme';
import { SwitchContainer } from './styles';

const Switcher: React.FC = () => {
  const { toggleTheme, currentTheme } = useTheme();

  return (
    <SwitchContainer>
      {currentTheme === 'Light' ? <Light /> : <Dark />}
      <Switch
        onClick={toggleTheme}
        className={'handleSwitcher'}
        onChange={() => toggleTheme()}
        checked={currentTheme === 'Light'}
        checkedIcon={false}
        uncheckedIcon={false}
        handleDiameter={15}
        width={39}
        height={26}
        onColor={theme.colors.white}
        offColor={theme.colors.darkGray}
        onHandleColor={theme.colors.secondaryColor}
        offHandleColor={theme.colors.mediumGray}
      />
    </SwitchContainer>
  );
};

export default Switcher;
