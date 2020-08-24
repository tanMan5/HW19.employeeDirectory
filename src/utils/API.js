import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=100&nat=us";

export default function getEmployees(query) {
    return axios.get(BASEURL);
};

