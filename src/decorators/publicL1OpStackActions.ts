import type { Chain, PublicClient, Transport } from 'viem'
import {
  getL2HashesForDepositTx,
  type GetL2HashesForDepositTxParamters,
  type GetL2HashesForDepositTxReturnType,
} from '../actions/public/L1/getL2HashesForDepositTx.js'
import {
  getLatestProposedL2BlockNumber,
  type GetLatestProposedL2BlockNumberParameters,
  type GetLatestProposedL2BlockNumberReturnType,
} from '../actions/public/L1/getLatestProposedL2BlockNumber.js'
import {
  getOutputForL2Block,
  type GetOutputForL2BlockParameters,
  type GetOutputForL2BlockReturnType,
} from '../actions/public/L1/getOutputForL2Block.js'
import {
  getSecondsToFinalizable,
  type GetSecondsToFinalizableParameters,
} from '../actions/public/L1/getSecondsToFinalizable.js'
import {
  getSecondsToNextL2Output,
  type GetSecondsToNextL2OutputParameters,
} from '../actions/public/L1/getSecondsToNextL2Output.js'
import {
  readFinalizedWithdrawals,
  type ReadFinalizedWithdrawalsParameters,
} from '../actions/public/L1/readFinalizedWithdrawals.js'
import {
  readProvenWithdrawals,
  type ReadProvenWithdrawalsParameters,
  type ReadProvenWithdrawalsReturnType,
} from '../actions/public/L1/readProvenWithdrawals.js'
import {
  simulateDepositERC20,
  type SimulateDepositERC20Parameters,
  type SimulateDepositERC20ReturnType,
} from '../actions/public/L1/simulateDepositERC20.js'
import {
  simulateDepositETH,
  type SimulateDepositETHParameters,
  type SimulateDepositETHReturnType,
} from '../actions/public/L1/simulateDepositETH.js'
import {
  simulateDepositTransaction,
  type SimulateDepositTransactionParameters,
  type SimulateDepositTransactionReturnType,
} from '../actions/public/L1/simulateDepositTransaction.js'
import {
  simulateFinalizeWithdrawalTransaction,
  type SimulateFinalizeWithdrawalTransactionParameters,
  type SimulateFinalizeWithdrawalTransactionReturnType,
} from '../actions/public/L1/simulateFinalizeWithdrawalTransaction.js'
import {
  simulateProveWithdrawalTransaction,
  type SimulateProveWithdrawalTransactionParameters,
  type SimulateProveWithdrawalTransactionReturnType,
} from '../actions/public/L1/simulateProveWithdrawalTransaction.js'

export type PublicL1OpStackActions<
  TChain extends Chain | undefined = Chain | undefined,
> = {
  getL2HashesForDepositTx: (
    args: GetL2HashesForDepositTxParamters,
  ) => Promise<GetL2HashesForDepositTxReturnType>
  getLatestProposedL2BlockNumber: (
    args: GetLatestProposedL2BlockNumberParameters<TChain>,
  ) => Promise<GetLatestProposedL2BlockNumberReturnType>
  getOutputForL2Block: (
    args: GetOutputForL2BlockParameters<TChain>,
  ) => Promise<GetOutputForL2BlockReturnType>
  getSecondsToFinalizable: (args: GetSecondsToFinalizableParameters<TChain>) => Promise<bigint>
  getSecondsToNextL2Output: (
    args: GetSecondsToNextL2OutputParameters<TChain>,
  ) => Promise<bigint>

  readFinalizedWithdrawals: (args: ReadFinalizedWithdrawalsParameters<TChain>) => Promise<boolean>
  readProvenWithdrawals: (args: ReadProvenWithdrawalsParameters<TChain>) => Promise<ReadProvenWithdrawalsReturnType>

  simulateDepositERC20: <
    TChainOverride extends Chain | undefined = Chain | undefined,
  >(
    args: SimulateDepositERC20Parameters<TChain, TChainOverride>,
  ) => Promise<SimulateDepositERC20ReturnType<TChain, TChainOverride>>
  simulateDepositETH: <
    TChainOverride extends Chain | undefined = Chain | undefined,
  >(
    args: SimulateDepositETHParameters<TChain, TChainOverride>,
  ) => Promise<SimulateDepositETHReturnType<TChain, TChainOverride>>
  simulateDepositTransaction: <
    TChainOverride extends Chain | undefined = Chain | undefined,
  >(
    args: SimulateDepositTransactionParameters<TChain, TChainOverride>,
  ) => Promise<SimulateDepositTransactionReturnType<TChain, TChainOverride>>

  simulateFinalizeWithdrawalTransaction: <
    TChainOverride extends Chain | undefined = Chain | undefined,
  >(
    args: SimulateFinalizeWithdrawalTransactionParameters<TChain, TChainOverride>,
  ) => Promise<SimulateFinalizeWithdrawalTransactionReturnType<TChain, TChainOverride>>
  simulateProveWithdrawTransaction: <
    TChainOverride extends Chain | undefined = Chain | undefined,
  >(
    args: SimulateProveWithdrawalTransactionParameters<TChain, TChainOverride>,
  ) => Promise<SimulateProveWithdrawalTransactionReturnType<TChain, TChainOverride>>
}

export function publicL1OpStackActions<
  TTransport extends Transport = Transport,
  TChain extends Chain | undefined = Chain | undefined,
>(
  client: PublicClient<TTransport, TChain>,
): PublicL1OpStackActions<TChain> {
  return {
    getL2HashesForDepositTx: (args) => getL2HashesForDepositTx(client, args),

    getLatestProposedL2BlockNumber: (args) => getLatestProposedL2BlockNumber(client, args),
    getOutputForL2Block: (args) => getOutputForL2Block(client, args),
    getSecondsToFinalizable: (args) => getSecondsToFinalizable(client, args),
    getSecondsToNextL2Output: (args) => getSecondsToNextL2Output(client, args),

    simulateDepositETH: (args) => simulateDepositETH(client, args),
    simulateDepositERC20: (args) => simulateDepositERC20(client, args),
    simulateDepositTransaction: (args) => simulateDepositTransaction(client, args),

    readFinalizedWithdrawals: (args) => readFinalizedWithdrawals(client, args),
    readProvenWithdrawals: (args) => readProvenWithdrawals(client, args),

    simulateFinalizeWithdrawalTransaction: (args) => simulateFinalizeWithdrawalTransaction(client, args),
    simulateProveWithdrawTransaction: (args) => simulateProveWithdrawalTransaction(client, args),
  }
}
