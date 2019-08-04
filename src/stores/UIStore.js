import { action, observable, decorate } from 'mobx'

const _defaultInitialState = {
  isFetching: false,
  someData: { someKey: 'somevalue' },
  brands: [],
  models: {}
}

class UIStore {
  constructor(initialState) {
    this.setInitialState(initialState || _defaultInitialState)
  }

  setInitialState = (initialState) => {
    const { isFetching, someData, brands, models } = initialState

    this.isFetching = isFetching
    this.someData = someData
    this.brands = brands
    this.models = models
  }

  setIsFetching = (isFetching) => {
    this.isFetching = isFetching
  }

  updateSomeData = (key, value) => {
    this.someData[key] = value
  }

  updateList = (value) => {
    this.brands = value
  }

  updateModelList = (value) => {
    this.models = value
  }
  
}

export default decorate(UIStore, {
  isFetching: observable,
  someData: observable,
  brands: observable,
  models: observable,
  setInitialState: action,
  setIsFetching: action,
  updateSomeData: action,
  updateList: action,
  updateModelList: action
})
