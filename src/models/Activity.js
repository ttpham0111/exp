import moment from 'moment'

const ActivityType = {
  DINING: 'Dining',
  OTHER: 'Other'
}
Object.freeze(ActivityType)
export { ActivityType }

const ActivitySource = {
  USER: 'u0ser',
  YELP: 'yelp',
  EVENTBRITE: 'eventbrite',
  GOOGLE: 'google'
}
Object.freeze(ActivitySource)
export { ActivitySource }

export class Activity {
  constructor(data) {
    data = data || {}

    this.name = data.name
    this.image_url = data.image_url
    this.starts_at = data.starts_at ? moment(data.starts_at) : null
    this.ends_at = data.ends_at ? moment(data.ends_at) : null
    this.source = data.source
    this.source_metadata = data.source_metadata
  }
}
