import React, { useState } from 'react'
import { useLocation } from "react-router-dom";
import Navbar from '../navbar/Navbar';
import removebg from "../../assert/images/removebg.png"
const Remove = () => {
    const location = useLocation();
    const image = location.state?.imageUrl;
  
    const [bgremove, setBgremove] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [convert,setConvert]=useState(false)

    const handleChanging = async () => {
        if (!image) {
            setError("Please select an image first");
            return;
        }
        setIsLoading(true);
        setError(null);
        const apiKey = "DecCvfdzdKu7ArZYF5mFU3sS";
        const url = "https://api.remove.bg/v1.0/removebg";
    
        try {
            // Fetch the image and create a blob
            const imageResponse = await fetch(image);
            const imageBlob = await imageResponse.blob();
    
            const formData = new FormData();
            formData.append("image_file", imageBlob, "image.jpg");
            formData.append("size", "auto");
    
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
                setConvert(true)
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
  const srcCheck=convert?bgremove:image;
    return (
        <div>
            <Navbar/>
            <div  style={{height:"100svh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"40px"}}>
             <img src={srcCheck} alt="Selected" style={{height:"300px"}}/>
             <button style={{height:"30px",backgroundColor:"rgb(59 130 246 / .5)",border:"none",color:"white"}} onClick={handleChanging}>
             {isLoading?"...processing":"Remove Background"}
             <img src={removebg}  style={{height:"291px",width:"287px",position:"absolute",top:"30",left:"44px",top:"32%",zIndex:"-1"}}/>
             
             </button>
             </div>
        </div>
    )
}

export default Remove