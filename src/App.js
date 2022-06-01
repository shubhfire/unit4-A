import React from 'react';
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import {  ChakraProvider,theme} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider theme={theme}>

<Navbar/>
      <Sidebar/>
    </ChakraProvider>
  );
}

export default App;
