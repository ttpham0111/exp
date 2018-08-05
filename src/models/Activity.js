import moment from 'moment'

const ActivityType = {
  DINING: 'Dining',
  OTHER: 'Other'
}
Object.freeze(ActivityType)
export { ActivityType }

const ActivitySource = {
  USER: 'User',
  YELP: 'Yelp',
  EVENTBRITE: 'Eventbrite',
  GOOGLE: 'Google'
}
Object.freeze(ActivitySource)
export { ActivitySource }

export class Activity {
  constructor(data) {
    this.name = data.name
    this.imageUrl = data.image_url
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
