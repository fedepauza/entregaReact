




    /********************************************************/ 
    /******************* Federico Pauza  ********************/ 
    /********************************************************/ 




    import NavBar from './components/NavBar/NavBar';
    import DetallesProducto from './components/Description/DetallesProducto';
    import ContainerCards from './components/ContainerCards/containerCards';
    import Error from './components/Error'
    import Home from './components/Home/Home';
    import { BrowserRouter, Routes, Route } from 'react-router-dom';


        function App() {
            return (
                
                <BrowserRouter> 

                    <div className="App">
                        <NavBar/>
                    </div>
                        
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/Destinos' element={<ContainerCards/>}/>
                        <Route path='/Destinos/:productoID' element={<DetallesProducto/>}/>  
                        <Route path='/Destinos/:category' element={<ContainerCards/>} />
                        <Route path='/Tours' element={<DetallesProducto/>}/>  
                        <Route path='/Paquetes' element={<DetallesProducto/>}/>  
                        <Route path='/Nosotros' element={<DetallesProducto/>}/>  
                        <Route path='/Contacto' element={<DetallesProducto/>}/>  
                        <Route path='*' element={<Error/>}/>
                    </Routes>
                    
                </BrowserRouter>
            
                
            );
        }



export default App;