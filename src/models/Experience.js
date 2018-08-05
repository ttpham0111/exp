import moment from 'moment'

import { Activity } from '@/models/Activity'

export class Experience {
  constructor(data) {
    this.id = data.id
    this.owner = data.owner || ''
    this.isPublic = data.isPublic || true
    this.name = data.name || ''
    this.imageUrl = data.image_url || ''
    this.activities = (data.activities && data.activities.map(a => Activity(a))) || []
    this.numActivities = data.num_activities || this.activities.length
    this.tags = data.tags || []
    this.collaborators = data.collaborators || []
    this.numCollaborators = data.num_collaborators || this.collaborators.length
    this.comments = data.comments || []
    this.numComments = data.num_comments || this.comments.length
    this.createdAt = moment(data.created_at)
    this.startsAt = this._getMinStartAt() || this.createdAt

    Object.freeze(this.startsAt)
    Object.freeze(this.comments)
    Object.freeze(this.collaborators)
    Object.freeze(this.tags)
    Object.freeze(this.activities)
    Object.freeze(this)
  }

  _getMinStartAt() {
    this.activities.reduce((min, activity) => {
      return activity.startsAt < min ? activity.startsAt : min
    }, 0)
  }
}
