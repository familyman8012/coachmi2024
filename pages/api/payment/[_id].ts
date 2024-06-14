import createHandler from "../middleware";
import Payment from "../models/payment";
import User from "../models/user";
import Product from "../models/product";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = createHandler();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const { _id } = req.query;

  const result = await Payment.find({ productId: _id });
  return res.status(200).send(result);
});

export default handler;
