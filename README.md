<!-- @format -->

# Fair Trade Coffee

A Smart Contract implementing a coffee supply chain, to verify the authenticity and improve trackability of a coffee bean, from farm to consumer.

## Contracts

- [`FarmerRole`](https://rinkeby.etherscan.io/address/0x65633987f310725a0a238cd3efb3600d2623fc91#code)
- [`DistributorRole`](https://rinkeby.etherscan.io/address/0x411b881053430c1dde640704ef88c1344b55f196#code)
- [`RetailerRole`](https://rinkeby.etherscan.io/address/0xecd75cf539135ec1d2947c959e9d3e6e739b82a7#code)
- [`ConsumerRole`](https://rinkeby.etherscan.io/address/0xf4e923a45a0a07bb0657dd72afc5692011190bd4#code)
- [`SupplyChain`](https://rinkeby.etherscan.io/address/0x50e866df867028ea06026d5047df3c5f7a000e75#code)

## Environment

```
Truffle v5.1.24 (core: 5.1.24)
Solidity v0.5.16 (solc-js)
Node v13.8.0
Web3.js v1.2.1
```

## Setup Instructions

### This project uses truffle so please ensure you have it installed

```
 npm i truffle - g
```

then

```
cd fair-trade-coffeee && truffle develop
```

This will get the local ethereum node up and running, in another terminal:

```
cd app/ && npm run dev
```

To run the front end. Ensure your [Wallet](https://metamask.io/) is connected to `http://localhost:9545` .

## Test

To run tests simply:

1.  `truffle develop`

2.  `compile`

3.  `migrate`

4.  `test`
