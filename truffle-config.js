module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777",
      gas: 6721975,
      from: "0x7219C2c233277d4437ccB452c728A49e4b96e961",
    },
  },
  contracts_directory: "./testing/",
  contracts_build_directory: "./src/build/",
  compilers: {
    solc: {
      version: "0.6.6",
      settings: {
        optimizer: {
          enabled: true,
          runs: 100,
        },
      },
    },
  },
};
