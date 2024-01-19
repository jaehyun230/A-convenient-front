import React, { useState }from 'react';
import { useNavigate } from 'react-router-dom';
import LoginModal from './LoginModal';

const LoginPage = () => {

    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);

    const handleLoginClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleImagePageClick = () => {
        navigate('/image');
    };
    

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <button onClick={handleLoginClick} style={{ padding: '10px 20px', fontSize: '18px', borderRadius: '5px', cursor: 'pointer' }}>
                        로그인
                    </button>
                    {showModal && <LoginModal onClose={handleCloseModal} />}
                </div>

                <button onClick={handleImagePageClick} style={{ padding: '10px 20px', fontSize: '18px', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}>
                    이미지 페이지로 이동
                </button>

                
            </div>
        </div>
    );
};

export default LoginPage;
