// const disp1 = document.getElementsByClassName("hiddenElement");
// const togelem = document.getElementsByClassName('tog1');


// disp1.addEventListener( 'mouseover', () =>{
//     togelem.style.display = "block";
// }

// );

// disp1.addEventListener('mouseout', () =>{
//     togelem.style.display = "hidden";
// }
// );


        // Get the trigger and hidden elements
        const triggerElement = document.getElementById('trigger-element');
        const hiddenElement = document.getElementById('hidden-element');

        // Add event listener for hover
        triggerElement.addEventListener('mouseover', () => {
            hiddenElement.style.display = 'flex';
        });

        triggerElement.addEventListener('mouseout', () => {
            hiddenElement.style.display = 'none';
        });

