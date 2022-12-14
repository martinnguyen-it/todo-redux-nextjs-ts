import Head from 'next/head'
import { Provider } from 'react-redux';
import TodoSections from '../components/todo/TodoSections';
import TodoHeader from '../components/todo/TodoHeader';
import {store} from '../components/redux/store';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
      </Head>
      <main>

        <Provider store={store}>
          <div className='flex flex-col container max-w-md mx-auto md:pt-8'>
            <div className="flex flex-col bg-gray-200 rounded shadow-lg">
              <TodoHeader />
              <TodoSections />
            </div>
          </div>
        </Provider> 
      </main>
    </div>
  )
}
