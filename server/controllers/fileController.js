const File = require('../models/FileModel')

//const Order = require('../models').Orders;

module.exports = {
  //esta funcion la manejamos como promesa
  async addFile(req,res){
    try {
      const {
        name,
        size,
        description
      }=req.body

      const file = File({
        name,
        size,
        description
      })

      const fileStored = await file.save()
      res.status(201).send({fileStored})
      //res.status(201).send({succes:true})
    } catch (error) {
      
    }
  },
};