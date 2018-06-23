import { Injectable } from '@angular/core';
import { observable, action, computed } from 'mobx-angular';

@Injectable()
export class Web3Service {

  constructor() { }

  @action sign(params: {
    email: string,
    name: string }
  ): Promise<any> {
    const web3 = window['web3'];

    return new Promise((resolve, reject) => {
      web3.personal.sign(
        web3.fromUtf8(JSON.stringify(params)),
        this.walltet,
        (err, signature) => {
          if (err) {
            reject(err);
          } else {
            resolve(signature);
          }
        }
      );
    });
  }

  @action sendTransaction(params: {
    value: string,
    data: string,
    to: string,
  }) {
    const web3 = window['web3'];

    return new Promise<string>((resolve, reject) => {
      web3.eth.sendTransaction(params, (error: Error, txHash: string) => {
        if (error) {
          if (error.message.indexOf('User denied transaction signature.') !== -1) {
            return reject('You have rejected the transaction');
          }

          return reject(error.message);
        }

        resolve(txHash);
      });
    });
  }

  @computed get isIncludedWeb3() {
    return  window['web3'] != null;
  }

  @computed get isLogged(): boolean {
    const accounts = window['web3'].eth.accounts;

    return accounts != null && accounts.length !== 0;
  }

  @computed get walltet(): string {
    return window['web3'].eth.accounts[0];
  }
}
