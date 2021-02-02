import moment from 'moment'

export default {
  filters: {
    dateFormat(time, format = 'MMM D, YYYY') {
      const data = moment(time).format(format)

      return data
    },
  },
}
