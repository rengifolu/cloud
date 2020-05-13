const Video = require('../models/VideoModel')

//const Order = require('../models').Orders;

module.exports = {
  //esta funcion la manejamos como promesa
  async addVideo(req,res){
    try {
      const {
        name,
        size,
        description
      }=req.body

      const video = Video({
        name,
        size,
        description
      })

      const videoStored = await video.save()
      res.status(201).send({videoStored})
      //res.status(201).send({succes:true})
    } catch (error) {
      console.log(error)
    }
  }
};