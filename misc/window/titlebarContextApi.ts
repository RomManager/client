import { TitlebarContextApi } from './titlebarContext'

type ElectronWindowType = { electron_window?: { titlebar: TitlebarContextApi } }

const context: TitlebarContextApi = (window as ElectronWindowType)
  .electron_window?.titlebar

export default context
