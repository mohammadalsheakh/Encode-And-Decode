class Encoding {
    constructor() {

    }
    Encoding_Mehod(selector, inner, outer) {
        if (selector.value == `encode`) {
            outer.value = window.btoa(inner.value)
        }
        else if (selector.value == `decode`) {
            outer.value = window.atob(inner.value)


        }
        else alert(`pleas chose`)
    }
}

let selector = document.getElementById(`selector`)
let inner = document.getElementById(`inner`)
let outer = document.getElementById(`outer`)
let trail = new Encoding()
inner.oninput = () => {
    onload = trail.Encoding_Mehod(selector, inner, outer)
}
selector.onchange = () => {
    onload = trail.Encoding_Mehod(selector, inner, outer)
}

