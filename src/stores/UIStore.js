import { action, observable, decorate } from 'mobx'

const _defaultInitialState = {
  isFetching: false,
  someData: { someKey: 'somevalue' },
  brands: [],
  yearsModel: [],
  models: {},
  vehicle: {},
  filters: {
    type: 'caminhoes',
    brandCode: '',
    modelCode: '',
    yearCode: ''
  }
}

class UIStore {
  constructor(initialState) {
    this.setInitialState(initialState || _defaultInitialState)
  }

  setInitialState = (initialState) => {
    const { isFetching, someData, brands, models, filters, yearsModel, vehicle } = initialState

    this.isFetching = isFetching
    this.someData = someData
    this.brands = brands
    this.models = models
    this.filters = filters
    this.yearsModel = yearsModel
    this.vehicle = vehicle
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

  updateVehicle = (value) => {
    this.vehicle = value
  }

  updateFilter = (value) => {
    this.filters = { 
      ...this.filters,
      ...value
    }
  }

  updateYearsModelList = (value) => {
    this.yearsModel = value
  }
  
}

export default decorate(UIStore, {
  isFetching: observable,
  someData: observable,
  brands: observable,
  models: observable,
  filters: observable,
  yearsModel: observable,
  vehicle: observable,
  setInitialState: action,
  setIsFetching: action,
  updateSomeData: action,
  updateList: action,
  updateModelList: action,
  updateFilter: action,
  updateYearsModelList: action,
  updateVehicle: action
})
