import { action, observable, decorate } from "mobx";

import api from "../services/api";

const _defaultInitialState = {
  activeTransport: "carros",

  marks: {
    data: [],
    loading: false,
    error: false,
    active: ""
  },

  models: {
    data: {},
    loading: false,
    error: false,
    active: ""
  },

  years: {
    data: [],
    loading: false,
    error: false,
    active: ""
  }
};

class Transport {
  constructor(initialState) {
    this.setInitialState(initialState || _defaultInitialState);
  }

  setInitialState = initialState => {
    const { activeTransport, marks, models, years } = initialState;

    this.activeTransport = activeTransport;
    this.marks = marks;
    this.models = models;
    this.years = years;
  };

  /**
   * Marks
   */
  loadMarks = async veiculo => {
    this.marks.loading = true;
    this.activeTransport = veiculo;

    await api
      .get(`/${veiculo}/marcas`)
      .then(this.loadMarksSuccess)
      .catch(this.loadMarksError);
  };

  loadMarksSuccess({ data }) {
    this.marks = { ...this.marks, data, error: false, loading: false };
  }

  loadMarksError(error) {
    this.marks = { ...this.marks, error: true, loading: false };
  }

  setActiveMark = mark => {
    this.marks.active = mark;
  };

  /**
   * Models
   */
  loadModels = async marca => {
    this.models.loading = true;
    this.setActiveMark(marca);

    await api
      .get(`/${this.activeTransport}/marcas/${marca}/modelos`)
      .then(this.loadModelsSuccess)
      .catch(this.loadModelsError);
  };

  loadModelsSuccess({ data }) {
    this.models = { ...this.models, data, error: false, loading: false };
  }

  loadModelsError(_error) {
    this.models = { ...this.models, error: true, loading: false };
  }

  setActiveModel = model => {
    this.models.active = model;
  };

  /**
   * Years
   */
  loadYears = async modelo => {
    this.years.loading = true;
    this.setActiveModel(modelo);

    await api
      .get(`/${this.activeTransport}/marcas/${this.marks.active}/modelos/${modelo}/anos`)
      .then(this.loadYearsSuccess)
      .catch(this.loadYearsError);
  };

  loadYearsSuccess({ data }) {
    this.years = { ...this.years, data, error: false, loading: false };
  }

  loadYearsError(_error) {
    this.years = { ...this.years, error: true, loading: false };
  }
}

export default decorate(Transport, {
  setInitialState: action,

  // marks
  marks: observable,
  loadMarks: action,
  loadMarksSuccess: action.bound,
  loadMarksError: action.bound,
  setActiveMark: action,

  // models
  models: observable,
  loadModels: action,
  loadModelsSuccess: action.bound,
  loadModelsError: action.bound,
  setActiveModel: action,

  // years
  years: observable,
  loadYears: action,
  loadYearsSuccess: action.bound,
  loadYearsError: action.bound,
});
