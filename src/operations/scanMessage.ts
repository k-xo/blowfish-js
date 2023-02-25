import { api, getOriginDappUrl, setApiKey } from '../utils/api';
import axios, { AxiosError } from 'axios';
import { ScanMessageArgs } from '../utils/types';

export async function scanMessage(args: ScanMessageArgs) {
  const {
    network,
    message,
    userAccount,
    dappUrl,
    chain,
    apiKey,
    environment,
    language,
  } = args;

  try {
    let response;

    if (environment === 'production') {
      setApiKey(apiKey);
      response = await api.post(
        `${chain}/v0/${network}/scan/message`,
        {
          message,
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
        `https://free.api.blowfish.xyz/${chain}/v0/${network}/scan/message`,
        {
          message: message,
          userAccount: userAccount,
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
    console.log(err);
    if (err instanceof AxiosError) {
      return err.response?.data;
    } else {
      return err;
    }
  }
}
