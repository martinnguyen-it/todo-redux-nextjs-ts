import axios from "axios";

const deleteDataApi = (id : string) => {
    axios.delete(`https://638026512f8f56e28e9c895b.mockapi.io/martin/${id}`)
}

export default deleteDataApi