const  obj = {
    locale: ''
}

obj.setLocaleMessage = (code, data) => {
    localStorage.setItem(code, typeof data === 'string'? data:JSON.stringify(data))
}

obj.getLocalMessage = (code) => {
    return localStorage.getItem(code)
}

export default obj