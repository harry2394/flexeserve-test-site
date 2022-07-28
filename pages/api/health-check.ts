import { NextApiResponse } from "next";

export default (res: NextApiResponse): void => {
    res.status(200).json({ status: "OK" });
};
