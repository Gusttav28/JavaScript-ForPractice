const button = document.getElementById("button")
const logs = document.getElementById("logs")
const users = document.getElementById("users")
const completedU = document.getElementById("completed")
const loader = document.getElementById("loader")
console.log("asdfs")

function showLoader() {
    loader.style.display = "block";
    setTimeout(() => {
        loader.style.display = "none";
    }, 2000);
}

function hideLoader() {
    loader.style.display = "none";
}

const consumeItems = new Set();

async function userlogs(itemId){
    if (consumeItems.has(itemId)) {
        alert("You already have consume this information")
        console.log(consumeItems);
        return;
    }
    consumeItems.add(itemId)
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    if (!res.ok) {
        const err = "We got an error trying to request the information: "
        logs.innerHTML = err
        throw new Error("Error message", res);
    }
    const data = await res.json()
    console.log(data)
    const httpStatus = res.status
    logs.innerHTML = `- Https status: ${httpStatus}, Api consuming properly.`
    
    // logs.innerHTML = JSON.stringify(data)
    return data; 
}

async function usersTitle() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    if (!res.ok) {
        const err = "We got an error trying to request the information: "
        logs.innerHTML = err
        throw new Error("Error message", res);
    }
    const data = await res.json()
    console.log(data)
    const list = []
    data.forEach(element => {
        const ellement = element.title
        const li = document.createElement("li")
        li.textContent = ellement
        users.appendChild(li)
    });
    const jsonn = JSON.stringify(data)
    return data
}
async function completed() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    if (!res.ok) {
        const err = "We got an error trying to request the information: "
        logs.innerHTML = err
        throw new Error("Error message", res);
    }
    const data = await res.json()
    console.log(data)
    data.forEach(element => {
        const ellement = element.completed
        console.log(ellement)
        const li = document.createElement("li")
        li.textContent = ellement
        completedU.appendChild(li)
    });
    const jsonn = JSON.stringify(data)
    return data
}

button.addEventListener('click', async (e) => {
    // e.preventDefault()
    console.log("hey")
    // fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then(response => response.json())
    //     .then(json => console.log(json))
    //     console.log(json)
    showLoader()
    setTimeout(() => {
        if (consumeItems.has('gg')) {
            alert("You already have consume this information")
            console.log(consumeItems);
            return;
        }
        userlogs('gg')
        usersTitle()
        completed()
    }, 2000);
})



const modal = document.getElementById('modal')
const closeButton = document.getElementById('closeButton')
const btnPageLogs = document.getElementById('btnPageLogs')
const overlay = document.getElementById("overlay")


btnPageLogs.onclick = () => {
    showLoader()
    setTimeout(() => {
        overlay.classList.add("active");
        modal.style.display = "block";
    }, 2000);
}

closeButton.onclick = () => {
    overlay.classList.remove("active");
    modal.style.display = "none";
}

// overlay.addEventListener('click', btnClose())

window.onclick = (e) => {
    if (e.target == overlay) {
        overlay.classList.remove("active");
        modal.style.display = "none";
    }
}


