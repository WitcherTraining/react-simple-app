import axios from "axios"

class HelloWorldService {

    executeHelloWorldService() {
        return axios.get('http://localhost:8080/hello-world').then(response => console.log(response))
        //.catch()
    }

    executeHelloWorldBeanService() {
        return axios.get('http://localhost:8080/hello-world-bean');        
    }

    executeHelloWorldPathVariableService(name) {

        // let username = 'witcher'
        // let password = 'dummy'

        //let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)

        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`
        // , 
        // {
        //     headers: {
        //         authorization: basicAuthHeader
        //     }
        // }
        );        
    }
}

export default new HelloWorldService()