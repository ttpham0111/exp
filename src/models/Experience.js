export class Experience {
  constructor(data) {
    this.title = data.title
    this.image = data.image

    this._id = data.id
    this._events = data.events || []
    this._tags = data.tags || []
  }

  get id() {
    return this._id
  }

  get events() {
    return this._events.slice()
  }

  addEvent(event) {
    this._events.push(event)
  }

  get tags() {
    return this._tags.slice()
  }

  addTag(tag) {
    this._tag.push(tag)
  }
}
