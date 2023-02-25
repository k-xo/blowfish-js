# Blowfish-js

<p>
<img title="Blowfish" src= "./assets/blowfishlogo.svg" width="350px"/>
</p>

Blowfish makes it easy to identify & stop fraud before it happens. Join the leading wallets protecting their users funds with the blowfish security engine. For more details on Blowfish, and for a full documentation reference, you can check https://blowfish.xyz/ and https://docs.blowfish.xyz/api-docs/ respectively.

## Install
```sh
npm i @k-xo/blowfish-js
```

## Setup

To setup a Blowfish instance, simply past your api key, which you can get from https://blowfish.xyz/, into the constructor, not some api keys only work for the 'free' blowfish url, the snippet below describes the differences in setup.

```js
// If making requests to https://api.blowfish.xyz/
const blowfish = new Blowfish(API_KEY);

// If making requests to https://free.api.blowfish.xyz/
const blowfish = new Blowfish(API_KEY, 'sandbox');
```

## Scanning a transaction

Scan transactions in order to receive recommended actions, tailored warnings and human-readable simulation results explaining what the transaction will do.

```js
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
const response = await blowfish.scanTransaction(tx_data);
```

| **Parameter** | **Type** | **Description**                                                                                                                                                                     |
| ------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `chain`       | _string_ | The chain which the transaction to be scanned is on, currently only Ethereum, Polygon and Solana are supported                                                                      |
| `transaction` | _object_ | A transaction is an object which contains the _from_, _to_, _value_ and _data_ fields                                                                                               |
| `dappUrl`     | _string_ | The domain of the web application requesting the transaction                                                                                                                        |
| `userAccount` | _string_ | The user account who is being asked to sign / execute the transaction                                                                                                               |
| `network`     | _string_ | The network of the chain being executed on, for Solana this can be 'mainnet, 'devnet', 'testnet, for Ethereum this can be 'mainnet' and 'goerli', for Polygon this can be 'mainnet' |

## Scanning a Message

Currently in Beta, -- check here for the full API specification -- https://docs.blowfish.xyz/api-docs/reference/api-reference/scan-message/evm
