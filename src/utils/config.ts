//@ts-ignore
import { AWS_USER_POOL_ID, AWS_CLIENT_ID } from '@env';
import { CognitoUserPool } from 'amazon-cognito-identity-js';

export function initUserPool(){
    const poolData = {
        UserPoolId: AWS_USER_POOL_ID,
        ClientId:AWS_CLIENT_ID,
    };
    const userPool = new CognitoUserPool(poolData);
    return userPool;
}