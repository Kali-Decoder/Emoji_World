import Emoji from './emoji.js';
// console.log(Emoji);

const result=document.querySelector(".result");
const btn=document.querySelectorAll(".mt-1");
btn.forEach((ele)=>{
    ele.addEventListener('click',()=>{
      
        document.querySelector(".result").innerHTML='';
        if(ele.innerHTML===`Smileys &amp; Emotion`)
        {
        var array=Emoji.filter((e)=> {
                return e.category==="Smileys & Emotion";
        });

             array.forEach((item)=>{
           var div= `
           <div class="col-lg-3 col-6 col-md-3 mt-3 col-sm-6 col-xs-6 mx-auto ">
            <div class="box">
        <div class="emoji-box">
            ${item.emoji}
        </div>
        <h5 class="text-capitalize mt-2 text-center" style="font-family: 'Hina Mincho', serif; font-weight: 900;">${item.description}</h5>
    </div>
    </div>
    `;
            document.querySelector(".result").innerHTML+=div;
        })
        
    };
    if(ele.innerHTML===`Smileys &amp; Emotion`)
        {
        var array=Emoji.filter((e)=> {
                return e.category==="Smileys & Emotion";
        });

             array.forEach((item)=>{
           var div= `
           <div class="col-lg-3 col-6 col-md-3 mt-3 col-sm-6 col-xs-6 mx-auto ">
            <div class="box">
        <div class="emoji-box">
            ${item.emoji}
        </div>
        <h5 class="text-capitalize mt-2 text-center" style="font-family: 'Hina Mincho', serif; font-weight: 900;">${item.description}</h5>
    </div>
    </div>
    `;
    console.log(div);
            document.querySelector(".result").innerHTML+=div;
        })
        
    }
    if(ele.innerHTML===`People &amp; Body`)
        {
        var array=Emoji.filter((e)=> {
                return e.category==="People & Body";
        });

             array.forEach((item)=>{
           var div= `
           <div class="col-lg-3 col-6 col-md-3 mt-3 col-sm-6 col-xs-6 mx-auto ">
            <div class="box">
        <div class="emoji-box">
            ${item.emoji}
        </div>
        <h5 class="text-capitalize mt-2 text-center" style="font-family: 'Hina Mincho', serif; font-weight: 900;">${item.description}</h5>
    </div>
    </div>
    `;
            document.querySelector(".result").innerHTML+=div;
        })
        
    }
    if(ele.innerHTML===`Animals &amp; Nature`)
        {
        var array=Emoji.filter((e)=> {
                return e.category==="Animals & Nature";
        });

             array.forEach((item)=>{
           var div= `
           <div class="col-lg-3 col-6 col-md-3 mt-3 col-sm-6 col-xs-6 mx-auto ">
            <div class="box">
        <div class="emoji-box">
            ${item.emoji}
        </div>
        <h5 class="text-capitalize mt-2 text-center" style="font-family: 'Hina Mincho', serif; font-weight: 900;">${item.description}</h5>
    </div>
    </div>
    `;
            document.querySelector(".result").innerHTML+=div;
        })
        
    }
    if(ele.innerHTML===`Food &amp; Drink`)
        {
        var array=Emoji.filter((e)=> {
                return e.category==="Food & Drink";
        });

             array.forEach((item)=>{
           var div= `
           <div class="col-lg-3 col-6 col-md-3 mt-3 col-sm-6 col-xs-6 mx-auto ">
            <div class="box">
        <div class="emoji-box">
            ${item.emoji}
        </div>
        <h5 class="text-capitalize mt-2 text-center" style="font-family: 'Hina Mincho', serif; font-weight: 900;">${item.description}</h5>
    </div>
    </div>
    `;
            document.querySelector(".result").innerHTML+=div;
        })
        
    }
    if(ele.innerHTML===`Travel &amp; Places`)
        {
        var array=Emoji.filter((e)=> {
                return e.category==="Travel & Places";
        });

             array.forEach((item)=>{
           var div= `
           <div class="col-lg-3 col-6 col-md-3 mt-3 col-sm-6 col-xs-6 mx-auto ">
            <div class="box">
        <div class="emoji-box">
            ${item.emoji}
        </div>
        <h5 class="text-capitalize mt-2 text-center" style="font-family: 'Hina Mincho', serif; font-weight: 900;">${item.description}</h5>
    </div>
    </div>
    `;
            document.querySelector(".result").innerHTML+=div;
        })
        
    }
    if(ele.innerHTML===`Activities`)
        {
        var array=Emoji.filter((e)=> {
                return e.category==="Activities";
        });

             array.forEach((item)=>{
           var div= `
           <div class="col-lg-3 col-6 col-md-3 mt-3 col-sm-6 col-xs-6 mx-auto ">
            <div class="box">
        <div class="emoji-box">
            ${item.emoji}
        </div>
        <h5 class="text-capitalize mt-2 text-center" style="font-family: 'Hina Mincho', serif; font-weight: 900;">${item.description}</h5>
    </div>
    </div>
    `;
            document.querySelector(".result").innerHTML+=div;
        })
        
    }
    if(ele.innerHTML===`Objects`)
        {
        var array=Emoji.filter((e)=> {
                return e.category==="Objects";
        });

             array.forEach((item)=>{
           var div= `
           <div class="col-lg-3 col-6 col-md-3 mt-3 col-sm-6 col-xs-6 mx-auto ">
            <div class="box">
        <div class="emoji-box">
            ${item.emoji}
        </div>
        <h5 class="text-capitalize mt-2 text-center" style="font-family: 'Hina Mincho', serif; font-weight: 900;">${item.description}</h5>
    </div>
    </div>
    `;
            document.querySelector(".result").innerHTML+=div;
        })
        
    }
    if(ele.innerHTML===`Symbols`)
        {
        var array=Emoji.filter((e)=> {
                return e.category==="Symbols";
        });

             array.forEach((item)=>{
           var div= `
           <div class="col-lg-3 col-6 col-md-3 mt-3 col-sm-6 col-xs-6 mx-auto ">
            <div class="box">
        <div class="emoji-box">
            ${item.emoji}
        </div>
        <h5 class="text-capitalize mt-2 text-center" style="font-family: 'Hina Mincho', serif; font-weight: 900;">${item.description}</h5>
    </div>
    </div>
    `;
            document.querySelector(".result").innerHTML+=div;
        })
        
    }
    if(ele.innerHTML===`Flags`)
        {
        var array=Emoji.filter((e)=> {
                return e.category==="Flags";
        });

             array.forEach((item)=>{
           var div= `
           <div class="col-lg-3 col-6 col-md-3 mt-3 col-sm-6 col-xs-6 mx-auto ">
            <div class="box">
        <div class="emoji-box">
            ${item.emoji}
        </div>
        <h5 class="text-capitalize mt-2 text-center" style="font-family: 'Hina Mincho', serif; font-weight: 900;">${item.description}</h5>
    </div>
    </div>
    `;
            document.querySelector(".result").innerHTML+=div;
        })
        
    }
   
   
    
    });
})
