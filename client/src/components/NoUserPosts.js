import React from 'react';

const NoUserPosts = () => {
    const styles = {
        container: {
            backgroundColor: 'lavender',
            color: 'black',

            borderRadius: '8px',
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
            padding :'100px'
        },
        message: {
            fontSize: '18px',
            fontWeight: 'bold',
        }
    };

    return (
        <div style={styles.container}>
            <p style={styles.message}>Sorry, only alumni are allowed to make posts.</p>
        </div>
    );
};

export default NoUserPosts;
