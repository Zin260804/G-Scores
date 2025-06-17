import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/students';

export interface TopBlockAStudent {
    registrationNumber: string;
    math: number;
    physics: number;
    chemistry: number;
    totalScore: number;
}

export interface SubjectStat {
    gte8: number;
    gte6_lt8: number;
    gte4_lt6: number;
    lt4: number;
}

export interface StatisticsResponse {
    [subject: string]: SubjectStat;
}

export const getStudent  = async (registrationNumber :string) => {
    try {
        const response = await axios.get(`${REST_API_BASE_URL}/search/${registrationNumber}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching student:", error);
        throw error;
    }
};

export const getTopBlockAStudents = async (): Promise<TopBlockAStudent[]> => {
    try {
        const response = await axios.get(`${REST_API_BASE_URL}/top10/blockA`);
        return response.data;
    } catch (error) {
        console.error("Error fetching top block A students:", error);
        throw error;
    }
};

export const getSubjectStatistics = async (): Promise<StatisticsResponse> => {
    const response = await axios.get(`${REST_API_BASE_URL}/subjectCharts`);
    return response.data;
};

export const getTotalStudents = async (): Promise<number> => {
    try {
        const response = await axios.get(`${REST_API_BASE_URL}/total`);
        // nếu response trả về là { total: xxx }
        return response.data.total;
    } catch (error) {
        console.error("Error fetching total students:", error);
        throw error;
    }
};