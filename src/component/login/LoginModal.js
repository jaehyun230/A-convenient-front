import React from 'react';

const LoginModal = ({ onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <a href="http://localhost:8090/oauth/kakao">카카오톡 로그인</a>
                <a href="http://localhost:8090/oauth/naver">네이버 로그인</a>
                <a href="http://localhost:8090/oauth/google">구글 로그인</a>
            </div>
        </div>
    );
};

export default LoginModal;