import { RequestHeader } from './RequestHeader';
import { RequestBody } from './RequestBody';
export class Request implements Request {
    header: RequestHeader = new RequestHeader();
    body: RequestBody = new RequestBody();
}
