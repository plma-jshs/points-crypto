import { Router } from "express";

import history from "./history";
import view from "./view";
import apply from "./apply";

const router = Router();

router.use("/history", history);
router.use("/view", view);
router.use("/apply", apply);

export default router;
