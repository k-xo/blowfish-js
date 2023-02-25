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

export interface ScanMessageRequest {
  network: 'mainnet' | 'goerli';
  language?: string;
  message: Message;
  userAccount: string;
  dappUrl: string;
  chain: 'ethereum' | 'polygon';
}

export interface ScanMessageArgs extends ScanMessageRequest {
  apiKey: string;
  environment?: 'production' | 'sandbox';
}

export interface Message {
  kind: string;
  data: { types: any; primaryType: string; message: any; domain: any };
}

export interface Transaction {
  from: string;
  to: string;
  value: string;
  data: string;
}
