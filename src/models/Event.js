import moment from 'moment'

const EventType = {
  DINING: 'Dining',
  OTHER: 'Other'
}
Object.freeze(EventType)
export { EventType }

const EventSource = {
  USER: 'User',
  YELP: 'Yelp',
  EVENTBRITE: 'Eventbrite',
  GOOGLE: 'Google'
}
Object.freeze(EventSource)
export { EventSource }

export class Location {
  constructor(data) {
    this.address = data.address
    this.city = data.city
    this.state = data.state
    this.zipCode = data.zip_code
    this.country = data.country

    Object.freeze(this)
  }
}

export class Event {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.imageUrl = data.image_url
    this.location = new Location(data.location)
    this.startsAt = moment(data.starts_at)
    this.endsAt = moment(data.ends_at)
    this.source = data.source
    this.sourceMetadata = data.source_metadata

    Object.freeze(this.startsAt)
    Object.freeze(this.endsAt)
    Object.freeze(this.sourceMetadata)
    Object.freeze(this)
  }
}
