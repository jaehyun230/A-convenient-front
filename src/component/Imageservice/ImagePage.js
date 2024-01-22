import React, { useState } from 'react';
import axios from 'axios';

const ImagePage = () => {
    const [files, setFiles] = useState([]);
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [error, setError] = useState('');

    const handleFileChange = (event) => {
        setFiles([...files, ...Array.from(event.target.files)]);
    };

    const handleWidthChange = (event) => {
        setWidth(event.target.value);
    };

    const handleHeightChange = (event) => {
        setHeight(event.target.value);
    };

    const handleRemoveFile = (index) => {
        const updatedFiles = files.filter((_, fileIndex) => fileIndex !== index);
        setFiles(updatedFiles);
    };

    const handleSubmit = async () => {
        if (files.length === 0 || !width || !height) {
            setError('파일과 너비, 높이를 모두 입력해주세요.');
            return;
        }

        const formData = new FormData();
        files.forEach(file => {
            formData.append('files', file);
        });
        formData.append('width', width);
        formData.append('height', height);

        try {
            const response = await axios.post('http://localhost:8090/image/resize', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
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
            <input type="file" multiple onChange={handleFileChange} accept=".jpg, .jpeg" />
            <div>
                {files.map((file, index) => (
                    <div key={index}>
                        {file.name}
                        <button onClick={() => handleRemoveFile(index)}>X</button>
                    </div>
                ))}
            </div>
            <div>
                <input 
                    type="number" 
                    value={width} 
                    onChange={handleWidthChange} 
                    placeholder="너비" 
                    min="1" 
                    max="5000"
                />
                <input 
                    type="number" 
                    value={height} 
                    onChange={handleHeightChange} 
                    placeholder="높이" 
                    min="1" 
                    max="5000"
                />
            </div>
            <button onClick={handleSubmit}>이미지 업로드</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default ImagePage;
