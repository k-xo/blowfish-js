export type Chain = 'ethereum' | 'solana' | 'polygon';

export type Network = 'mainnet' | 'devnet' | 'testnet' | 'goerli';

export interface ScanTransactionRequest {
  network: Network;
  language?: string;
  transaction: Transaction;
  userAccount: string;
  dappUrl: string;
  chain: Chain;
}

export interface ScanTransactionArgs extends ScanTransactionRequest {
  apiKey: string;
  environment?: 'production' | 'sandbox';
}

export interface Transaction {
  from: string;
  to: string;
  value: string;
  data: string;
}
