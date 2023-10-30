import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'
import { Button } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider, ThemeProvider } from 'next-themes';
import { NextUIProvider } from '@nextui-org/react';
// theme mode
import {useTheme} from "next-themes";
import { useSelector } from 'react-redux'
import { motion, AnimatePresence } from "framer-motion"
import ProfileScreen from './pages/ProfileScreen'
import ChatScreen from './pages/ChatScreen'
import ProfilePosts from './pages/ProfilePosts'
import ProfileLayout from './components/layout/ProfileLayout'
function App() {
  const [count, setCount] = useState(0);
  const {theme} = useSelector((state) => state.theme)

 
  return (
    <NextUIProvider>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <main
            className={`${theme}    transition-all duration-1000 text-foreground bg-primary-light dark:bg-primary-dark`}
          >
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/profile" element={<ProfileLayout ></ProfileLayout>}>
                <Route
                 index
                  element={<ProfileScreen></ProfileScreen>}
                ></Route>
                <Route
                  path="post"
                  element={<ProfilePosts></ProfilePosts>}
                ></Route>
              </Route>
              <Route path="/chat" element={<ChatScreen />} />
              <Route path="*" />
            </Routes>
          </main>
        </motion.div>
      </AnimatePresence>
    </NextUIProvider>
  );
}

export default App;
