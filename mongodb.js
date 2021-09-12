const {
    response
} = require('express')
const {
    MongoClient,
    ObjectId
} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

/*
const id = new ObjectId()
console.log(id)
*/

MongoClient.connect(connectionURL, {
    useNewUrlParser: true
}, (error, client) => {
    if (error) {
        return console.log(error)
    }
    console.log('Connected to database.')
    const db = client.db(databaseName)

    db.collection('users').deleteMany({
        age: 23
    })

})