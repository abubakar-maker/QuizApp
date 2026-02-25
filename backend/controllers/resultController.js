import Result from "../models/resultModel.js";

export async function createResult(req, res) {
  try {
    if (!req.user || !req.user.id) {
      return res.status(400).json({
        success: false,
        message: "not authorized",
      });
    }

    const { title, technology, level, totalQuestions, correct, wrong } =
      req.body;

    if (
      !technology ||
      !level ||
      totalQuestions === undefined ||
      correct === undefined
    ) {
      return res.status(400).json({
        success: false,
        message: "Missing fields are required",
      });
    }

    // compute wrong if not provided
    const computedWrong =
      wrong !== undefined
        ? Number(wrong)
        : Math.max(0, Number(totalQuestions) - Number(correct));

    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Missing Title",
      });
    }

    const payload = {
      title: String(title).trim(),
      technology,
      level,
      totalQuestions: Number(totalQuestions),
      correct: Number(correct),
      wrong: computedWrong,
      user: req.user.id, // for a perticuler user
    };

    const created = await Result.create(payload);
    return res.status(201).json({
      success: true,
      message: "REsult Created",
      result: created,
    });
  } catch (err) {
    console.error("create result err", err);
    return res.status(500).json({
      success: false,
      message: "Server err",
    });
  }
}

// list the result
export async function listResult(req, res) {
  try {
    if (!req.user || !req.user.id) {
      return res.status(400).json({
        success: false,
        message: "not authorized",
      });
    }
    const { technology } = req.query;
    const query = { user: req.user.id };
    if (technology && technology.toLowerCase() !== "all") {
      query.technology = technology;
    }

    const item = await Result.find(query).sort({ createdAt: -1}).lean();
    return res.json({
        success: true,
        results:item,
      });



  } catch (err) {
    console.error("List result err", err);
    return res.status(500).json({
      success: false,
      message: "Server err",
    });
  }
}
