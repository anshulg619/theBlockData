import axios from 'axios';

const url = "http://127.0.0.1:8080/theBlockData"

// fetch all the job posts according to the category
const getJobPosts= () => {
    return axios.get(url+`/Career`);
}

const sendMessage = (data) =>{
    return axios.post(url+'/message', data);
}

const saveQoute = (data) =>{
    return axios.post(url+'/qoute', data);
}

const saveCandidate = (data) =>{
    return axios.post(url+'/candidate', data);
}
const  getFaq = () => {
    return axios.get(url + '/faq');
}

export default {sendMessage, getJobPosts, getFaq, saveQoute, saveCandidate};