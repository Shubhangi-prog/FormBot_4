import React from 'react';

function AdminContent({ item }) {
    const { type, value } = item.data;

    if (type === 'Image' || type === 'GIF') {
        return <img src={value} alt="broken image" />;
    } else if (type === 'Video') {
        return (
            <video controls>
                <source src={value} type="video/mp4" />
            </video>
        );
    } else {
        return value;
    }
}

export default AdminContent