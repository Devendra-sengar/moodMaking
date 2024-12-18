import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = `${process.env.REACT_APP_PORT}/api/v1/user/`;

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  credentials: 'include', 
  prepareHeaders: (headers) => {
    return headers;
  },
});

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  tagTypes: ['user'],
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (userData) => ({ 
        url: '/signup',
        method: 'POST',
        body: userData,
      }),
      invalidatesTags:['user']

    }),

    varifyemailid: builder.mutation({
      query: (code) => ({ 
        url: '/varify-email',
        method: 'POST',
        body: code,
      }),
      invalidatesTags:['user']

    }),

    cheak_auth: builder.query({
      query: () => ({  
        url: '/cheak-auth',
        method: 'GET',
      }),
      providesTags: ['user']
    }),
    
    login: builder.mutation({
      query: (formData) => ({ 
        url: '/login',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags:['user']
    }),


    logout: builder.mutation({
      query: () => ({ 
        url: '/logout',
        method: 'POST',
        // body: userData,
      }),
      invalidatesTags:['user']

    }),


    changepassword: builder.mutation({
      query: (userData) => ({ 
        url: '/reset-password',
        method: 'POST',
        body: userData,
      }),
    }),
    
    conformpassword: builder.mutation({
      query: ({ token, ...userData }) => ({
        url: `/reset-password/${token}`,
        method: 'POST',
        body: userData,
      }),
      invalidatesTags:['user']

    }),
    
  }),
});

export const { 
  useSignupMutation, 
  useVarifyemailidMutation, 
  useCheak_authQuery, 
  useLoginMutation,
  useLogoutMutation,
  useChangepasswordMutation,
  useConformpasswordMutation,
} = authApi;
