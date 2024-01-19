import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from "./component/login/LoginPage";
import KakaoRedirectPage from "./component/login/KakaoRedirectPage";
import NaverRedirectPage from "./component/login/NaverRedirectPage";
import GoogleRedirectPage from './component/login/GoogleRedirectPage';
import FileUpload from './component/Imageservice/FileUpload';
import ImagePage from './component/Imageservice/ImagePage';


const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />}></Route>
                    <Route path="/oauth/redirected/kakao" element={<KakaoRedirectPage />}></Route>
                    <Route path="/oauth/redirected/naver" element={<NaverRedirectPage />}></Route>
                    <Route path="/oauth/redirected/google" element={<GoogleRedirectPage />}></Route>

                    <Route path="/image" element={<ImagePage />}></Route> {/* ImagePage 라우트 추가 */}
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;