import { ScanTransactionRequest } from '../utils/types';
import Blowfish from '../index';

require('dotenv').config();

describe('Blowfish', () => {
  const blowfish = new Blowfish(`${process.env.API_KEY}`, 'sandbox');

  it('should scan a transaction', async () => {
    const tx_data = {
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
    };

    const response = await blowfish.scanTransaction(
      tx_data as ScanTransactionRequest
    );

    expect(response).toBeDefined();
    expect(response).toHaveProperty('action');
    expect(response).toHaveProperty('warnings');
    expect(response).toHaveProperty('simulationResults');
    expect(response.action).toEqual('WARN');
    expect(response.warnings.length).toEqual(1);
    expect(response.warnings[0].kind).toEqual(
      'TRANSFERRING_ERC20_TO_OWN_CONTRACT'
    );
    expect(response.warnings[0].message).toEqual(
      'You are transferring ER20 tokens directly to their own token contract. In most cases this will lead to you losing them forever.'
    );
    expect(response.warnings[0].severity).toEqual('WARNING');
    expect(response.simulationResults.error).toBe(null);
  });
});
