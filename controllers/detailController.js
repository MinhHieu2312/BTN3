const detailModel = require('../models/detailModel');

exports.index = (req, res, next) => {
    // Get detail from model
    const detail = detailModel.list();
    
    // Pass data to view to display list of detail
    res.render('single-product', {detail});
};