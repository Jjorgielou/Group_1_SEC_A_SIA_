const express = require('express')
const router = express.Router()

let users = [
    {
        id: 1,
        name: 'Chrisha Oira',
        role: 'student'
    },
    {   
    id: 2,
    name: 'Ayessa Chavez',
    role: 'admin'
    }
]

router.get('/', (req, res) => {
    let result = users
    if (req.query.role){
        result = users.filter (user => user.role === req.query.role)
    }

res.status(200).json({
    success: true,
    data: result,
    meta: {
        timestamp: new Date().toISOString(),
        count: result.length
    }
})

router.get('/:id', (req, res) => {
    const user = users.find(
        user => user.id === Number(req.params.id)
    )

    if (!user) {
        return res.status(404).json({
            success: false,
            error: {
                code: 'NOT FOUND',
                message: 'User not found'
            }
        })
    }

    res.status(200).json({
    success: true,
    data: user
    })
})

router.post ('/', (req, res) => {
    const {name , role} = req.body
    if (!name || !role){
        return res.status(400).json({
            success: false,
            error: {
                code: 'BAD REQUEST',
                message: 'name and role required'
            }
        })
    }
})

const newUser = {
    id: Math.max(...user.map(user => user.id), 0) + 1,
    name: name,
    role: role
}

users.push(newUser)
res.status(201).json({
    success: true,
    data: newUsere
})

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id)
    users = users.filter (user => user.id !== id)
    res.status(204).send()
})

module.exports = router})
