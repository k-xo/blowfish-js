import { scanMessage } from './operations/scanMessage';
import { scanTransaction } from './operations/scanTransaction';
import { ScanMessageRequest, ScanTransactionRequest } from './utils/types';

export default class Blowfish {
  apiKey: string;
  environment: 'production' | 'sandbox';

  constructor(
    apiKey: string,
    environment: 'production' | 'sandbox' = 'production'
  ) {
    this.apiKey = apiKey;
    this.environment = environment;
  }

  public async scanTransaction(args: ScanTransactionRequest) {
    return await scanTransaction({
      ...args,
      apiKey: this.apiKey,
      environment: this.environment,
    });
  }

  public async scanMessage(args: ScanMessageRequest) {
    return await scanMessage({
      ...args,
      apiKey: this.apiKey,
      environment: this.environment,
    });
  }
}

export { Blowfish };
