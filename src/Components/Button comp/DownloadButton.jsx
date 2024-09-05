import React from 'react';
import { Button } from 'antd';
const DownloadButton = (value) => {
const handleDownload = async () => {
    console.log(value, "venkat value")
    const response = await fetch('http://192.168.9.82:3001/download', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ param: value.url }),
        });
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'intra-oral-spec.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
};

return (
<Button type="primary" key="console" onClick={handleDownload}>
Download
</Button>
);
};

export default DownloadButton;