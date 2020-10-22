// Egor Shevchenko - 301084181. October 8, 2020

// IIFE -- immediately Invoked Function Expression
(function()
{
    function Start()
    {
        console.log("App Started...")

        let deleteButtons = document.querySelectorAll('.btn-danger');
        
        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?")) 
                {
                    event.preventDefault();
                    window.location.assign('/business');
                }
            });
        }
    }
    
    window.addEventListener("load", Start);
})