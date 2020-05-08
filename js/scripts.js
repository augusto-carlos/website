const api = axios.create({ baseURL: 'http://localhost:3333/' })        

// Elementos
// const $formAddUser = document.getElementsByClassName('form-add')[0]
// const $usersTable = document.getElementsByClassName('users-table')[0]

// // Eventos
// $formAddUser.addEventListener('submit', handleSaveUser)

// Funções
async function handleSaveUser(e) {
    e.preventDefault()
    const { name, email, password } = e.target
    try {
       await api.post('users', {
            name: name.value, 
            email: email.value, 
            password: password.value
        })
        getUsers()        
    } catch (error) {
        alert('Erro ao cadastrar usuário, tente novamente!')
    }

}

async function getUsers() {
    const users = await api.get('users')
    $usersTable.innerHTML = ''
    users.data.map(user => $usersTable.innerHTML += `
    <tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
    </tr>
    `)
}

        