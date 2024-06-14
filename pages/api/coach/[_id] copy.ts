import createHandler from "../middleware";
import Coach from "../models/coach";
import type { NextApiRequest, NextApiResponse } from "next";

const coachRouter = createHandler();

coachRouter.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const { _id } = req.query;
  try {
    const coachs = await Coach.find({ creator: _id }).sort({
      createdAt: -1
    });
    return res.send(coachs);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

coachRouter.delete(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { _id } = req.query;
    const coachs = await Coach.findByIdAndDelete(_id);
    return res.send(coachs);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

export default coachRouter;
