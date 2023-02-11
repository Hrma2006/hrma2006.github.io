window.addEventListener('load',()=>{

    const button=document.getElementById('button');
    const body=document.querySelector('body');
    button.addEventListener('click',()=>{
        if(button.innerText=='اضغط لتفعيل الوضع المظلم'){
            button.innerText='اضغط لتفعيل الوضع المضيئ'
            button.style.backgroundColor='white'
            button.style.color='black'
            body.style.backgroundColor='black'
            
        }
        else {button.innerText='اضغط لتفعيل الوضع المظلم'

            button.style.color='white'
            button.style.backgroundColor='black'
            body.style.backgroundColor='white'

           }
    ;})
})