import { NextApiRequest, NextApiResponse } from "next";

const SHEET_ID: string = "1JJePQcZowP0vOfdL5s6-yjHtxpKL-ghEYke4_pxL8-s";
const URL: string = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}?key=${process.env.GOOGLE_API_KEY}&fields=sheets`;

export default async (_req: NextApiRequest, res: NextApiResponse) => {
    if (!process.env.GOOGLE_API_KEY) {
        throw new Error("GOOGLE_API_KEY is not defined");
    }

    console.log(`Fetching ${URL}`);

    await fetch(URL)
        .then(response => response.json())
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err));
};
