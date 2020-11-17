const categoryModel = require('../models/categoryModel');

exports.index = (req, res, next) => {
    // Get cat from model
    const category = categoryModel.list();
    
    // Pass data to view to display list of cat
    res.render('category', {category});
};