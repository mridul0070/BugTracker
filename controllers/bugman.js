const bugs = require('../models/bugs')




const addBug = async (req, res) =>{
    console.log('invoked')
    console.log(req.body)
    const bug = await bugs.create(req.body)
    return res.status(201).json({bug})
}


module.exports = {
    addBug,
}