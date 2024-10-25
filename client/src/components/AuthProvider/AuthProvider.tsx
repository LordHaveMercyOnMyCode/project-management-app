import { Authenticator } from "@aws-amplify/ui-react";
import React from "react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { formFields, components } from "./CustomForm/CustomForm";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID || "",
      userPoolClientId:
        process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID || "",
    },
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AuthProvider = ({ children }: any) => {
  return (
    <section className="flex h-screen w-full items-center justify-center">
      <Authenticator formFields={formFields} components={components}>
        {({ user }) =>
          user ? (
            <div className="h-full w-full">{children}</div>
          ) : (
            <div>
              <h1>Please sign in below: </h1>
            </div>
          )
        }
      </Authenticator>
    </section>
  );
};

export default AuthProvider;
