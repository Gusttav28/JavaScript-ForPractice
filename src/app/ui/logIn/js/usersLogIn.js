const userName = document.getElementById('username')
const userPhoneNumber = document.getElementById('userPhoneNumber')
const button = document.getElementById("button")
const profile = document.getElementById("profile")
const bookTitle = document.getElementById("bookTitle")
const bookAuthor = document.getElementById("bookAuthor")
const booksList = document.getElementById("booksList")

async function getLaon() {
    const user = userName.value
    const res = await fetch(`http://127.0.0.1:8000/library/Loan/?search=${user}`)
    if (!res.ok) {
        console.log(res.status())
        throw new Error("Information cannot be fecth" );   
    }
    const data = await res.json()
    data.forEach(element => {
        const book_Title = element.book_title
        const book_Author = element.book_author
        // bookTitle.innerHTML = `Book Title: ${book_Title}`
        // bookAuthor.innerHTML = `Book Author: ${book_Author}`
        const li = document.createElement('li')
        const li2 = document.createElement('li')
        li.textContent = book_Title
        li2.textContent = book_Author
        booksList.appendChild(li)
        booksList.appendChild(li2)
    });
    const BooksData = JSON.stringify(data)
    return data
}
async function getUsers() {
    const res = await fetch("http://127.0.0.1:8000/library/Member/")
    if (!res.ok) {
        console.log(res.status())
        throw new Error("Information cannot be fecth" );   
    }
    const data = await res.json()
    data.forEach(element => {
        const user = element.cx_name
        const lastname = element.cx_lastName
        console.log(user, lastname)
    });
    return data
}

function user_profile(userProfile) {
    profile.innerHTML = `Hi, ${userProfile}`
}


async function getUser() {
    const user_name = userName.value
    const user_number = Number(userPhoneNumber.value)
    console.log(user_name, user_number)
    const res = await fetch(`http://127.0.0.1:8000/library/Member/?search=${user_name}`)
    if (!res.ok) {
        console.log(res.status())
        throw new Error("Information cannot be fecth" );   
    }
    const data = await res.json()
    const phoneNumber = data.map(element => {
        const phoneNumberr = element.cx_phoneNumber
        return phoneNumberr
    });
    if (user_number === phoneNumber[0]){
        alert(`Welcome ${user_name}`)
        user_profile(user_name)
        getLaon()
    } else{
        alert(`Something went wrong, Try again.`)
    }
    return data
}



button.addEventListener('click', (e) => {
    e.preventDefault()
    // getUsers()
    getUser()
    getLaon()

})


