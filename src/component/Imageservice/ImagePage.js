import React, { useState } from 'react';
import axios from 'axios';

const ImagePage = () => {
    const [file, setFile] = useState(null);
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [error, setError] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleWidthChange = (event) => {
        setWidth(event.target.value);
    };

    const handleHeightChange = (event) => {
        setHeight(event.target.value);
    };

    const handleSubmit = async () => {
        if (!file || !width || !height) {
            setError('파일과 너비, 높이를 모두 입력해주세요.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('width', width);
        formData.append('height', height);

        try {
            const response = await axios.post('http://localhost:8090/image/resize', formData);
            console.log('이미지 조정 성공:', response.data);
            // 성공 처리 로직
        } catch (error) {
            console.error('이미지 조정 실패:', error);
            setError('이미지 조정에 실패했습니다.');
            // 실패 처리 로직
        }
    };

    return (
        <div>
            <h1>이미지 페이지</h1>
            <input type="file" onChange={handleFileChange} accept=".jpg, .jpeg" />
            <div>
                <input type="number" value={width} onChange={handleWidthChange} placeholder="너비" />
                <input type="number" value={height} onChange={handleHeightChange} placeholder="높이" />
            </div>
            <button onClick={handleSubmit}>이미지 업로드</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default ImagePage;