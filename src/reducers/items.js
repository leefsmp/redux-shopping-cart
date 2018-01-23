import banana from '../resources/img/banana.jpg'
import orange from '../resources/img/orange.jpg'
import papaya from '../resources/img/papaya.jpg'
import apple from '../resources/img/apple.jpg'

const initialState = [
  {
    id: 'item-id-apple',
    thumbnail: apple,
    name: 'Apples',
    unitPrice: 0.25,
    discount: null,
  },
  {
    id: 'item-id-banana',
    thumbnail: banana,
    name: 'Bananas',
    unitPrice: 0.15,
    discount: null,
  },
  {
    id: 'item-id-orange',
    thumbnail: orange,
    name: 'Oranges',
    unitPrice: 0.30,
    discount: null,
  },
  {
    id: 'item-id-papaya',
    thumbnail: papaya,
    name: 'Papayas',
    unitPrice: 0.50,
    discount: 3,
  }
]

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}