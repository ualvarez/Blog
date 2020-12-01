import { StatusResponse } from './status';

export interface Response{
    status: StatusResponse;
    message: string;
    data: any;
}