import axios from "axios";
const ASSOCIATE_API_BASE_URl ="http://localhost:8080/api/v1/associates";
class AssociateService{
getAssociates(){
    return axios.get(ASSOCIATE_API_BASE_URl);
};
createAssociate(associate){
    return axios.post(ASSOCIATE_API_BASE_URl, associate);
};
getAssociateById(associateId){
    return axios.get(ASSOCIATE_API_BASE_URl + '/' + associateId);
};

updateAssociate(associate, associateId){
    return axios.put(ASSOCIATE_API_BASE_URl + '/' + associateId, associate);
}
deleteAssociate(associateId){
    return axios.delete(ASSOCIATE_API_BASE_URl + '/' + associateId);
}
}
export default new AssociateService()
