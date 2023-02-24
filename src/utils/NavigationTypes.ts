import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
    SignIn: undefined;
    SignUp: undefined;
    ConfirmSignUp: {defaultEmail?: string} | undefined;
    ForgotPassword: undefined;
    Home: undefined;
  };

export type SignInProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;
export type SignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;
export type ConfirmSignUpProps = NativeStackScreenProps<RootStackParamList, 'ConfirmSignUp'>;
export type ForgotPasswordProps = NativeStackScreenProps<RootStackParamList, 'ForgotPassword'>;
export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

