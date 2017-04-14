// axios
import axios from 'axios'

// export obj
export default {
  // cb is used to dispatch...
  getObjs (cb) {
    axios.get('http://indeedback.shopshop.space/job/list')
      .then((res) => {
        cb(res.data)
      })
  }
}
