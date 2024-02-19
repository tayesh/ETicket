function scrollToBooking() {
    const bookingSection = document.getElementById('booking');
    bookingSection.scrollIntoView({ behavior: 'smooth' });
}
let selection = [];
const couponButton = document.getElementById('apply');
const couponCont = document.getElementById("couponContainer");
const seatNames = document.getElementsByClassName("seat");
const nextbtn = document.getElementById('next');
for (const seat of seatNames) {
    seat.addEventListener("click", function (event) {
        // console.log(event.target);
        const selectedSeat = event.target;
        const name = selectedSeat.innerText;

        if (selection.length <= 4) {
            // selection.push(selectedSeat.innerText);
            // selectedSeat.classList.remove('text-gray-400')
            // selectedSeat.classList.add('bg-[#1DD100]','hover:bg-[#1DD100CC]','text-white');
            if (selection.includes(name)) {
                selectedSeat.classList.remove('bg-[#1DD100]', 'hover:bg-[#1DD100CC]', 'text-white');
                selectedSeat.classList.add('text-gray-400');
                const index = selection.indexOf(name)
                selection.splice(index, 1);
                console.log(selection);
            }
            else if (selection.length < 4) {
                selection.push(name);
                selectedSeat.classList.remove('text-gray-400')
                selectedSeat.classList.add('bg-[#1DD100]', 'hover:bg-[#1DD100CC]', 'text-white');
                console.log(selection);

            }
            else {
                alert("You can only select 4 seats at a time.You must deselect one to select another seat");

            }
        }
        empty();
        insert();
        countTotal();
        setSeatCount();
        if (selection.length == 4) {
            couponButton.disabled = false;
        }
        if (selection.length < 4) {
            nextbtn.disabled = true;
            if (selection.length > 0) {
                nextbtn.disabled = false;
            }
            if (couponCont.classList.contains("hidden")) {
                couponCont.classList.remove("hidden");
                couponButton.disabled = true;

            }
        }








    })
}
function empty() {
    const parentElement = document.getElementById("selectedList");

    // Loop through each child element and remove it
    while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }

}
function insert() {
    selection.forEach(
        element => {
            const div = document.createElement('div');
            const p1 = document.createElement('p');
            const p2 = document.createElement('p');
            const p3 = document.createElement('p');
            p1.innerText = element;
            p2.innerText = "Economy";
            p3.innerText = "550"
            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(p3);
            div.classList.add("flex", "justify-between", "text-xl", "font-semibold", "pb-4");
            const selectionContainer = document.getElementById('selectedList');
            selectionContainer.appendChild(div);
        }
    )

}
function countTotal() {
    const price = 550;
    const total = price * selection.length;
    const totalText = document.getElementById("total");
    const grandTotalText = document.getElementById("grandTotal");
    totalText.innerText = total;
    grandTotalText.innerText = total;
}
function setSeatCount() {
    const num = document.getElementById("seatCount");
    const remaining = document.getElementById("reamaining");
    num.innerText = selection.length;
    const total = 40 - selection.length;
    remaining.innerText = total;

}
function couponCount() {
    const grandTotalText = document.getElementById("grandTotal");
    const errMsg = document.getElementById("err");
    while (errMsg.firstChild) {
        errMsg.removeChild(errMsg.firstChild);
    }
    const p = document.createElement("p");
    p.classList.add("text-xl", "text-red-500");
    p.innerText = "**Invalid coupon**";
    let grandTotal = selection.length * 550;
    if (selection.length == 4) {
        const coupon = document.getElementById("coupon");
        couponText = coupon.value;
        const n15 = "New15";
        const c20 = "Couple20";
        if (couponText === n15) {
            grandTotal -= grandTotal * 0.15;
            couponCont.classList.add("hidden");
        }
        else if (couponText === c20) {
            grandTotal -= grandTotal * 0.20;
            couponCont.classList.add("hidden");
        }
        else {
            errMsg.append(p);
        }


    }
    grandTotalText.innerText = grandTotal;
}
couponButton.addEventListener('click', function () {
    couponCount();

})
let pname = document.getElementById('pname').value;
let num = document.getElementById('num').value;
let mail = document.getElementById('mail').value;
nextbtn.addEventListener('click', function () {
    let pname = document.getElementById('pname').value;
    let num = document.getElementById('num').value;
    let mail = document.getElementById('mail').value;

    if (pname != '' && num != '' && mail != '') {
        my_modal_4.showModal();
        console.log(pname, num, mail);
    }
    else {
        console.log(pname, num, mail);
        alert("Please fill all the requirements !!!");
    }
})
const reset = document.getElementById("reset");
reset.addEventListener('click', function () {
    pname = '';
    num = '';
    mail = '';
    let grandTotalText = document.getElementById("grandTotal").innerText;
    grandTotalText = 0;
    let totalText = document.getElementById("total").innerText;
    totalText = 0;
    let snum = document.getElementById("seatCount").innerText;
    let remaining = document.getElementById("reamaining").innerText;
    snum = 0;
    remaining = 40;


})





