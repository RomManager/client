/*
 * Not fully impelmented yet, see https://github.com/guasam/electron-window for reference
 */

import React from 'react'
// import titlebarMenus from "../titlebarMenus";
import context from '../titlebarContextApi'
// import { WindowContext } from "./WindowFrame";

const Titlebar: React.FC = () => {
  const execTest = () => {
    context.exit()
  }

  return <div></div>
}

export default Titlebar
