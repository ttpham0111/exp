export class User {
  constructor(data) {
    data = data || {}

    this.id = data.uid || ''
    this.isAnonymous = data.isAnonymous !== false
    this.displayName = data.displayName || 'guest'
    this.email = data.email || ''
    this.emailVerified = data.emailVerified || false
    this.photoURL = data.photoURL || false
    this.providerData = data.providerData || {}

    Object.freeze(this.providerData)
    Object.freeze(this)
  }
}
