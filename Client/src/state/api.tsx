
import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: 'main',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.BASE_URL }),
    endpoints: (build) => ({
        getKpis: build.query<void,void>({
            query: (name) => "kpi/kpis/",
            providesTags:["Kpis"]
        }),
    }),
    tagTypes:["Kpis"],
    
});
export const {useGetKpisQuery}=api
//KPI : key performance indicators
