/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";

import type { Hello, HelloInterface } from "../../Directory/Hello";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060405160dc38038060dc8339818101604052810190602d91906045565b506090565b600081519050603f81607c565b92915050565b60006020828403121560585760576077565b5b60006064848285016032565b91505092915050565b6000819050919050565b600080fd5b608381606d565b8114608d57600080fd5b50565b603f80609d6000396000f3fe6080604052600080fdfea2646970667358221220133f91b0425ce510af8b75336b57852d3a7de1c90943e9b26ca086eabb5334d264736f6c63430008070033";

type HelloConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HelloConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Hello__factory extends ContractFactory {
  constructor(...args: HelloConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Hello> {
    return super.deploy(arg0, overrides || {}) as Promise<Hello>;
  }
  override getDeployTransaction(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(arg0, overrides || {});
  }
  override attach(address: string): Hello {
    return super.attach(address) as Hello;
  }
  override connect(signer: Signer): Hello__factory {
    return super.connect(signer) as Hello__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HelloInterface {
    return new utils.Interface(_abi) as HelloInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Hello {
    return new Contract(address, _abi, signerOrProvider) as Hello;
  }
}