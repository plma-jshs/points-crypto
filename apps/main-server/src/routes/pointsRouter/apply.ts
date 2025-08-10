import { Router } from "express";
import { type Request, type Response } from "express";

const router = Router();

router.post("/", (req: Request, res: Response) => {
    res.send("Apply Points");
});

export default router;
