// Egor Shevchenko - 301084181. October 8, 2020

// IIFE -- immediately Invoked Function Expression
(function()
{
    function Start()
    {
        console.log("App Started...")
    }
    
    window.addEventListener("load", Start);
})