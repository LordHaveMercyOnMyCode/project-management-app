import {
  Button,
  Heading,
  Text,
  useAuthenticator,
  useTheme,
  View,
} from "@aws-amplify/ui-react";
import Image from "next/image";

export const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <div className="flex w-full items-center justify-center">
          <Image
            width={100}
            height={100}
            alt="Amplify logo"
            src="https://docs.amplify.aws/assets/logo-dark.svg"
          />
        </div>
      </View>
    );
  },

  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy; All Rights Reserved
        </Text>
      </View>
    );
  },

  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Sign in to your account
        </Heading>
      );
    },
    Footer() {
      const { toForgotPassword } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toForgotPassword}
            size="small"
            variation="link"
          >
            Reset Password
          </Button>
        </View>
      );
    },
  },

  SignUp: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Create a new account
        </Heading>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toSignIn}
            size="small"
            variation="link"
          >
            Back to Sign In
          </Button>
        </View>
      );
    },
  },
  ConfirmSignUp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  SetupTotp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmSignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ForgotPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>@support: akashdebnathwd@gmail.com</Text>;
    },
  },
  ConfirmResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
};

export const formFields = {
  signIn: {
    username: {
      placeholder: "Enter your email",
      isRequired: true,
    },
  },
  signUp: {
    username: {
      order: 1,
      label: "Username",
      placeholder: "Choose a username",
      isRequired: true,
    },
    email: {
      order: 2,
      label: "Email",
      placeholder: "Enter your email address",
      type: "email",
      isRequired: true,
    },
    password: {
      order: 3,
      label: "Password",
      placeholder: "Enter your Password",
      type: "password",
      isRequired: true,
    },
    confirm_password: {
      label: "Confirm Password",
      type: "password",
      order: 4,
    },
  },
  forceNewPassword: {
    password: {
      placeholder: "Enter your Password:",
    },
  },
  forgotPassword: {
    username: {
      placeholder: "Enter your email",
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      placeholder: "Enter your Confirmation Code",
      label: "New Label",
      isRequired: false,
    },
    confirm_password: {
      placeholder: "Enter your Password Please",
    },
  },
  confirmSignIn: {
    confirmation_code: {
      label: "Confirmation Code",
      placeholder: "Enter your Confirmation Code",
      isRequired: false,
    },
  },
};
