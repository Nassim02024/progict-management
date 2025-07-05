document.addEventListener('DOMContentLoaded' , function () {


  // let oneproject = document.querySelector('.oneproject')
  // oneproject.addEventListener('click' , function () {
  //   console.log('te');
    
  // })


    let numperProject = document.querySelector('.numperProject')
    let detpro = document.querySelectorAll('.detpro')
    for (let i = 0; i < detpro.length; i++) {
      numperProject.innerHTML = detpro.length
     }

    // let creaited = document.querySelector('.creaited')
    // let projectname = document.querySelector('.projectname')
    // let descrpction = document.querySelector('.descrpction')
    // let Delevrydate = document.querySelector('.Delevrydate')
    // let projectteam = document.querySelector('.projectteam')
    // let Startdate = document.querySelector('.Startdate')
    // let Budget = document.querySelector('.Budget')
    // let addprobutton = document.querySelector('.addprobutton')
    // let arrproject =[]
    // addprobutton.addEventListener('click' , function () {
    //   let info = {
    //     projectname : projectname.value,
    //     descrpction : descrpction.value,
    //     Delevrydate : Delevrydate.value,
    //     projectteam : projectteam.value,
    //     Startdate : Startdate.value,
    //     Budget : Budget.value,
    //   }
    //   arrproject.push(info)
    //   creaiteonepro(info)
    //   ad(info)
    // })
    

  // function creaiteonepro(info){
  //     creaited.innerHTML = ""
  //     for (let i = 0; i < arrproject.length; i++) {
  //       let spa = document.createElement('span')
  //        spa.innerHTML = `
  //        <span>
  //        <div class="oneproject" style=" justify-content: space-around; align-items: center; gap: 115px; display: inline-flex; width:12rem;">
  //             <div class="nameproj" style="display: flex;">
  //               <img class="str" src="static/images/cticon.png">
  //               <div >${arrproject[i].projectname}</div>  
  //             </div>
  //             <div class="diti">
  //               <img src="static/images/moreicon.png" alt="">
  //             </div>
  //         </div>
  //         </span>
  //         <hr />
  //       `
  //     creaited.appendChild(spa)
  //     console.log(creaited);
  //   }
  // }

  // let diveta = document.querySelector('.diveta')
  // function ad(info) {
  //   diveta.innerHTML = ""
  //   for (let i = 0; i < arrproject.length; i++) {
  //    let spa2 =  document.createElement('span')
  //     spa2.innerHTML += `
  //     <span>
  //      <div class="detpro" style="width: 300px; padding: 12px; background: #F9FAF7; box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25); border-radius: 24px; outline: 1px rgba(0, 0, 0, 0.60) solid; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 32px; display: inline-flex; gap:10px;">
  //     <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: flex">
  //       <div style="align-self: stretch; justify-content: space-between; align-items: center; display: inline-flex">
  //         <div style="color: black; font-size: 25px; font-family: SF Pro; font-weight: 400; line-height: 30px; word-wrap: break-word">${arrproject[i].projectname}</div>
  //       </div>
  //       <div style="align-self: stretch; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 12px; display: flex">
  //         <div style="color: black; font-size: 25px; font-family: SF Pro; font-weight: 400; line-height: 30px; word-wrap: break-word"><span class="progras">100</span>%</div>
  //         <div  class="navprogras" style="width: 0;  transition:width 1s ease-in-out; height: 12px; background: #ff9513; border-radius: 15px"></div>
  //       </div>
  //     </div>
  //    </div>
  //    </span>
  //     `
  //     diveta.appendChild(spa2)
  //     console.log(diveta);
  //   }
  // }


  
  


  


  // how of aone is dane
    let progras = document.querySelectorAll('.progras') 
    let numperdone = document.querySelector('.numperdone') 
    let navprogras = document.querySelectorAll('.navprogras') 
    for (let i = 0; i < progras.length; i++) {
      if (progras[i].innerHTML == 100) {    
        progras[i].classList.add('isdone')
        let isdone = document.querySelectorAll('.isdone')
        for (let i = 0; i < isdone.length; i++) {
          numperdone.innerHTML = isdone.length
        }

        // navprogras width
        navprogras[i].classList.add("grencolor")
        navprogras[i].style.backgroundColor = "#31fc45"
        let width = progras[i].textContent
        setTimeout(() => {
          navprogras[i].style.width = width + "%"
          navprogras[i].style.transition = "width 1s ease-in-out";
        }, 700);
      }

    }

    // Not width == 100%
    for (let i = 0; i < navprogras.length; i++) {
    setTimeout(() => {
      
      navprogras[i].style.width = progras[i].innerHTML + "%"
      navprogras[i].style.transition =" width 1s ease-in-out" 
      }, 700);
    }
    
    // add numperProject
    let addcontener = document.querySelector('.addcontener')
    let creteButton = document.querySelector('.creteButton')
    let cansle = document.querySelector('.cansle')
    let contener = document.querySelector('.contener')
    creteButton.addEventListener('click' , function () {      
      addcontener.style.display = 'inline-flex'
      addcontener.style.opacity = 1
      contener.style.opacity = 0.5
      console.log('rr');
      
    })
    cansle.onclick = function () {
     addcontener.style.display = 'none'
     contener.style.opacity = 10
      
    }


    let bigcontenner = document.querySelector('.bigcontenner')
    let imgebull = document.querySelector('.imgebull')
    let chareadd = document.querySelector('.chareadd')
    let aaa = document.querySelector('.aaa')
    let d1 = document.querySelector('.d1')
    let d2 = document.querySelector('.d2')
    let home2 = document.querySelector('.home2')
    let contenerhome2 = document.querySelector('.contenerhome2')
    chareadd.addEventListener('click' , function () {

    })


  //   // taskas
    

    let addtasksbutton = document.querySelector('.addtasksbutton')
    let lertaddtaska = document.querySelector('.lertaddtaska')
    let contenerdit = document.querySelector('.contenerdit')
    let no = document.querySelector('.no')
    let all = document.querySelector('.all')
    let htmldiv = document.createElement('div')
    let moreiconimg = "static/images/moreicon.png"
    let deleticonimg = "static/images/deleticon.png"

    addtasksbutton.addEventListener('click' , function () {
      lertaddtaska.style.display = 'block'
      contenerdit.style.opacity = '0.2'
    })
    no.onclick = function () {
      lertaddtaska.style.display = 'none'
      contenerdit.style.opacity = '1'
    }



    

  //   let datapro = []
  //   let buttonadd = document.querySelector('.buttonadd')
  //   let put = document.querySelector('.put')
  //    buttonadd.addEventListener('click' , function () {
  //      let obj = {
  //       put:put.value
  //      }
  //      datapro.push(obj)
  //      creating(obj)
       
       
  //    })
  //  function creating(obj) {
  //   all.innerHTML = ""
  //   for (let i = 0; i < datapro.length; i++) {
  //     let span  = document.createElement('span')
  //       span.innerHTML = `
  //        <span>
        //   <div class="inputs">
        //        <div  class="oneinput" ><p>${datapro[i].put}</p></div>
        //          <div class="contentinp" >
        //        <div class="inprogdiv" >
        //              <div class="inprotex" >IN PROGRESS</div>
        //            </div>
        //           <div class="donediv" >
        //             <div class="donetext">DONE</div>
        //            </div>
  
        //            <div style="width: 24px; height: 24px; position: relative;">
        //                <img onclick="moreicon(${i})" class="moreicon" src="${moreiconimg}">
        //              <div onclick="deleta(${i})" class="divdelet">
        //                <img class="deleticon"   src="${deleticonimg}">
        //                 <p>Delet</p>
        //              </div>
        //            </div>
        //          </div>
        //  </div>
  //        </span>
  //       `
  //       all.appendChild(span)
        
  //     }
  //   }
    
    
  //   window.deleta = function (i) {
  //     let inputs = document.querySelectorAll('.inputs')
  //     // let moreicon = document.querySelector('.moreicon')
  //     datapro.splice(i,1)
  //     creating()
  //   }
    
  //   window.moreicon = function (i) {
  //     let divdelet = document.querySelectorAll('.divdelet')
      
  //        divdelet[i].classList.toggle('tooglemore');
      
      
      
      
    // }
  if (window.location.href == 'http://127.0.0.1:5000/dachbored') {
    let addtasksbutton = document.querySelector('.addtasksbutton')
    let selecttitle = document.querySelector('.selecttitle')
    let titletask = document.querySelector('.titletask')
    addtasksbutton.style.display = 'none'
    selecttitle.style.display = 'block'
    titletask.style.display = 'none'
  }else{
    let addtasksbutton = document.querySelector('.addtasksbutton')  
    let titletask = document.querySelector('.titletask')
    let selecttitle = document.querySelector('.selecttitle')
    addtasksbutton.style.display = 'flex'
    selecttitle.style.display = 'none'
    selecttitle.style.opacity = 0
    titletask.style.display = 'flex'
  }



  
  // اظغط على  الزر نظهر خانة اظغط خارج شاشة تحتفي

    let diti = document.querySelectorAll('.diti');

    for (let i = 0; i < diti.length; i++) {
        diti[i].addEventListener('click', function (e) {
            let card = diti[i].closest('.oneproject');
            let blackdidi = card.querySelector('.blackdidi');
            // إضافة الكلاس لإظهار المربع
            blackdidi.style.display = 'block'

            // منع انتشار الحدث حتى لا يُغلق فور الضغط على .diti
            e.stopPropagation();
        });
    }

    // حدث إغلاق المربع عند النقر خارج .blackdidi
    document.addEventListener('click', function (e) {
        let blackdidiElements = document.querySelectorAll('.blackdidi');
        
      

        for (let i = 0; i < blackdidiElements.length; i++) {
          if (!blackdidiElements[i].contains(e.target)) {
            blackdidiElements[i].style.display = 'none'
          } 
          } 
        
    });

    // منع إغلاق المربع عند الضغط داخله
    document.querySelectorAll('.blackdidi').forEach(blackdidi => {
        blackdidi.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    });


    let ditilproject = document.querySelector('.ditilproject')
    let closedditil = document.querySelector('.closedditil')
    let basebody = document.querySelector('.basebody')
    let blackdidi = document.querySelectorAll('.blackdidi')
    for (let i = 0; i < blackdidi.length; i++) {
      blackdidi[i].addEventListener('click' , function () {
        ditilproject.style.display = 'block'
        basebody.classList.add('basebody2')
        basebody.style.position='fixed'
        
      })
    }
    closedditil.addEventListener('click' , function () {
      ditilproject.style.display = 'none'
      basebody.classList.remove('basebody2')
      basebody.style.position='relative'

    })

    let nameditil = document.querySelector('.nameditil')
    let descditil = document.querySelector('.descditil')
    let teamditil = document.querySelector('.teamditil')
    let startditil = document.querySelector('.startditil')
    let deleveryditil = document.querySelector('.deleveryditil')
    let Budgetditil = document.querySelector('.Budgetditil')

    let nameoneproject = document.querySelectorAll('.nameoneproject')
    let descrpctionproject = document.querySelectorAll('.descrpctionproject')
    let teamproject = document.querySelectorAll('.teamproject')
    let Startdateproject = document.querySelectorAll('.Startdateproject')
    let Delevrydateproject = document.querySelectorAll('.Delevrydateproject')
    let Budgetproject = document.querySelectorAll('.Budgetproject')

     for (let i = 0; i < nameoneproject.length; i++) {
      blackdidi[i].addEventListener('click' , function () {
         nameditil.innerHTML =  nameoneproject[i].innerHTML  
       })
      }
     for (let i = 0; i < descrpctionproject.length; i++) {
      blackdidi[i].addEventListener('click' , function () {
        descditil.innerHTML = descrpctionproject[i].innerHTML  
       })
      }
     for (let i = 0; i < teamproject.length; i++) {
      blackdidi[i].addEventListener('click' , function () {
        teamditil.innerHTML = teamproject[i].innerHTML  
       })
      }
     for (let i = 0; i < Startdateproject.length; i++) {
      blackdidi[i].addEventListener('click' , function () {
        startditil.innerHTML = Startdateproject[i].innerHTML  
       })
      }
     for (let i = 0; i < Delevrydateproject.length; i++) {
      blackdidi[i].addEventListener('click' , function () {
        deleveryditil.innerHTML = Delevrydateproject[i].innerHTML  
       })
      }
     for (let i = 0; i < Budgetproject.length; i++) {
      blackdidi[i].addEventListener('click' , function () {
        Budgetditil.innerHTML = Budgetproject[i].innerHTML  
       })
      }


    let donediv = document.querySelectorAll('.donediv')
    let ptask = document.querySelectorAll('.ptask')
    let DONTCOMPLATE = document.querySelectorAll('.DONTCOMPLATE')

    for (let i = 0; i < donediv.length; i++) {
      donediv[i].addEventListener('click' , function () {
         ptask[i].style.textDecoration = 'line-through'
         if (ptask[i].style.textDecoration = 'line-through') {
          ptask[i].classList.add('decoration')
         }
         
        

         

      let decoration = document.querySelectorAll('.decoration')
      let tasks = document.querySelectorAll('.tasks')
      for (let i = 0; i < decoration.length; i++) {
        let numperdon = decoration.length
        let prosentage =   numperdon * 100
        let fun = prosentage / tasks.length
        
        console.log(fun);
        let progras = document.querySelectorAll('.progras')
         
        console.log(progras[i].innerHTML);
      
        
      }
      })
    }

    for (let i = 0; i < donediv.length; i++) {
      DONTCOMPLATE[i].addEventListener('click' , function () {
        ptask[i].style.textDecoration = 'none'
        ptask[i].classList.remove('decoration')
        // getprog()
      })
      
    }
    
    // donediv[i].addEventListener('click' , function() {
      // let decoration = document.querySelectorAll('.decoration')
      // let tasks = document.querySelectorAll('.tasks')
      // for (let i = 0; i < decoration.length; i++) {
      //   let numperdon = decoration.length
      //   let prosentage =   numperdon * 100
      //   let fun = prosentage / tasks.length
      //   console.log('1' + fun);
        
      //   var data ={
      //     state : fun
      //   }
      //   console.log('2' +  data.json());

      //   fetch('/setproject',{
      //     method : 'POST',
      //     body:JSON.stringify(data),
      //     cache: 'no-cache',
      //     headers:{
      //       'content-type':'applecation/json'
      //     }
      //   })
      //   .then(response => response.json())
      //   .then(data => {
      //         console.log(data);
        
      //       });
        // }  
      // console.log('yes');
      
    // })  

  // function getprog() {
  //   let prograsho = document.querySelectorAll('.prograsho')
  //   for (let i = 0; i < prograsho.length; i++) {
  //    console.log(prograsho[i]);
  
  //     }
  // }

  let numbertasks = document.querySelector('.numbertasks')
  let tasks = document.querySelectorAll('.tasks')
  numbertasks.innerHTML = tasks.length
  

})
