// --------function------
 let count = 0;
 let array_ =[] ;
function call_to_love()
{
    let loveCountEl = document.getElementById('love-count'); 
  count = count + 1;                              
    loveCountEl.innerText = count; 
}

function reduced_num()
{       
   
       let coin_count = document.getElementById('coin-count')
   let coin_count_num = parseInt(coin_count.innerText)
       let history_ = document.getElementById('show_history')
       history_.innerText =''
    for(let data of array_ )
    {
        
   let div = document.createElement('div')
   div.innerHTML = ` <div class="flex justify-between items-center p-4 mt-4  bg-[#FAFAFA] rounded-xl">
            <div>
                <h2 class="font-bold text-lg">${data.name}</h2>
                <p class="text-lg font-[400px] text-[#5C5C5C]">${data.num}</p>
            </div>
            <p>${new Date().toLocaleTimeString()}</p>
        </div>`

        history_.appendChild(div)

   
    }
   

    

    if(coin_count_num >= 20 )
    {
        let reduced = coin_count_num  -  20 ;
        coin_count.innerText = reduced;
        return true;
          
    }
    else{

        alert('you have not enough coin for calling...')
        return false;
    }

}

// --- love icon click section----


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
  
// ---1----
  
 document.getElementById('emergency_call').addEventListener('click',function(){
     
    let service_name = document.getElementById('emergency_tittle').innerText
  let number_s =  document.getElementById ('emergency_num').innerText
  let array_object = {
    name:service_name,
    num:number_s
  }
     array_.push(array_object)
  if(reduced_num() === true)

    {
        alert('calling ' + service_name +' '+  number_s + ' ......' )
    }
      
   

 })
//    ---2----

  document.getElementById('police_call').addEventListener('click',function(){
      
    let service_name = document.getElementById('police_tittle').innerText
  let number_s =  document.getElementById ('police_num').innerText
 let array_object = {
    name:service_name,
    num:number_s
  }
     array_.push(array_object)

    
         if(reduced_num() === true)

    {
        alert('calling ' + service_name +' '+  number_s + ' ......' )
    }
 })

// -----3------

  document.getElementById('fire_call').addEventListener('click',function(){
      
    let service_name = document.getElementById('fire_tittle').innerText
  let number_s =  document.getElementById ('fire_num').innerText
   let array_object = {
    name:service_name,
    num:number_s
  }
     array_.push(array_object)

      if(reduced_num() === true)

    {
        alert('calling ' + service_name +' '+  number_s + ' ......' )
    }
 })

//  --------------4------------------

  document.getElementById('ambulance_call').addEventListener('click',function(){
      
    let service_name = document.getElementById('ambulance_tittle').innerText
  let number_s =  document.getElementById ('ambulance_num').innerText

     let array_object = {
    name:service_name,
    num:number_s
  }
     array_.push(array_object)

         if(reduced_num() === true)

    {
        alert('calling ' + service_name +' '+  number_s + ' ......' )
    }
 })

//  ----5----
 //  ----6-----

  document.getElementById('wc_call').addEventListener('click',function(){
      
    let service_name = document.getElementById('wc_tittle').innerText
  let number_s =  document.getElementById ('wc_num').innerText
   let array_object = {
    name:service_name,
    num:number_s
  }
     array_.push(array_object)

    
      if(reduced_num() === true)

    {
        alert('calling ' + service_name +' '+  number_s + ' ......' )
    }
 })

 //  ----6-----

  document.getElementById('anti_call').addEventListener('click',function(){
      
    let service_name = document.getElementById('anti_tittle').innerText
  let number_s =  document.getElementById ('anti_num').innerText
   let array_object = {
    name:service_name,
    num:number_s
  }
     array_.push(array_object)

    
          if(reduced_num() === true)

    {
        alert('calling ' + service_name +' '+  number_s + ' ......' )
    }
 })

 document.getElementById('clear_all').addEventListener('click',function () {
    
    document.getElementById('show_history').innerHTML = ' ' 
     array_ =[ ] 
 })
   



  