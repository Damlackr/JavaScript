const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.reserved');

container.addEventListener('click',function(e){
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){
        e.target.classList.toggle('selected');
        calculateTotal();
    }
});

select.addEventListener('change', function(e){
    calculateTotal();
})

function calculateTotal(){
        const selectedSeats = container.querySelectorAll('.seat.selected');
        const selectedSeatArr = [];
        const seatsArr = [];

        selectedSeats.forEach(function(seat){
            selectedSeatArr.push(seat);
        });

        //spread modern javada

        seats.forEach(function(seat){
            seatsArr.push(seat);
        });


        //[1,3,5]
        let selectedSeatIndexs = selectedSeatArr.map(function(seat){
            return seatsArr.indexOf(seat);
        });

        
        
        let selectedSeatCount = container.querySelectorAll('.seat.selected').length;    
        count.innerText = selectedSeatCount;
        amount.innerText = selectedSeatCount * select.value;
        //console.log(price);

        saveToLocalStroage(selectedSeatIndexs);       
}

function saveToLocalStroage(index){
    localStorage.setItem('selectedSeats',JSON.stringify(index));
    localStorage.setItem('selectedMovieIndex', select.selectedIndex);
}



