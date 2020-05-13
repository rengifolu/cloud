const Image = require('../models/Image')

//const Order = require('../models').Orders;

module.exports = {
  //esta funcion la manejamos como promesa
  async addImage(req,res){
    try {
      const {
        name,
        size,
        description
      }=req.body

      const image = Image({
        name,
        size,
        description
      })

      const imagenStored = await image.save()
      res.status(201).send({imagenStored})
      //res.status(201).send({succes:true})
    } catch (error) {
      
    }
  },


  create(req, res) {
      const {name, email, phone, message} = req.body;
      return Image
      .create({
          name: name,
          phone: phone,
          email: email,
          message: message
      })
      .then((order) => res.status(201).send(order))
      .catch((error) => res.status(400).send(error));
  },

  list(req, res) {
    return Image
      .findAll({})
      .then((orders) => res.status(200).send(orders))
      .catch((error) => res.status(400).send(error));
  },

    single(req, res) {
        return Image
            .findOne({ where: { id: req.params.id } })
            .then((orders) => res.status(200).send(orders))
            .catch((error) => res.status(400).send(error));
    },

  update(req, res) {
      const {name, email, phone, message} = req.body;
    return Image
      .findOne({ where: { id: req.params.id } })
      .then(order => {
        if (!order) {
          return res.status(404).send({
            message: 'Order Not Found',
          });
        }
        return order
          .update({
              name: name,
              email: email,
              phone: phone,
              message: message
          })
          .then(() => res.status(200).send(order))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
    return Image
      .findOne({ where: { id: req.params.id } })
      .then(order => {
        if (!order) {
          return res.status(400).send({
            message: 'Order Not Found',
          });
        }
        return order
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};