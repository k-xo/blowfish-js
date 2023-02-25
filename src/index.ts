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

// async function main() {
//   console.log(
//     // await blowfish.scanTransaction({
//     //   transaction: {
//     //     from: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
//     //     to: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
//     //     data: '0xa9059cbb000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000000000000000000000000000000de0b6b3a7640000',
//     //     value: '0',
//     //   },
//     //   dappUrl: 'https://scamsite.com',
//     //   network: 'mainnet',
//     //   chain: 'ethereum',
//     //   userAccount: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045',
//     // })

//     await blowfish.scanMessage({
//       userAccount: '0xed2ab4948ba6a909a7751dec4f34f303eb8c7236',
//       network: 'mainnet',
//       dappUrl: 'https://opensea.io',
//       chain: 'ethereum',
//       message: {
//         kind: 'SIGN_TYPED_DATA',
//         data: {
//           types: {
//             EIP712Domain: [
//               { name: 'name', type: 'string' },
//               { name: 'version', type: 'string' },
//               { name: 'chainId', type: 'uint256' },
//               { name: 'verifyingContract', type: 'address' },
//             ],
//             OrderComponents: [
//               { name: 'offerer', type: 'address' },
//               { name: 'zone', type: 'address' },
//               { name: 'offer', type: 'OfferItem[]' },
//               { name: 'consideration', type: 'ConsiderationItem[]' },
//               { name: 'orderType', type: 'uint8' },
//               { name: 'startTime', type: 'uint256' },
//               { name: 'endTime', type: 'uint256' },
//               { name: 'zoneHash', type: 'bytes32' },
//               { name: 'salt', type: 'uint256' },
//               { name: 'conduitKey', type: 'bytes32' },
//               { name: 'counter', type: 'uint256' },
//             ],
//             OfferItem: [
//               { name: 'itemType', type: 'uint8' },
//               { name: 'token', type: 'address' },
//               { name: 'identifierOrCriteria', type: 'uint256' },
//               { name: 'startAmount', type: 'uint256' },
//               { name: 'endAmount', type: 'uint256' },
//             ],
//             ConsiderationItem: [
//               { name: 'itemType', type: 'uint8' },
//               { name: 'token', type: 'address' },
//               { name: 'identifierOrCriteria', type: 'uint256' },
//               { name: 'startAmount', type: 'uint256' },
//               { name: 'endAmount', type: 'uint256' },
//               { name: 'recipient', type: 'address' },
//             ],
//           },
//           primaryType: 'OrderComponents',
//           domain: {
//             name: 'Seaport',
//             version: '1.1',
//             chainId: '1',
//             verifyingContract: '0x00000000006c3852cbEf3e08E8dF289169EdE581',
//           },
//           message: {
//             offerer: '0xed2ab4948bA6A909a7751DEc4F34f303eB8c7236',
//             offer: [
//               {
//                 itemType: '2',
//                 token: '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D',
//                 identifierOrCriteria: '1726',
//                 startAmount: '1',
//                 endAmount: '1',
//               },
//             ],
//             consideration: [
//               {
//                 itemType: '0',
//                 token: '0x0000000000000000000000000000000000000000',
//                 identifierOrCriteria: '0',
//                 startAmount: '94050000000000000000',
//                 endAmount: '94050000000000000000',
//                 recipient: '0xed2ab4948bA6A909a7751DEc4F34f303eB8c7236',
//               },
//               {
//                 itemType: '0',
//                 token: '0x0000000000000000000000000000000000000000',
//                 identifierOrCriteria: '0',
//                 startAmount: '2475000000000000000',
//                 endAmount: '2475000000000000000',
//                 recipient: '0x0000a26b00c1F0DF003000390027140000fAa719',
//               },
//               {
//                 itemType: '0',
//                 token: '0x0000000000000000000000000000000000000000',
//                 identifierOrCriteria: '0',
//                 startAmount: '2475000000000000000',
//                 endAmount: '2475000000000000000',
//                 recipient: '0xA858DDc0445d8131daC4d1DE01f834ffcbA52Ef1',
//               },
//             ],
//             startTime: '1664436437',
//             endTime: '1667028437',
//             orderType: '2',
//             zone: '0x004C00500000aD104D7DBd00e3ae0A5C00560C00',
//             zoneHash:
//               '0x0000000000000000000000000000000000000000000000000000000000000000',
//             salt: '24446860302761739304752683030156737591518664810215442929818054330004503495628',
//             conduitKey:
//               '0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000',
//             totalOriginalConsiderationItems: '3',
//             counter: '53',
//           },
//         },
//       },
//     })
//   );
// }
