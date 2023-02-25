import axios, { AxiosError } from 'axios';
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
    environment,
  } = args;

  try {
    setApiKey(apiKey);
    let response;

    if (environment === 'production') {
      response = await api.post(
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
    } else {
      response = await axios.post(
        `https://free.api.blowfish.xyz/${chain}/v0/${network}/scan/transaction`,
        {
          txObject: transaction,
          userAccount,
          metadata: { origin: getOriginDappUrl(dappUrl) },
        },
        {
          params: {
            language,
          },
          headers: {
            'X-API-KEY': apiKey,
          },
        }
      );
    }

    return response.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      return err.response?.data;
    } else {
      return err;
    }
  }
}
