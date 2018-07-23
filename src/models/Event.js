const EventType = {
  DINING: 'Dining',
  OTHER: 'Other'
}
Object.freeze(EventType)
export { EventType }

export class Event {
  constructor(data) {
    this.name = data.name
    this.image = data.image

    this._id = data.id
    this._type = data.type
  }

  get id() {
    return this._id
  }

  get type() {
    return this._type
  }
}
