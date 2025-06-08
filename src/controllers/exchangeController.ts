import { Request, Response } from "express";
import { convertCurrencyService } from "../services/exchangeService.js";

export const convertCurrencyController = async (req: Request, res: Response) => {

    const { originalCurrency, convertedCurrency, originalAmount } = req.query;

    if (
        typeof originalCurrency !== 'string' || 
        typeof convertedCurrency !== 'string' || 
        isNaN(Number(originalAmount))
    ) {
        return res.status(400).json({ error: "Invalid query parameters" });
    }

    try {
        const result = await convertCurrencyService(
            originalCurrency,
            convertedCurrency,
            Number(originalAmount)
        );
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Failed to convert currency' });
    }
};