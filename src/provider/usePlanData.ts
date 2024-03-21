import {createContext} from "react";

export interface PlanData {
    title: string,
    price: {
        monthly: number,
        yearly: number,
    },
    description: [string, string, string],
    isCta: boolean
}

const planData: PlanData[] = [
    {
        title: "basic",
        price: {
            monthly: 19.99,
            yearly: 199.99
        },
        description: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
        isCta: false,
    },
    {
        title: "professional",
        price: {
            monthly: 24.99,
            yearly: 249.99
        },
        description: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
        isCta: true
    },
    {
        title: "Master",
        price: {
            monthly: 39.99,
            yearly: 399.99
        },
        description: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
        isCta: false
    },
];

export const PlanContext = createContext<PlanData[]>(planData)