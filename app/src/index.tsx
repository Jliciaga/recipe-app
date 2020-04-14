import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { render } from "react-dom";
// import { createGlobalStyle } from "styled-components";

import graphqlClient from "./api/graphql";
import Root from "./components/Root";

render(
    <ApolloProvider client={graphqlClient}>
        <Root/>
    </ApolloProvider>,
    document.getElementById("root")
);
