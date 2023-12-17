    //use of DOM to get the ID needed 
    const triggerElement = document.getElementById('trigger-element');
    const hiddenElement = document.getElementById('hidden-element');
    const clicke = document.getElementById('clicke');
    const caret = document.getElementById('caret');
    

    const triggerElement1 = document.getElementById('trigger-element1');
    const hiddenElement1 = document.getElementById('hidden-element1');
    const clicke1 = document.getElementById('clicke1');
    const caret1 = document.getElementById('caret1');

    const triggerElement2 = document.getElementById('trigger-element2');
    const hiddenElement2 = document.getElementById('hidden-element2');
    const clicke2 = document.getElementById('clicke2');
    const caret2 = document.getElementById('caret2');

    const triggerElement3 = document.getElementById('trigger-element3');
    const hiddenElement3 = document.getElementById('hidden-element3');
    const clicke3 = document.getElementById('clicke3');
    const caret3 = document.getElementById('caret3');
    
    const triggerElement4 = document.getElementById('info-trig');
    const hiddenElement4 = document.getElementById('info-hidden');
    const clicke4 = document.getElementById('clicke4');
    const caret4 = document.getElementById('caret4');

    // Add event listener for hover especially for the large screen menu
    function handleMouseOver0() {
        hiddenElement.style.display = 'block';
        }
    
        // Function to handle mouseout event
        function handleMouseOut0() {
        hiddenElement.style.display = 'none';
        }
    
        // Media query for the specified minimum screen size
        const mediaQuery0 = window.matchMedia('(min-width: 1440px)');
    
        // Check if the initial screen size meets the condition
        if (mediaQuery0.matches) {
    
        // Add event listeners only if the screen size is large
        triggerElement.addEventListener('mouseover', handleMouseOver0);
        triggerElement.addEventListener('mouseout', handleMouseOut0);
        }

    // Add event listener for hover on the hidden element to stay on block and and hidden when not on hover
    hiddenElement.addEventListener('mouseover', () => {
        hiddenElement.style.display = 'block';
    });

    hiddenElement.addEventListener('mouseout', () => {
        hiddenElement.style.display = 'none';
    });

    // click event listener for menu in small screens (new)
    triggerElement.addEventListener('click', ()=>{
        if(clicke.style.display === 'block'){
            clicke.style.display = 'none',
            triggerElement.style.backgroundColor = '#ffecbd';
            triggerElement.style.borderBottomLeftRadius = '15px',
            triggerElement.style.borderBottomRightRadius = '15px';
            caret.style.transform = 'rotate(0deg)';
        } else {
            clicke.style.display = 'block';
            triggerElement.style.backgroundColor = '#ee7623';
            triggerElement.style.borderBottomLeftRadius = '0px',
            triggerElement.style.borderBottomRightRadius = '0px';
            caret.style.transform = 'rotate(180deg)';
            
        }
    });

    
    // break for the second hover

    // Add event listener for hover especially for the large screen menu
    function handleMouseOver1() {
        hiddenElement1.style.display = 'block';
        }
    
        // Function to handle mouseout event
        function handleMouseOut1() {
        hiddenElement1.style.display = 'none';
        }
    
        // Media query for the specified minimum screen size
        const mediaQuery1 = window.matchMedia('(min-width: 1024px)');
    
        // Check if the initial screen size meets the condition
        if (mediaQuery1.matches) {
    
        // Add event listeners only if the screen size is large
        triggerElement1.addEventListener('mouseover', handleMouseOver1);
        triggerElement1.addEventListener('mouseout', handleMouseOut1);
        }


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
            clicke1.style.display = 'none',
            triggerElement1.style.backgroundColor = '#ffecbd',
            triggerElement1.style.borderBottomLeftRadius = '15px',
            triggerElement1.style.borderBottomRightRadius = '15px',
            caret1.style.transform = 'rotate(0deg)';
        } else {
            clicke1.style.display = 'block';
            triggerElement1.style.backgroundColor = '#ee7623',
            triggerElement1.style.borderBottomLeftRadius = '0px',
            triggerElement1.style.borderBottomRightRadius = '0px',
            caret1.style.transform = 'rotate(180deg)';
        }
    });

    //break for third hover
    // Add event listener for hover
    function handleMouseOver2() {
        hiddenElement2.style.display = 'block';
        }
    
        // Function to handle mouseout event
        function handleMouseOut2() {
        hiddenElement2.style.display = 'none';
        }
    
        // Media query for the specified minimum screen size
        const mediaQuery2 = window.matchMedia('(min-width: 1024px)');
    
        // Check if the initial screen size meets the condition
        if (mediaQuery2.matches) {
    
        // Add event listeners only if the screen size is large
        triggerElement2.addEventListener('mouseover', handleMouseOver2);
        triggerElement2.addEventListener('mouseout', handleMouseOut2);
        }

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
            triggerElement2.style.backgroundColor = '#ffecbd',
            triggerElement2.style.borderBottomLeftRadius = '15px',
            triggerElement2.style.borderBottomRightRadius = '15px',
            caret2.style.transform = 'rotate(0deg)';
        } else {
            clicke2.style.display = 'block';
            triggerElement2.style.backgroundColor = '#ee7623',
            triggerElement2.style.borderBottomLeftRadius = '0px',
            triggerElement2.style.borderBottomRightRadius = '0px',
            caret2.style.transform = 'rotate(180deg)';
        }
    });


    //break for fourth hover
    // Add event listener for hover
    // Function to handle mouseover event
    function handleMouseOver() {
    hiddenElement3.style.display = 'block';
    }

    // Function to handle mouseout event
    function handleMouseOut() {
    hiddenElement3.style.display = 'none';
    }

    // Media query for the specified maximum screen size
    const mediaQuery3 = window.matchMedia('(min-width: 1440px)');

    // Check if the initial screen size meets the condition
    if (mediaQuery3.matches) {
    // Get your trigger and hidden elements
    // const triggerElement3 = document.getElementById('yourTriggerElementId'); // Replace with actual ID or selector
    // const hiddenElement3 = document.getElementById('yourHiddenElementId'); // Replace with actual ID or selector

    // Add event listeners only if the screen size is large
    triggerElement3.addEventListener('mouseover', handleMouseOver);
    triggerElement3.addEventListener('mouseout', handleMouseOut);
    }

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
            clicke3.style.display = 'none',
            triggerElement3.style.backgroundColor = '#ffecbd',
            triggerElement3.style.borderBottomLeftRadius = '15px',
            triggerElement3.style.borderBottomRightRadius = '15px',
            caret3.style.transform = 'rotate(0deg)';
        } else {
            clicke3.style.display = 'block',
            triggerElement3.style.backgroundColor = '#ee7623',
            triggerElement3.style.borderBottomLeftRadius = '0px',
            triggerElement3.style.borderBottomRightRadius = '0px',
            caret3.style.transform = 'rotate(180deg)';
        }
    });

    //break for the fifth hover menu
    function handleMouseOver4() {
        hiddenElement4.style.display = 'block';
        }
    
        // Function to handle mouseout event
        function handleMouseOut4() {
        hiddenElement4.style.display = 'none';
        }
    
        // Media query for the specified minimum screen size
        const mediaQuery4 = window.matchMedia('(min-width: 1440px)');
    
        // Check if the initial screen size meets the condition
        if (mediaQuery4.matches) {
    
        // Add event listeners only if the screen size is large
        triggerElement4.addEventListener('mouseover', handleMouseOver4);
        triggerElement4.addEventListener('mouseout', handleMouseOut4);
        }

    hiddenElement4.addEventListener('mouseover', () =>{
        hiddenElement4.style.display = 'block';
    });

    hiddenElement4.addEventListener('mouseout', () =>{
        hiddenElement4.style.display = 'none';
    });

    triggerElement4.addEventListener('click', ()=>{
        if(clicke4.style.display === 'block'){
            clicke4.style.display = 'none',
            triggerElement4.style.backgroundColor = '#ffecbd',
            triggerElement4.style.borderBottomLeftRadius = '15px',
            triggerElement4.style.borderBottomRightRadius = '15px',
            caret4.style.transform = 'rotate(0deg)';
        } else {
            clicke4.style.display = 'block',
            triggerElement4.style.backgroundColor = '#ee7623',
            triggerElement4.style.borderBottomLeftRadius = '0px',
            triggerElement4.style.borderBottomRightRadius = '0px',
            caret4.style.transform = 'rotate(180deg)';
        }
    });
