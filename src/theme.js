import { darken, lighten } from 'polished'

const brand = '#60c0ae'

const theme = {
  map: {
    land: '#deeaed',
    water: '#f9f9f9'
  },
  navbar: {
    background: '#ffffff',
    iconBackgroundFrom: darken(0.2, '#ffffff'),
    iconBackgroundTo: '#ffffff',
    iconBorder: '#ffffff',
    menuItem: '#999999',
    menuItemActive: lighten(0.1, '#999999'),
    menuItemSelected: brand,
    ringBackgroundFrom: brand,
    ringBackgroundTo: darken(0.2, brand)
  }
}

export default theme
