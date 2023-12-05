    // Get the trigger and hidden elements
    // const trigger = ['trigger-element', 'trigger-element1'];
    // const selectedArray = Array.from(document.querySelectorAll(idsToSelect.map(id => `#${id}`)))
    const triggerElement = document.getElementById('trigger-element');
    const hiddenElement = document.getElementById('hidden-element');
    

    const triggerElement1 = document.getElementById('trigger-element1');
    const hiddenElement1 = document.getElementById('hidden-element1');

    const triggerElement2 = document.getElementById('trigger-element2');
    const hiddenElement2 = document.getElementById('hidden-element2');

    const triggerElement3 = document.getElementById('trigger-element3');
    const hiddenElement3 = document.getElementById('hidden-element3');
    
    const triggerElement4 = document.getElementById('info-trig');
    const hiddenElement4 = document.getElementById('info-hidden');

    // Add event listener for hover
    triggerElement.addEventListener('mouseover', () => {
        hiddenElement.style.display = 'block';
    });

    triggerElement.addEventListener('mouseout', () => {
        hiddenElement.style.display = 'none';
    });

    // Add event listener for hover on the hidden element
    hiddenElement.addEventListener('mouseover', () => {
        hiddenElement.style.display = 'block';
        // triggerElement.style.border = '1px solid black';
        // triggerElement.style.borderRadius = '40px';
        
    });

    hiddenElement.addEventListener('mouseout', () => {
        hiddenElement.style.display = 'none';
    });

    
    // break for the second hover

    // Add event listener for hover
    triggerElement1.addEventListener('mouseover', () => {
        hiddenElement1.style.display = 'block';
    });

    triggerElement1.addEventListener('mouseout', () => {
        hiddenElement1.style.display = 'none';
    });

    // Add event listener for hover on the hidden element
    hiddenElement1.addEventListener('mouseover', () => {
        hiddenElement1.style.display = 'block';
        // triggerElement.style.border = '1px solid black';
        // triggerElement.style.borderRadius = '40px';
        
    });

    hiddenElement1.addEventListener('mouseout', () => {
        hiddenElement1.style.display = 'none';
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