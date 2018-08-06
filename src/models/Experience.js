import moment from 'moment'

import { Activity } from '@/models/Activity'

export class Experience {
  constructor(data) {
    data = data || {}

    this.id = data.id
    this.owner = data.owner || ''
    this.is_private = data.is_private || true
    this.name = data.name || ''
    this.image_url = data.image_url || ''
    this.activities = (data.activities && data.activities.map(a => new Activity(a))) || []
    this.num_activities = data.num_activities || this.activities.length
    this.tags = data.tags || []
    this.collaborators = data.collaborators || []
    this.num_collaborators = data.num_collaborators || this.collaborators.length
    this.comments = data.comments || []
    this.num_comments = data.num_comments || this.comments.length
    this.created_at = moment(data.created_at)
    this.starts_at = this._getMinStartAt() || this.created_at
  }

  _getMinStartAt() {
    this.activities.reduce((min, activity) => {
      return activity.starts_at < min ? activity.starts_at : min
    }, 0)
  }
}
