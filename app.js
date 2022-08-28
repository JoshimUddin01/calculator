let result_sec = document.querySelector(".result");
let numbers_click = document.querySelectorAll(".numbers");
let oparator_click = document.querySelector(".oparator");
let one_clear = document.querySelector(".clear_by_one");

let clear = document.querySelector(".clear_btn");

let calculate = (number)=>{
    result_sec.value+=number;
}

let oparator = (oparators) =>{
    result_sec.value+= oparators;
}


let show_me_result = () =>{
    try {
        result_sec.value = eval(result_sec.value);
    }
    catch (err) {
        result_sec.style.fontSize = "35px"
        result_sec.value = "invalid oparator"

        setTimeout(()=>{
            result_sec.style.fontSize = "50px"
            result_sec.value = null;

        },300)
    }
}

clear.addEventListener("click", ()=>{
    result_sec.value = null;
})

one_clear.addEventListener("click", ()=>{
    result_sec.value = result_sec.value.slice(0,-1)
})