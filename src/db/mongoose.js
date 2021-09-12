const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,

}).then((success) => {
    console.log('Connected to db.')
}).catch((err) => {
    console.log(err)
})

const User = mongoose.model('User', {
    name: {
        type: String,
        trim: true
    },
    age: {
        type: Number
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain the word "password".')
            }
        }

    }
})


/* 
const me = new User({
    name: 'Kerem',
    age: 23,
    password: 'passds'
})

me.save().then(() => {
    console.log('Success')
}).catch((err) => {
    console.log('Failed.' + err)
}) */

const Task = mongoose.model('Task', {
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const washingDishes = new Task({
    description: 3,
    /*   completed: false */
})

washingDishes.save()