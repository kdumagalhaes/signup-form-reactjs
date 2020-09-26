import React from 'react';
import { Reset } from './styles/reset';
import { ThemeProvider } from 'styled-components';
import Main from './styles/theme'

import TextCTA from './components/CTAs/TextCTA/TextCTA';
import SignUpForm from './components/Forms/SignUpForm/SignUpForm';

function App() {
  return (
    <ThemeProvider theme={Main}>
      <div className="app">
        <TextCTA />
        <SignUpForm />
        <Reset />
      </div>
    </ThemeProvider>
  );
}

export default App;
