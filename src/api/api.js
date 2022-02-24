
const url = process.env.REACT_APP_BACKEND_LOCAL

const hello = () => {
    return fetch(url + '/hello')
}

const verifyAWB = (imageFile) => {
    const formData = new FormData();
    formData.append('image', imageFile)
    return fetch(url + '/verifyAWB', {
        method: 'POST',
        body: formData
    })
}

const verifyLocation = (imageFile) => {
    const formData = new FormData();
    formData.append('image', imageFile)
    return fetch(url + '/verifyLocation', {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        body: formData
    })
}

const getAllClusters = () => {
    return fetch(url + '/getAllClusters')
}

export {
    hello,
    verifyAWB,
    verifyLocation,
    getAllClusters
}