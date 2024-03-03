let calculateBtn = document.getElementById("calculate-btn");
let result = document.getElementById("result");
let calculate = () => {
    let p = Number(document.getElementById("principal").value);
    let r = Number(document.getElementById("rate").value);
    let t = Number(document.getElementById("time").value);
    let duration = document.getElementById("duration").value;

    console.log(p, r, t, duration);
    let simpleInterest = duration == "year" ? (p*r*t) / 100 : (p*r*t) / 1200;
    let amount = p + simpleInterest;
    result.innerHTML = `<div> PRINCIPAL AMOUNT: <span>Rs ${
        p.toFixed(2)
    }</span></div>
    <div> TOTAL INTEREST: <span>Rs ${simpleInterest.toFixed(2)
    }</span></div>
    <div> TOTAL AMOUNT: <span>Rs ${amount.toFixed(2)
    }</span></div>`;
};
calculateBtn.addEventListener("click",calculate);
window.addEventListener("load", calculate);