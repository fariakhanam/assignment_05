// --------function------
 
function call_to_love()
{
    let loveCountEl = document.getElementById('love-count'); 
  count = count + 1;                              
    loveCountEl.innerText = count; 
}

// --- love icon click section----
let count = 0;

document.getElementById('btn_love_id').addEventListener('click', function() {
   call_to_love()
})

document.getElementById('police_button').addEventListener('click', function() {
    call_to_love() 
})

document.getElementById('fire_button').addEventListener('click', function() {
    call_to_love();
})
document.getElementById('ambulance_button').addEventListener('click', function() {
    call_to_love();
})
document.getElementById('wc_button').addEventListener('click', function() {
    call_to_love();
})
document.getElementById('Anti-Corruption_button').addEventListener('click', function() {
    call_to_love();
})


// -------call button click section------
