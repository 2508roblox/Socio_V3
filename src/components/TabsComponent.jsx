import { Tab, Tabs } from '@nextui-org/react'
import React from 'react'
import { UilEstate } from '@iconscout/react-unicons'
import { UilCompass } from '@iconscout/react-unicons'
import { UilHipchat } from '@iconscout/react-unicons'
import { UilUsersAlt } from '@iconscout/react-unicons'
import { UilAngleDown } from '@iconscout/react-unicons'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
const TabsComponent = () => {
    let {pathname: location} = useLocation();
    const {theme} = useSelector((state) => state.theme)
    const navigate = useNavigate();
   
    const activeTab = ( ) => {
      console.log(location)
      if (location == '/') {
        return 'home'
      }else if (location == '/chat') {
        return 'chat'

      }else  if (location == '/relationship') {
        return 'relationship'
      }else {
        return 'explore'
      }
    }
    const navigator = ( tab ) => {
      console.log(tab)
      if (tab == 'home') {
        navigate('/')
      }else if (tab == 'chat') {
               navigate('/chat')


      }else  if (tab == 'relationship') {
               navigate('/relationship')

      }else {
              navigate('/explore')

      }
    }
  return (
    <Tabs
        onSelectionChange={ (e) =>  navigator(e)}
        defaultSelectedKey={() => activeTab()}
          aria-label="Options"
          color={`primary`}
          className={`${theme} flex justify-center gap-10 bg-transparent `}
          variant="light"
        >
          <Tab
            className="dark:bg-transparent border-none "
            key="home"
            title={
              <Link to={"/"}>
                <div className="flex items-center space-x-2  rounded-full">
                  <UilEstate size={23} className="opacity-70" />
                </div>
              </Link>
            }
          />
          <Tab
            
            className="dark:bg-transparent"
            key="explore"
            title={
              <Link to={"/explore"}>
                <div className="flex items-center space-x-2  ">
                  <UilCompass size={23} className="opacity-70" />
                </div>
              </Link>
            }
          />
          <Tab
            className="dark:bg-transparent"
            key="chat"
            title={
              <Link to={"/chat"}>
                <div className="flex items-center space-x-2   ">
                  <UilHipchat size={23} className="opacity-70" />
                </div>
              </Link>
            }
          />
          <Tab
            className="dark:bg-transparent"
            key="relationship"
            title={
              <Link to={"/relationship"}>
                <div className="flex items-center space-x-2  ">
                  <UilUsersAlt size={23} className="opacity-70" />
                </div>
              </Link>
            }
          />
        </Tabs>
  )
}

export default TabsComponent