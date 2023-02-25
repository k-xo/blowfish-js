import { scanMessage } from './operations/scanMessage';
import { scanTransaction } from './operations/scanTransaction';
import { ScanTransactionRequest } from './utils/types';

export default class Blowfish {
  apiKey: string;
  environment: 'production' | 'sandbox' = 'production';

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

  public async scanMessage(args: any) {
    return await scanMessage(args);
  }
}

const blowfish = new Blowfish('API_KEY', 'sandbox');

async function main() {
  console.log(
    await blowfish.scanTransaction({
      transaction: {
        from: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
        to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        data: '0xa9059cbb000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000000de0b6b3a7640000',
        value: '0',
      },
      dappUrl: 'https://scamsite.com',
      network: 'mainnet',
      chain: 'ethereum',
      userAccount: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
    })
  );
}

main();
