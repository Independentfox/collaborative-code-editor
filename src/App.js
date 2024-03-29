import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EditorPage from './pages/EditorPage';
import './App.css'
import { Toaster } from 'react-hot-toast';
import { PostContextProvider } from './context/PostContext'
import { RecoilRoot } from 'recoil';



const App = () => {
  return (
    <>
      <div>
        <Toaster 
          position='top-right'
          toastOptions={{
            success: {
              theme: {
                primary: '#4aed88', 
              },
            },
          }} >
        </Toaster>
      </div>

      <BrowserRouter>
                <RecoilRoot>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route
                            path="/editor/:roomId"
                            element={<EditorPage />}
                        ></Route>
                    </Routes>
                </RecoilRoot>
      </BrowserRouter>

    </>
  );
}

export default App;
