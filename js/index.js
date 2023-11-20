(() => {
    console.log("Server is running !")

    let result = [
        {
            id: 0,
            description: "Boult Airbass 2",
            price: 2000,
            category: "exp-cate"
        },
        {
            id: 1,
            description: "I Pad Mini ",
            price: 80000,
            category: "exp-dn"
        }
    ]
    

    function renderElect() {
        try {} catch(e) {
            console.log(
                "Error Occured ", e
            )
        }
    }

    function renderDN() {
        try {} catch(e) {
            console.log(
                "Error Occured ", e
            )
        }
    }

    function renderGrooming() {
        try {} catch(e) {
            console.log(
                "Error Occured ", e
            )
        }
    }

    function renderUI(desc, cate, price){
        console.log(desc, cate, price)
        try {
            let el = document.createElement("div")
            el.innerHTML = `<div>${desc}</div>
                            <div>${price}/-</div>`

            document.querySelector(`#${cate}`).appendChild(el)
        } catch(e){
            console.log("Error Occured !", e)
        }
    }

    let expenseForm = document.querySelector("#expenseForm")
    let expenseDesc = document.querySelector("#expenseDesc")
    let expenseCat = document.querySelector("#expenseCat")
    let expensePrice = document.querySelector("#expensePrice")

    
    expenseForm.addEventListener("submit", (e) => {
        e.preventDefault()

        result.push(
            expenseDesc.value,
            expenseCat.value,
            expensePrice.value
        )

        renderUI(
            expenseDesc.value,
            expenseCat.value,
            expensePrice.value
        )

    })

    const fetchList = () => {
        result.forEach(el => {
            renderUI(el.description, el.category, el.price)
        })
    }

    fetchList()

        
})()