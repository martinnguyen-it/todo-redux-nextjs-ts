import axios from "axios";

const updateDataApi = (id : string, isCompleted : boolean) => {
    axios.put(`https://638026512f8f56e28e9c895b.mockapi.io/martin/${id}`, {
        isCompleted: isCompleted
    })
}

export default updateDataApi