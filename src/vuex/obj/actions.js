import obj from '../../api/obj'
import * as types from '../mutation-types'

// export const
// get all products
// it is func
// pass {dipatch}
export const getAllObjs = ({ dispatch }) => {
  // API call......
  // shop.getProducts
  // pass in a allback to api
  // then once has products
  // we dispatch products
  obj.getObjs(objs => {
    // test
    // console.log('--- getAllCars ---')
    // console.log(cars)
    // dspatch
    // type
    dispatch(types.RECEIVE_OBJS, objs)
  })
}
