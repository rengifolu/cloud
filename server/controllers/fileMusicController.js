const FileMusic = require('../models/FileMusicModel')

//const Order = require('../models').Orders;

module.exports = {
  //esta funcion la manejamos como promesa
  async addFileMusic(req,res){
    try {
      const {
        name,
        size,
        description
      }=req.body

      const fileMusic = FileMusic({
        name,
        size,
        description
      })

      const fileMusicStored = await fileMusic.save()
      res.status(201).send({fileMusicStored})
      //res.status(201).send({succes:true})
    } catch (error) {
      
    }
  },
};