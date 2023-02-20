'use strict';
import { Order, User, Product } from '../models/index.js';

const postOrder = async (req, res, next) => {
  try {
    const { user_id, product_id, w_count, c_count } = req.body;
    // const existedUser = await User.findById(order_id);

    const wineOrder = await Order.findOne({ type: 'wine' }).populate(
      'product_id',
      'type price'
    );
    const cheeseOrder = await Product.findOne({ type: 'cheese' });

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
  }
};

export default postOrder;
