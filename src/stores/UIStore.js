import { action, observable, decorate } from 'mobx'

const _defaultInitialState = {
  isFetching: false,
  someData: { someKey: 'somevalue' },
}

class UIStore {
  constructor(initialState) {
    this.setInitialState(initialState || _defaultInitialState)
  }

  setInitialState = (initialState) => {
    const { isFetching, someData } = initialState

    this.isFetching = isFetching
    this.someData = someData
  }

  setIsFetching = (isFetching) => {
    this.isFetching = isFetching
  }

  updateSomeData = (key, value) => {
    this.someData[key] = value
  }
}

export default decorate(UIStore, {
  isFetching: observable,
  someData: observable,
  setInitialState: action,
  setIsFetching: action,
  updateSomeData: action,
})
