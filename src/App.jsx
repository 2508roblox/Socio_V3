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
import PrivateRoute from './components/PrivateRoute'
import ProfileFriends from './pages/ProfileFriends'
import ExploreScreen from './pages/ExploreScreen'
import RelationshipScreen from './pages/RelationshipScreen'
import RequestScreen from './pages/RequestScreen'
import RequestingScreen from './pages/RequestingScreen'
import FriendsScreen from './pages/FriendsScreen'
import RelationShipLayout from './components/layout/RelationshipLayout'
import RegisterScreen from './pages/RegisterScreen'
import LoginScreen from './pages/LoginScreen'
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
            className={`${theme}   no-scrollbar  transition-all duration-1000 text-foreground bg-primary-light dark:bg-primary-dark`}
          >
         
            <Routes>
              <Route path="/" element={<PrivateRoute   element={HomeScreen} />} />
              <Route path="/profile/:userId" element={<PrivateRoute   element={ProfileLayout} />  }> 
              <Route index element={<ProfileScreen></ProfileScreen>}></Route>
              </Route>
              <Route path="/profile" element={<PrivateRoute   element={ProfileLayout} />  }>
                <Route index element={<ProfileScreen></ProfileScreen>}></Route>
                <Route
                  path="post"
                  element={<ProfilePosts></ProfilePosts>}
                ></Route>
                <Route
                  path="friends"
                  element={<ProfileFriends></ProfileFriends>}
                ></Route>
              </Route>
              <Route path="/chat" element={<ChatScreen />} />
              <Route path="/explore" element={<ExploreScreen />} />
              <Route path="/relationship" element={<RelationShipLayout />} >
                {/* All */}
              <Route index element={<RelationshipScreen></RelationshipScreen>}></Route>
                <Route
                  path="request"
                  element={<RequestScreen></RequestScreen>}
                ></Route>
                <Route
                  path="requesting"
                  element={<RequestingScreen></RequestingScreen>}
                ></Route>
                <Route
                  path="friends"
                  element={<FriendsScreen></FriendsScreen>}
                ></Route>
              

              </Route>
              <Route path="/register" element={<RegisterScreen></RegisterScreen>}/>
              <Route path="/login" element={<LoginScreen></LoginScreen>}/>

              <Route path="*" />
            </Routes>
          </main>
        </motion.div>
      </AnimatePresence>
    </NextUIProvider>
  );
}

export default App;
