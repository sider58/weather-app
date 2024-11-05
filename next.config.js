// import nodeExternals from 'webpack-node-externals';

// export default {
//   webpack: (config, { webpack }) => {
//     // Configurer les modules externes pour les modules node:
//     config.externals.push(
//       'fs/promises', // Pour node:fs/promises
//       'buffer' // Pour node:buffer
//     );

//     // Utiliser webpack-node-externals pour gérer les modules node:
//     config.externals = [
//       ...(config.externals || []),
//       nodeExternals({
//         allowlist: ['node-fetch', 'fs/promises', 'buffer'],
//       }),
//     ];

//     return config;
//   },
// };
