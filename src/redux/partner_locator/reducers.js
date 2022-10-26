//import actions from './actions'

const items = [
  {
    id: 1, 
    company: 'Napole IT', 
    status: 'Preferred Partner',
    logo: 'https://img.netwrix.com/partner_logos/standard-logo-reseller-preferred.png', 
    address: '8223 Molson Way, Liverpool, New York, United States, 13090',
    website: 'https://example1.com',
    phone: '+777(315) 727-0303',
    countries_covered: ['US'], 
    states_covered: ["NY"]
  },
  {
    id: 2, 
    company: '123 srl', 
    status: 'MSP Partner',
    logo: 'https://img.netwrix.com/partner_logos/standard-logo-managed-service-provider-new.png', 
    address: 'Viale dell’Industria, 50,Jesi (AN), Italy, 60035',
    website: 'https://example1.com',
    phone: '+739 0731 288064',
    countries_covered: ['IT'], 
    states_covered: []
  },
  {
    id: 3, 
    company: 'Napole IT', 
    status: 'Preferred Partner',
    logo: 'https://img.netwrix.com/partner_logos/standard-logo-reseller-preferred.png', 
    address: '8223 Molson Way, Liverpool, New York, United States, 13090',
    website: 'https://example1.com',
    phone: '+777(315) 727-0303',
    countries_covered: ['US'], 
    states_covered: ["NY"]
  },
  {
    id: 4, 
    company: '123 srl', 
    status: 'MSP Partner',
    logo: 'https://img.netwrix.com/partner_logos/standard-logo-managed-service-provider-new.png', 
    address: 'Viale dell’Industria, 50,Jesi (AN), Italy, 60035',
    website: 'https://example1.com',
    phone: '+739 0731 288064',
    countries_covered: ['IT'], 
    states_covered: []
  },
]

const initialState = {
  items: items,
  loading: false,
  loaded: false,
}

export default function locatorReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
