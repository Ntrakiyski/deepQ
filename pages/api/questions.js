// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { data } from "../../components/data";

export default function handler(req, res) {
  res.status(200).json(data);
  // if (req.method === "POST") {
  //   res.status(201).send({ ...data, body });
  //   return;
  // }
}
