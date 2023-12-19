import React from 'react'

function ScrollToTop() {
    window.onscroll = function(){
        if (window.scrollY > 1300){
            document.getElementById('scroll-to-top').style.display='block'
        }else{
            document.getElementById('scroll-to-top').style.display='none'
        }
    };
const toTop=()=>{
window.scrollTo({
    top:0,
    behavior:'smooth'
})
}
  return (
   <>
   <div id="scroll-to-top" onClick={toTop} style={{display:'none'}}>
        <span>
        <svg stroke="currentColor" fill="white"  viewBox="0 0 320 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M313.553 119.669L209.587 7.666c-9.485-10.214-25.676-10.229-35.174 0L70.438 119.669C56.232 134.969 67.062 160 88.025 160H152v272H68.024a11.996 11.996 0 0 0-8.485 3.515l-56 56C-4.021 499.074 1.333 512 12.024 512H208c13.255 0 24-10.745 24-24V160h63.966c20.878 0 31.851-24.969 17.587-40.331z"></path></svg>
        </span>
    </div>
   </>
  )
}

export default ScrollToTop