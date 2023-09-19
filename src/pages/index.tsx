import Image from 'next/image'
import { Inter } from 'next/font/google'
import Start from "../pages/start/start"
const inter = Inter({ subsets: ['latin'] })
import { Provider } from 'react-redux'; // Import Provider
import store from './store'; // Import your Redux store
import Display from "../pages/start/display"
export default function Home() {
  return (
    
    <Provider store={store}>
    <Start />
    <Display/>
  </Provider>
  )
}
