import { configure } from 'mobx'
import UIStore from './UIStore'

export default class RootStore {
  constructor() {
    configure({ enforceActions: 'always' })
    this.uiStore = new UIStore()
  }
}
