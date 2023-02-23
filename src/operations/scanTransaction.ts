import { AxiosError } from 'axios';
import { api, getOriginDappUrl, setApiKey } from '../utils/api';
import { ScanTransactionArgs } from '../utils/types';

export async function scanTransaction(args: ScanTransactionArgs) {
  const {
    network,
    language,
    transaction,
    userAccount,
    dappUrl,
    chain,
    apiKey,
  } = args;

  try {
    setApiKey(apiKey);

    const response = await api.post(
      `${chain}/v0/${network}/scan/transaction`,
      {
        txObject: transaction,
        userAccount,
        metadata: { origin: getOriginDappUrl(dappUrl) },
      },
      {
        params: {
          language,
        },
      }
    );

    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      return err.response?.data;
    }
  }
}
