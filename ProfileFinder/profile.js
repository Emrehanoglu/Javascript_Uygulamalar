class Profile{
    constructor(){
        this.clientId = '',
        this.clientSecret = ''
    }

    async getProfile(username){
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`)

        const profile = await response.json()

        const todoResponse = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`)

        const todo = await todoResponse.json()

        return {profile, todo}
    }
}