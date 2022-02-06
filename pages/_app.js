import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

import { ChainId, DAppProvider } from '@usedapp/core'
const config = {
  readOnlyChainId: ChainId.Mainnet,
  readOnlyUrls: {
    [ChainId.Mainnet]: 'https://mainnet.infura.io/v3/3165a249c65f4198bf57200109b8fadf',
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <DAppProvider config={config}>
      <Component {...pageProps} />
    </DAppProvider>
  ) 
}

export default MyApp
