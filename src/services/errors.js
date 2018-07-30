export class NoResultError {
  constructor(objectId) {
    this.objectId = objectId
    this.message = objectId + ' not found'
  }
}
