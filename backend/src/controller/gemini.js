import ErrorHandler from "../utils/ErrorHandler.js";
import ErrorWrapper from "../utils/ErrorWrapper.js";
import {GoogleGenerativeAI} from "@google/generative-ai";

export const postGemini = ErrorWrapper(async(req, res, next) => {
    const {prompt} = req.body;
    
    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();


        res.status(200).json({
            text,
        });
   } catch (error) {
       throw new ErrorHandler(500, 'Serrrrrver Error');
   }
})