export type Chain = 'ethereum' | 'solana' | 'polygon';

export type ChainID = 1 | 5 | 101 | 102 | 103 | 137;

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
}

export interface Transaction {
  from: string;
  to: string;
  value: string;
  data: string;
}
