import { PlumoVerifier } from '../index.js';
import Web3 from 'web3';
import { newKitFromWeb3 } from '@celo/contractkit';
import * as winston from 'winston';

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
  ]
});

const web3 = new Web3("https://plumo-prover-rpc.kobi.one")
const kit = newKitFromWeb3(web3);

const plumo = new PlumoVerifier(logger, kit.web3.eth, Buffer);

plumo.fetchVerifiedStorageAtGivenPosition("0x3E9623a3796D150ff5A28A3808a554a33CE676D1", '0x0')
.then((resp) => {
  logger.info(`the owners address is 0x${resp.toString('hex')}`)
}).catch(e => {
    console.log('error');
    console.log(e);
});