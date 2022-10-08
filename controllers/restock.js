const Restock = require('../models/Restock')
const Todo = require('../models/Todo')
const dayjs = require('dayjs');

module.exports = {
    getRestock: async (req,res)=>{
        console.log(req.user)
        try{
            const restockItems = await Restock.find({userId:req.user.id})
            res.render('restock.ejs', {
                restockItem: restockItems, 
                user: req.user,
            })
        }catch(err){
            console.log(err)
        }
    },
    // might need to change method name
    addRestock: async (req, res)=>{
        res.render('addRestock.ejs') // need to make own page for list adding/editing
    },
    // might need to change method name
    editRestock: async (req, res) => {
        try {
          const restockItem = await Restock.findById(req.params.id);
          res.render("editRestock.ejs", { restockItem: restockItem, user: req.user }); // make own page
        } catch (err) {
          console.log(err);
        }
    },
    // might need to change method name
    updateRestock: async (req, res) => {
        try {
          await Restock.findOneAndUpdate(
            { _id: req.params.id }, req.body
          );
          console.log('Updated Restock Item');
          res.redirect(`/restock`);
        } catch (err) {
          console.log(err);
        }
    },
    createRestock: async (req, res)=>{
        try{
            await Restock.create({
                brand: req.body.brand,
                description: req.body.description,
                quantity: req.body.quantity,
                store: req.body.store, 
                comments: req.body.comments,
                userId: req.user.id})
            console.log('Restock item has been added!')
            res.redirect('/restock')
        } catch(err){
            console.log(err)
        }
    },
    exportRestock: async (req, res) => {    
        try{
            const restockQuantity = (req.body.idealQuantity - req.body.quantity, 1)
            await Restock.create({
                brand: req.body.brand,
                description: req.body.description,
                quantity: restockQuantity,
                store: '', 
                comments: '',
                completed: false,
                userId: req.user.id})
            console.log('Backstock item added to Restock Shopping List')
            res.redirect('/restock') 
        } catch (err) {
            console.log(err)
        }
    },
    increaseRestock: async (req, res) => {
        try {
          await Restock.findOneAndUpdate(
            { _id: req.params.id },
            {
              $inc: { quantity: 1 },
            }
          );
          console.log("Quantity +1");
          res.redirect(`/restock/${req.params.id}`);
        } catch (err) {
          console.log(err);
        }
    },
    incrRestock: async (req, res) => {
        try {
          await Restock.findOneAndUpdate(
            { _id: req.params.id },
            {
              $inc: { quantity: 1 },
            }
          );
          console.log("Quantity +1");
          res.redirect('/restock');
        } catch (err) {
          console.log(err);
        }
    },
    decreaseRestock: async (req, res) => {
        try {
          const quantity = req.body.quantity
          await Restock.findOneAndUpdate(
            { _id: req.params.id },
            {
              $inc: { quantity: -1 },
            }
          );
          await Restock.findOneAndUpdate(
            { "_id": req.params.id, "quantity": { "$lt": 0 } },
            { "$set": { "quantity": 0 } }
          )
          console.log("Quantity -1");
          res.redirect(`/restock/${req.params.id}`);
        } catch (err) {
          console.log(err);
        }
    },
    decrRestock: async (req, res) => {
        try {
          await Restock.findOneAndUpdate(
            { _id: req.params.id },
            {
              $inc: { quantity: -1 },
            }
          );
          await Restock.findOneAndUpdate(
            { "_id": req.params.id, "quantity": { "$lt": 0 } },
            { "$set": { "quantity": 0 } }
          )

          console.log("Quantity -1");
          res.redirect('/restock');
        } catch (err) {
          console.log(err);
        }
    },
    deleteRestock: async (req, res) => {
        try {
          // Find item by id
          const post = await Restock.findById({ _id: req.params.id });
          // Delete item from db
          await Restock.remove({ _id: req.params.id });
          console.log("Deleted Restock item");
          res.redirect("/restock");
        } catch (err) {
          res.redirect("/restock");
        }
    }, 
};
  