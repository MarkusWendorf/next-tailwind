import { NextApiRequest, NextApiResponse } from "next";

interface Response {
  age: number;
  name: string;
}

export default (req: NextApiRequest, res: NextApiResponse<Response>) => {
  res.status(200).json({ name: "John Doe", age: 45 });
};
