import FilterComponet from './FilterComponet';
import Container from './Container';
import Content from './Content';
import ListComponent from './ListComponent';
import VehicleDetail from './VehicleDetail'

const messages = {
    erroRequeste: 'Falha na busca, tente novamente mais tarde!'
}

const vehicles = {
    ListComponent,
    VehicleDetail
}

export {
    vehicles,
    FilterComponet,
    Container,
    Content,
    messages
}