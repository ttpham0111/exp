import moment from 'moment'

export class Experience {
  constructor(data) {
    this.id = data.id
    this.owner = data.owner || ''
    this.isPublic = data.isPublic || true
    this.name = data.name || ''
    this.imageUrl = data.image_url || ''
    this.events = data.events || []
    this.numEvents = data.num_events || this.events.length
    this.rating = data.rating || 0
    this.tags = data.tags || []
    this.collaborators = data.collaborators || []
    this.numCollaborators = data.num_collaborators || this.collaborators.length
    this.comments = data.comments || []
    this.numComments = data.num_comments || this.comments.length
    this.startsAt = moment(data.starts_at)

    Object.freeze(this.startsAt)
    Object.freeze(this.comments)
    Object.freeze(this.collaborators)
    Object.freeze(this.tags)
    Object.freeze(this.events)
    Object.freeze(this)
  }
}
