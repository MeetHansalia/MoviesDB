import Layout from '@/components/Layout'
import '../styles/globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'; 


function MyApp ({ Component, pageProps}){
    return(
        
        <Layout>         
            <Component {...pageProps}/>
            <ToastContainer 
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
        </Layout>
    )
}

export default MyApp