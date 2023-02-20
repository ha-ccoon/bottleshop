'use strict';
import { Order, User, Product } from '../models/index.js';

const postOrder = async (req, res, next) => {
  try {
    const { w_count, c_count } = req.body;
    // const existedUser = await User.findById(order_id);
    // Order.findById(id).populate('product_id').exec();
    // const cheeseOrder = await Product.findOne({ type: 'cheese' });
    const orderInfo = await Order.create({
      product_id,
      w_count,
      c_count,
    });

    orderInfo.save();
    console.log('saved in database');
    res.send('success');
  } catch (e) {
    console.log(e.message);
    res.status(500).json({
      error: err,
    });
  }
};

export default postOrder;
