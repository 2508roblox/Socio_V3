import React, { useState } from "react";
import { UilSmile } from "@iconscout/react-unicons";
import {Tabs, Tab, Button, Switch, Image} from "@nextui-org/react";
import { UilUser } from '@iconscout/react-unicons'
import { UilImageEdit } from '@iconscout/react-unicons'
import { UilNotebooks } from '@iconscout/react-unicons'
import { UilUsersAlt } from '@iconscout/react-unicons'
import { UilImages } from '@iconscout/react-unicons'
import { UilEnvelopeEdit } from '@iconscout/react-unicons'
import { UilBookmarkFull } from '@iconscout/react-unicons'
import { UilApps } from '@iconscout/react-unicons'
import { UilLamp } from '@iconscout/react-unicons'
import { UilWrench } from '@iconscout/react-unicons'
import { UilSlidersVAlt } from '@iconscout/react-unicons'
import { UilSignout } from '@iconscout/react-unicons'
import {Listbox, ListboxItem, cn} from "@nextui-org/react";
import { NavLink, Outlet } from "react-router-dom";
import avatar from "../../assets/imgs/avatar.avif";
import { UilCameraPlus } from '@iconscout/react-unicons'
import { UilEdit } from '@iconscout/react-unicons'
import { UilImageUpload } from '@iconscout/react-unicons'

import { useDispatch, useSelector } from 'react-redux';
import { toggleMode } from '../../services/slices/themeSlice';
import { UilDirection } from '@iconscout/react-unicons'
import Header from "../Header";

const RelationShipLayout = () => {
  return (
    <div className="bg-primary-light  transition-all duration-1000 dark:bg-primary-dark w-full min-h-screen px-6 pt-3">
    <Header></Header>
    {<Outlet />}
    </div>
  )
}

export default RelationShipLayout