import yelp from 'yelp-fusion'

class EventService {
  constructor() {
    const API_KEY = process.env.YELP_API_KEY
    this._client = yelp.client(API_KEY)
  }

  autocomplete(text) {
    return this._client.autocomplete({text: text})
      .then(response => {
        console.log(response.jsonBody)
        return response.jsonBody
      }) // TODO: handle
  }
}

export default new EventService()
