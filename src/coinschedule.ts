import axios from "axios";

export interface ICoinScheduleResponse {
    status: number;
    error: string;
}

export class CoinSchedule {
    private apiHost = "https://develpers.coinschedule.com/api/v1";
    private axiosApiRequest = axios.create({
        baseURL: this.apiHost,
        headers: {
            "Content-Type": "application/json",
            "Authentication-Info": this.apiKey
        },
    });

    constructor(private apiKey: string) {
    }

    /**
     * Returns live ICO's within specified parameters.
     */
    public async getLive() {
        return await this.request("/getLive");
    }

    private async request(url: string): Promise<ICoinScheduleResponse> {
        const response = await axios.post(url);
        const data: ICoinScheduleResponse = response.data;
        return data;
        /* if (data.status !== 200) {
            throw new Error(`Error ${data.status}: ${data.error}`);
        } */
    }
}
