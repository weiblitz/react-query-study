# 📡 API Layer

### Use a Single Instance of the API Client

When your application interacts with either RESTful or GraphQL APIs, it is beneficial to use a single instance of the API client that has been pre-configured and can be reused throughout the application. For example, you can create a single API client instance using the native fetch API or libraries such as [axios](https://github.com/axios/axios), [graphql-request](https://github.com/prisma-labs/graphql-request), or [apollo-client](https://www.apollographql.com/docs/react/) with predefined configuration settings.


### Define and Export Request Declarations

Rather than declaring API requests on the fly, it is recommended to define and export them separately.

Declaring API requests in a structured manner can help maintain a clean and organized codebase as everything is colocated.
Every API request declaration should consist of:

- Types and validation schemas for the request and response data
- A fetcher function that calls an endpoint, using the API client instance
- A hook that consumes the fetcher function that is built on top of libraries such as [react-query](https://tanstack.com/query), [swr](https://swr.vercel.app/), [apollo-client](https://www.apollographql.com/docs/react/), [urql](https://formidable.com/open-source/urql/), etc. to manage the data fetching and caching logic.

This approach simplifies the tracking of defined endpoints available in the application. Additionally, typing the responses and inferring them further down the application enhances application type safety.

### References
[bulletproof-react](https://github.com/alan2207/bulletproof-react/blob/master/docs/api-layer.md)
[Separate API Layers In React Apps](https://profy.dev/article/react-architecture-api-layer)
[Tanstack react query architecture](https://www.reddit.com/r/reactjs/comments/18z3nsi/tanstack_react_query_architecture/)