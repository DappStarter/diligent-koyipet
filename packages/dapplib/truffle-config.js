require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remember hospital just entire bone trick'; 
let testAccounts = [
"0x3b0ffb75994fcc082401c3e2f7838640a2862e389a34aeffef8c85fe79b56acb",
"0xff6026c3d18b11eac11c616f8ad85d729bfc80c14b9866a28ef1f9d085b825a2",
"0xb2adb0a8a04bb0e0af14201422d8590355a4801025bcdf120fa3094c997df7be",
"0x6b89bfa9409dfe666300c8aad04bf0b49a0e3538b0ae3a5b659570a92030383c",
"0xa2a553fd5c6e5464cb0873c16c1f50ec09005c790e388a1fdd5ff53aa5cc1b1a",
"0x44c8f866bad748ff8b86cc4dbc64ddc5c18a545a9dee014fe446c2261c71f162",
"0x2761b7858353a75922a7f195102714abd0cd325684d3b335c5b17bf7ec022be5",
"0xb3b7ce1525b11bd7cde4f4edab8333ec43704a2b8baf9ee53512d35be5c5e3d7",
"0x474fbb797cbfa829c7d7008ab285e762b82867390434a688e4e302a375f1fe79",
"0x8780feefb5a9c75151fc4692eb0504e30bfb92800537c24ef0bad4ed22949876"
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
            version: '^0.5.11'
        }
    }
};
