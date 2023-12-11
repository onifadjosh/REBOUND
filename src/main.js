    //use of DOM to get the ID needed 
    const triggerElement = document.getElementById('trigger-element');
    const hiddenElement = document.getElementById('hidden-element');
    const clicke = document.getElementById('clicke');
    

    const triggerElement1 = document.getElementById('trigger-element1');
    const hiddenElement1 = document.getElementById('hidden-element1');
    const clicke1 = document.getElementById('clicke1');

    const triggerElement2 = document.getElementById('trigger-element2');
    const hiddenElement2 = document.getElementById('hidden-element2');
    const clicke2 = document.getElementById('clicke2');

    const triggerElement3 = document.getElementById('trigger-element3');
    const hiddenElement3 = document.getElementById('hidden-element3');
    const clicke3 = document.getElementById('clicke3');
    
    const triggerElement4 = document.getElementById('info-trig');
    const hiddenElement4 = document.getElementById('info-hidden');
    const clicke4 = document.getElementById('clicke4');

    // Add event listener for hover especially for the large screen menu
    triggerElement.addEventListener('mouseover', () => {
        hiddenElement.style.display = 'block';
    });

    
    // click event listener for menu in small screens (new)
    triggerElement.addEventListener('click', ()=>{
        if(clicke.style.display === 'block'){
            clicke.style.display = 'none';
        } else {
            clicke.style.display = 'block';
        }
    });

    triggerElement.addEventListener('mouseout', () => {
        hiddenElement.style.display = 'none';
    });

    // Add event listener for hover on the hidden element to stay on block and and hidden when not on hover
    hiddenElement.addEventListener('mouseover', () => {
        hiddenElement.style.display = 'block';
    });

    hiddenElement.addEventListener('mouseout', () => {
        hiddenElement.style.display = 'none';
    });

    
    // break for the second hover

    // Add event listener for hover especially for the large screen menu ##2
    triggerElement1.addEventListener('mouseover', () => {
        hiddenElement1.style.display = 'block';
    });

    triggerElement1.addEventListener('mouseout', () => {
        hiddenElement1.style.display = 'none';
    });

    // Add event listener for hover on the hidden element
    hiddenElement1.addEventListener('mouseover', () => {
        hiddenElement1.style.display = 'block';
    });

    hiddenElement1.addEventListener('mouseout', () => {
        hiddenElement1.style.display = 'none';
    });

     // click event listener for menu in small screens (red)
     triggerElement1.addEventListener('click', ()=>{
        if(clicke1.style.display === 'block'){
            clicke1.style.display = 'none';
        } else {
            clicke1.style.display = 'block';
        }
    });

    //break for third hover
    // Add event listener for hover
    triggerElement2.addEventListener('mouseover', () => {
        hiddenElement2.style.display = 'block';
    });

    triggerElement2.addEventListener('mouseout', () => {
        hiddenElement2.style.display = 'none';
    });

    // Add event listener for hover on the hidden element
    hiddenElement2.addEventListener('mouseover', () => {
        hiddenElement2.style.display = 'block';
        // triggerElement.style.border = '1px solid black';
        // triggerElement.style.borderRadius = '40px';
        
    });

    hiddenElement2.addEventListener('mouseout', () => {
        hiddenElement2.style.display = 'none';
    });

    // click event listener for menu in small screens (white)
    triggerElement2.addEventListener('click', ()=>{
        if(clicke2.style.display === 'block'){
            clicke2.style.display = 'none';
        } else {
            clicke2.style.display = 'block';
        }
    });


    //break for fourth hover
    // Add event listener for hover
    triggerElement3.addEventListener('mouseover', () => {
        hiddenElement3.style.display = 'block';
    });

    triggerElement3.addEventListener('mouseout', () => {
        hiddenElement3.style.display = 'none';
    });

    // Add event listener for hover on the hidden element
    hiddenElement3.addEventListener('mouseover', () => {
        hiddenElement3.style.display = 'block';
        // triggerElement.style.border = '1px solid black';
        // triggerElement.style.borderRadius = '40px';
        
    });

    hiddenElement3.addEventListener('mouseout', () => {
        hiddenElement3.style.display = 'none';
    });

    triggerElement3.addEventListener('click', ()=>{
        if(clicke3.style.display === 'block'){
            clicke3.style.display = 'none';
        } else {
            clicke3.style.display = 'block';
        }
    });

    //break for the fifth hover menu
    triggerElement4.addEventListener('mouseover', () => {
        hiddenElement4.style.display = 'block';
    });


    triggerElement4.addEventListener('mouseout', () =>{
        hiddenElement4.style.display = 'none';
    });

    hiddenElement4.addEventListener('mouseover', () =>{
        hiddenElement4.style.display = 'block';
    });

    hiddenElement4.addEventListener('mouseout', () =>{
        hiddenElement4.style.display = 'none';
    });

    triggerElement4.addEventListener('click', ()=>{
        if(clicke4.style.display === 'block'){
            clicke4.style.display = 'none';
        } else {
            clicke4.style.display = 'block';
        }
    });
