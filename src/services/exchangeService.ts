import axios from "axios"
// import dotenv from "dotenv";
// dotenv.config();

const API_KEY = "YOUR_API_KEY";
// const API_KEY = process.env.API_KEY;

interface ExchangeResponse {
    originalCurrency: string,
    convertedCurrency: string,
    originalAmount: number,
    conversionRate: number,
    convertedAmount: number
}

export const convertCurrencyService = async (
    originalCurrency: string,
    convertedCurrency: string,
    originalAmount: number
): Promise<ExchangeResponse> => {

    try {
        const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${originalCurrency}/${convertedCurrency}/${originalAmount}`;
        const res = await axios.get(url);

        const conversionRate = res.data.conversion_rate;
        const convertedAmount = res.data.conversion_result;

        return {
            originalCurrency,
            convertedCurrency,
            originalAmount,
            conversionRate,
            convertedAmount,
        };

    } catch (error: any) {
        console.error("Exchange API error: ", error.response?.data || error.message);
        throw new Error("Failed to convert currency")
    }

}