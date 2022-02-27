require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remain modify hidden argue front tube'; 
let testAccounts = [
"0x16f655f906eaedff2771e5850a97b4941489d4c77c9abe2c5e9f1e8637f064ca",
"0xc07121de8726d7616f4a963431ab6ba6aa50b228396db48eefbc3b3f2bfe8365",
"0x0d380492c5327c9fe0fdbb441943ba54b64e155c5b21f108a5926140f6be6206",
"0x8d2e868b8756ba459f532f36e88f4bfd690fc6caa165240410bf4dd26f182ec1",
"0x7e9aa4fe820c91d5296d0e4c3ebbfc156775ac7e32bdc12e5742cb7d3a694e09",
"0x5909d5aacb1d1fbf56b896eb4f2dc6e93d1c1c7df99b10a9160c5198f9a03bd6",
"0x276008b0d8ce0dab752c58c4af5ca0e8b49857e93d22801d7c9caeb55d95f92d",
"0x9a4392eb9aacc171616d29312b5a06deb09755b1497d02b865cd9e21f70d2ac1",
"0x938a037e74c7afd2912075da55affa4cd9eb7dc6b0377cd600496f658112f88f",
"0x756abc3295683e814470b9669c8ce663d5138ccf2bd501da32a293959bbdf32d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

