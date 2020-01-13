import { lighten } from 'polished'

const brand = '#60c0ae'

const theme = {
  map: {
    land: '#deeaed',
    water: '#f9f9f9'
  },
  navbar: {
    background: '#ffffff',
    menuItem: '#999999',
    menuItemActive: lighten(0.1, '#999999'),
    menuItemSelected: brand
  },
  status: {
    arrived: '#83d27e',
    cancelled: '#f0897e',
    customsHold: '#f0897e',
    inTransit: '#f0d892',
    rollOver: '#f0d892',
    transporterror: '#f0897e'
  }
}

export default theme
