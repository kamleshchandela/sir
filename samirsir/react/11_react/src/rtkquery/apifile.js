import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const postsApiSlice = createApi({
  reducerPath: 'shop',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/products' }) ,
  endpoints: (build) => ({
    getPosts: build.query({
      query: (num) => `/${num?num:""}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPostsQuery } = postsApiSlice