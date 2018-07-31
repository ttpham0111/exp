export class NoResultError {
  constructor(objectId) {
    this.objectId = objectId
    this.message = objectId + ' not found'
  }
}

export class InvalidAuth {
  constructor() {
    this.message = 'Invalid auth'
  }
}
