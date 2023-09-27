const container = document.querySelector(".container");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const select = document.getElementById("movie");
const seats = document.querySelectorAll(".seat:not(.reserved)");

getFromLocalStorage();
calculateTotal();

container.addEventListener("click",function(e){
    if(e.target.classList.contains("seat") && !e.target.classList.contains("reserved")){
        e.target.classList.toggle('selected');
        calculateTotal();
    }
})

select.addEventListener('change', function(){
    calculateTotal();
})

function calculateTotal(){
    const selectedSeats = container.querySelectorAll('.seat.selected');

    const seatsArr = [];
    const selectedSeatsArr = [];

    selectedSeats.forEach(function(seat){
        selectedSeatsArr.push(seat);
    });
    console.log(selectedSeatsArr);

    seats.forEach(function(seat){
        seatsArr.push(seat);
    });

    let selectedSeatIndex = selectedSeatsArr.map(function(seat){
        return seatsArr.indexOf(seat);
    });

    let selectedSeatCount = selectedSeats.length;
    count.innerText = selectedSeatCount;
    amount.innerText = select.value * selectedSeatCount;

    saveToLocalStorage(selectedSeatIndex);
};

function saveToLocalStorage(index){
    localStorage.setItem('selectedSeats', JSON.stringify(index));
    localStorage.setItem('selectMovieIndex',JSON.stringify(select.selectedIndex));
}

function getFromLocalStorage(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    const selectMovieIndex = JSON.parse(localStorage.getItem('selectMovieIndex'))

    if(selectedSeats != null && selectedSeats.length > 0){
        seats.forEach(function(seat,index){
            if(selectedSeats.indexOf(index) > -1){
                seat.classList.toggle('selected');
            }
        });
    }

    if(selectMovieIndex != null){
        select.selectedIndex = selectMovieIndex;
    }
}