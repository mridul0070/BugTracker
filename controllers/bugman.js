const bugs = require('../models/bugs')




const addBug = async (req, res) =>{
    console.log('invoked')
    console.log(req.body)
    const bug = await bugs.create(req.body)
    return res.status(201).json({bug})
}

const getBugs = async (req, res) =>{

    const allBugs = await bugs.find({})
    return res.status(200).json({allBugs})

}

const getoneBug = async (req,res)=>{
   

    const { id } = req.params
    const { name } = req.body
    // const singleBug = bugs.find((singleBug)=> singleBug.id === Number(id))
    // res.status(200)
    const allBugs = await bugs.find({})
    console.log(id)
    const bug = allBugs.find((bug)=> bug.bugId === String(id))
    if(!bug){
        return res
        .status(404)
        .json({success: false, msg: 'bug not found'})
    }
    return res.status(200).json({bug})
}

const editBug = async (req, res) =>{

 const {id: bugID} = req.params 
    const bug = await bugs.findOneAndUpdate({bugId: bugID}, req.body, {
        new: true,
        runValidators: false,
    }) //beware

}

module.exports = {
    addBug,
    getBugs,
    getoneBug,
    editBug,
}