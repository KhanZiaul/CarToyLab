import React from 'react';
import { useLocation } from 'react-router-dom';
import useScroll from '../../useScroll/useScroll';
import useTitle from '../../useTitle/useTitle';


const Blog = () => {
    const location = useLocation()
    useScroll(location.pathname)
    useTitle('Blog')
    return (
        <div className='my-12 p-10 border-2 rounded-lg shadow-2xl'>

            <div className='my-10'>

                <h2 className="font-bold text-xl md:text-2xl">1 . What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p className="mt-3 px-4 text-justify"><span className="font-semibold text-xl mx-2">Answer :</span></p>

                <p className="mt-3 px-7 text-justify font-bold">Access Token :</p>

                <p className="mt-3 px-7 text-justify">An access token is a credential that represents the authorization granted to a client application to access specific resources on a server.It is typically a short-lived token with an expiration time.The access token is sent along with each API request to authenticate the client and authorize access to protected resources.</p>

                <p className="mt-3 px-7 text-justify font-bold">Refresh Token : </p>

                <p className="mt-3 px-7 text-justify">A refresh token is a long-lived credential used to obtain a new access token when the current one expires or becomes invalid.Unlike access tokens, refresh tokens have a longer expiration period.When an access token expires, the client can use the refresh token to request a new access token without requiring the user to re-authenticate.</p>

                <p className="mt-3 px-7 text-justify font-bold">Work Together : </p>

                <p className="mt-3 px-7 text-justify">Initially, when a user authenticates with a server, they receive both an access token and a refresh token.The client application uses the access token to access protected resources on the server.If the access token expires or becomes invalid, the client can use the refresh token to request a new access token from the server without requiring the user to re-authenticate.The server verifies the refresh token's validity, and if valid, issues a new access token to the client.</p>

                <p className="mt-3 px-7 text-justify font-bold">Store Them On The Client-side : </p>

                <p className="mt-3 px-7 text-justify">Access tokens should be stored securely on the client-side to prevent unauthorized access.Commonly, access tokens are stored in memory or in a secure storage mechanism, such as browser cookies with appropriate security measures.Refresh tokens, being long-lived and more sensitive, require additional security. They should be securely stored on the client-side, preferably in a backend server's storage or a secure storage mechanism ,if client-side storage is necessary.</p>

            </div>

            <hr />

            <div className='my-10'>

                <h2 className="font-bold text-xl md:text-2xl">2 . Compare SQL and NoSQL databases?</h2>
                <p className="mt-3 px-5 text-justify"><span className="font-semibold text-xl mx-2">Answer :</span></p>

                <p className="mt-3 px-7 text-justify">SQL databases are primarily called Relational Databases (RDBMS) , whereas NoSQL databases are primarily called non-relational or distributed databases</p>

                <p className="mt-3 px-7 text-justify">SQL databases define and manipulate data-based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice, especially for great complex queries. But from another side, it can be restrictive. SQL requires to use predefined schemas to determine the structure of data before work with it. Also, all of data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to whole system.
                </p>

                <p className="mt-3 px-7 text-justify">A NoSQL database has a dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based, or organized as a key-value store. This flexibility means that documents can be created without having a defined structure first. Also, each document can have its own unique structure. The syntax varies from database to database, and can add fields as go.</p>

            </div>
            <hr />

            <div className='my-10'>

                <h2 className="font-bold text-xl md:text-2xl">3 . What is express js? What is Nest JS ?</h2>

                <p className="mt-3 px-5 text-justify"><span className="font-semibold text-xl mx-2">Answer :</span></p>

                <p className="mt-3 px-7 text-justify font-bold">Express JS : </p>

                <p className="mt-3 px-7 text-justify">Express.js is a minimalistic and flexible web application framework for Node.js. It provides a simple and unopinionated approach to building web applications and APIs.It offers a range of features and middleware that make it easy to handle routing, handle HTTP requests and responses, manage sessions, and integrate with databases.Express.js has a lightweight core, allowing developers to add additional functionality using third-party middleware and modules</p>

                <p className="mt-3 px-7 text-justify font-bold">Node JS : </p>

                <p className="mt-3 px-7 text-justify">Nest.js is a progressive and opinionated web application framework for building efficient and scalable server-side applications with TypeScript.It provides a structured and modular architecture inspired by Angular, allowing developers to create scalable and maintainable applications.It includes built-in support for features like routing, middleware, data validation, dependency injection, and more, making it easier to build complex applications.Nest.js is designed to be versatile and supports various libraries and tools commonly used in the JavaScript and TypeScript ecosystems.</p>

            </div>
            <hr />

            <div className='my-10'>

                <h2 className="font-bold text-xl md:text-2xl">4 . What is MongoDB aggregate and how does it work?</h2>

                <p className="mt-3 px-5 text-justify"><span className="font-semibold text-xl mx-2">Answer :</span></p>

                <p className="mt-3 px-7 text-justify">In MongoDB, the aggregate operation is used to perform advanced data processing and analysis on collections of documents. It allows for complex data transformations, aggregations, and computations within the database.</p>

                <p className="mt-3 px-7 text-justify">Aggregate Operation Works In MongoDB : </p>

                <p className="mt-3 px-7 text-justify"> 1 . Pipeline Stages: The aggregate operation consists of one or more pipeline stages, each performing a specific data processing operation. Common stages include $match, $group, $project, $sort, $limit, $unwind, and more.</p>

                <p className="mt-3 px-7 text-justify"> 2 . Document Input: The input to the aggregate operation is typically a collection of documents in MongoDB.</p>

                <p className="mt-3 px-7 text-justify"> 3 . Data Processing: As the documents flow through the pipeline stages, each stage applies its specific operation to the data. For example, the $match stage filters documents based on specified criteria, the $group stage groups documents by specified fields and applies aggregation functions, the $project stage reshapes the documents by including or excluding specific fields, and so on.</p>

                <p className="mt-3 px-7 text-justify"> 4 . Chaining Stages: The stages are chained together, with the output of one stage becoming the input for the next stage. This allows for a sequence of transformations and aggregations to be performed on the data.</p>

                <p className="mt-3 px-7 text-justify"> 5 . Final Result: After the documents pass through all the stages in the pipeline, the final result is obtained. It can be a modified document, a set of aggregated values, or a reshaped data structure, depending on the operations performed in the pipeline.</p>

            </div>

        </div>
    );
};

export default Blog;