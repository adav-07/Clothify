import axios from 'axios';

export const getAllImages = async () => {
    const { data } = await axios.get(`http://localhost:4000/images`);
    return data;
};

export const getImageById = async (id) => {
    const { data } = await axios.get(`http://localhost:4000/images/${id}`);
    return data;
};

export const addImage = async (url) => {
    const { data } = await axios.post(`http://localhost:4000/images`, {
        url
    });
    return data;
};

export const deleteImage = async (id) => {
    const { data } = await axios.delete(`http://localhost:4000/images/${id}`);
    return data;
};

export const getAllMiniImages = async () => {
    const { data } = await axios.get(`http://localhost:4000/minis`);
    return data;
};

export const getMiniImageById = async (id) => {
    const { data } = await axios.get(`http://localhost:4000/minis/${id}`);
    return data;
};

export const addMiniImage = async (url) => {
    const { data } = await axios.post(`http://localhost:4000/minis`, {
        url
    });
    return data;
};

export const deleteMiniImage = async (id) => {
    const { data } = await axios.delete(`http://localhost:4000/minis/${id}`);
    return data;
};

// CLOUDINARY

export const uploadImageToCloudinary = async (image) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "sample");
    data.append("cloud_name", "dn8bfdtxa");
    const result = await fetch(`https://api.cloudinary.com/v1_1/dn8bfdtxa/image/upload`, {
        method: 'POST',
        body: data
    })
        .then(res => res.json());
        console.log(result);
    return result;
};