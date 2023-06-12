import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req, res) => {
  try {
    await connectToDB();
    const prompts = await Prompt.find().populate("creator");

    return new Response(JSON.stringify(prompts), {
      status: 200,
      headers: {
        "content-type": "application/json",
        "cache-control":
          "private, no-cache, no-store, max-age=0, must-revalidate",
      },
    });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
