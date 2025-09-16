

async function BookStore() {
    const res = await fetch(`http://127.0.0.1:8000/library/Book/`)
    if (!res.ok) {
        throw new Error("There's a problem try to fetch the data");
        
    }
    const data = await res.json()
    console.log(data)
    return data
}
BookStore()