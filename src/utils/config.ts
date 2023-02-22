//@ts-ignore
import { AWS_USER_POOL_ID, AWS_CLIENT_ID } from '@env';

export function initUserPool(){
    const poolData = {
        UserPoolId: AWS_USER_POOL_ID,
        ClientId:AWS_CLIENT_ID,
    };
    return poolData;
}