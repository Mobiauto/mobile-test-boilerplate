import axios from 'axios';

const BASE_API = 'https://parallelum.com.br/fipe/api/v1/';

const endpoints = {
    byBrand: type => `${type}/marcas`,
    byModel: code => `/${code}/modelos`,
    byYear: code => `/${code}/anos`,
    byYearCode: code => `/${code}`,
};

const mobiauto = axios.create({
    baseURL: BASE_API,
    timeout: 60000,
    headers: { 'Content-Type': 'application/json' }
});

const apiService = {
  vehicles: {
    getBrands: (type) =>
      mobiauto.get(endpoints.byBrand(type)),
    getModels: (type, idBrand) =>
      mobiauto.get(`${endpoints.byBrand(type)}${endpoints.byModel(idBrand)}`),
    getModelsYears: (type, idBrand, idModel) =>
      mobiauto.get(`${endpoints.byBrand(type)}${endpoints.byModel(idBrand)}${endpoints.byYear(idModel)}`),
    getModelsYearsCode: (type, idBrand, idModel, yearCode) =>
      mobiauto.get(`${endpoints.byBrand(type)}${endpoints.byModel(idBrand)}${endpoints.byYear(idModel)}${endpoints.byYearCode(yearCode)}`)
  }
};

export default apiService;
