// 스키마 모델화
'use strict';
import mongoose from 'mongoose';
import OrderSchema from './Schema/Order';
import ProductSchema from './Schema/Product';
import ShipmentSchema from './Schema/Shipment';

const Order = mongoose.model('Order', OrderSchema, 'OrderList');
const Product = mongoose.model('Product', ProductSchema, 'ProductList');
const Shipment = mongoose.model('Shipment', ShipmentSchema, 'ShipmentList');

export { Order, Product, Shipment };
