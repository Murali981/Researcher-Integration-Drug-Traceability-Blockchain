module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777",
      gas: 6721975,
<<<<<<< HEAD
      from: "0x7219C2c233277d4437ccB452c728A49e4b96e961",
=======
      from: "0x91Cc4abdD63133a3F4DdBeEeA47d51F29273abeA",
>>>>>>> 99ee45036c583bf1e336d1b9ff256c35229d146d
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
