export default class BaseError extends Error {
    constructor(message) {
        super(message || 'Ooops, some error occurs =(.')
    }
}
