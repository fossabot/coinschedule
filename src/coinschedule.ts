import axios from "axios";

export interface ICoinScheduleResponse {
    status: number;
    errors?: any[];
    output?: any;
    method: string;
    filters: any;
}

export interface ICoinScheduleDetailsParams {
    /**
     * ICO's Project ID
     */
    proj_id?: number;
    /**
     * ICO's event ID
     */
    event_id?: number;
}

export interface ICoinScheduleFilter {
    /**
     * Array of cat filters
     */
    cat: string[];
    /**
     * Array of plat filters
     */
    plat: string[];
}

export interface ICoinScheduleIco {
    EventID: string;
    EventName: string;
    EventStartDate: string;
    EventEndDate: string;
    ProjSymbol: string;
    EventProjID: string;
}

export interface ICoinScheduleIcoDetails {
    ProjID: string;
    ProjName: string;
    ProjSymbol: string;
    ProjDesc: string;
    ProjType: string;
    ProjSponsored: string;
    ProjLocation?: string;
    ProjAlgo: string;
    ProjTotalSupp: number;
    ProjPreMined: number;
    EventName: string;
    EventID: string;
    EventURL: string;
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
    public async getLive(params: ICoinScheduleFilter) {
        return await this.request("/getLive");
    }

    /**
     * Returns upcoming ICO's within specified parameters.
     */
    public async getUpcoming(params: ICoinScheduleFilter) {
        return await this.request("/getUpcoming");
    }

    /**
     * Returns an ICO's details based on parameters.
     */
    public async getDetails(params?: ICoinScheduleDetailsParams) {
        return await this.request("/getDetails");
    }

    /**
     * Returns all platform filters.
     */
    public async getCategories() {
        return await this.request("/getCategories");
    }

    /**
     * getPlatform
     */
    public async getPlatform() {
        return await this.request("/getPlatform");
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
