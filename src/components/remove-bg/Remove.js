import React, { useState } from 'react'

const Remove = () => {
    const [image, setImage] = useState(null);
    const [bgremove, setBgremove] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChanging = async () => {
        if (!image) {
            setError("Please select an image first");
            return;
        }

        setIsLoading(true);
        setError(null);

        const apiKey = "DecCvfdzdKu7ArZYF5mFU3sS";
        const url = "https://api.remove.bg/v1.0/removebg";

        const formData = new FormData();
        formData.append("image_file", image, image.name);
        formData.append("size", "auto");
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'X-Api-Key': apiKey
                },
                body: formData
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const blob = await response.blob();
            const reader = new FileReader();
            reader.onload = () => {
                setBgremove(reader.result);
                console.log("Background removed successfully");
            };
            reader.readAsDataURL(blob);
        } catch (error) {
            console.error("Error:", error);
            setError("Failed to remove background. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div style={{color:"white"}}>
            <h2>Remove Background</h2>
            <div>
                <input 
                    type='file' 
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                />
                <button onClick={handleChanging} disabled={isLoading}>
                    {isLoading ? 'Processing...' : 'Submit'}
                </button>
            </div>
            {error && <p style={{color: 'red'}}>{error}</p>}
            {isLoading && <p>Processing image...</p>}
            <div>
                {bgremove && (
                    <img src={bgremove} alt='Processed image'/>
                )}
            </div>
        </div>
    )
}

export default Remove