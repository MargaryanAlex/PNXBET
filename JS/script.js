let btn = document.querySelectorAll(".btn")
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    for (let k = 0; k < btn.length; k++) {
      btn[k].classList.remove("active")
    }
    btn[i].classList.add("active")
  })
}
let arr = [{
    icon: "fas fa-basketball-ball",
    name: "Basketball",
    bgcolor: "#40F99B",
    fcolor: "#17171c",
    arr1: [{
        data: "Today, 12:00",
        vs1: "Yifan Xu/Zhaoxuan Yang",
        bet1: "3.83",
        vs2: "Ashleigh Barty/Storm Sanders",
        bet2: "1.22",
        rating: "+3",
        game:"World- Olympic Games"
      },
      {
        data: "Today, 12:00",
        vs1: "Daniela Vismane",
        bet1: "1.09",
        vs2: "Alicia Barnett",
        bet2: "6.15",
        rating: "+2",
        game:"World- Olympic Games"

      },
      {
        data: "Today, 12:00",
        vs1: "Amina Anshba",
        bet1: "1.09",
        vs2: "Nikola Breckova",
        bet2: "6.15",
        rating: "+2",
        game:"World- Olympic Games"

      },
      {
        data: "Today, 12:00",
        vs1: "Dminik Koepfer",
        bet1: "1.64",
        vs2: "Max Purcell",
        bet2: "2.12",
        rating: "+42",
        game:"World- Olympic Games"

      },
    ]

  },
  {
    icon: "fas fa-table-tennis",
    name: "Table Tennis",
    bgcolor: "#61707D",
    fcolor: "#ffffff",
    arr1: [{
      data: "Today, 12:00",
      vs1: "Yifan Xu/Zhaoxuan Yang",
      bet1: "3.83",
      vs2: "Ashleigh Barty/Storm Sanders",
      bet2: "1.22",
      rating: "+3",
      game:"World- Olympic Games"

    },
    {
      data: "Today, 12:00",
      vs1: "Daniela Vismane",
      bet1: "1.09",
      vs2: "Alicia Barnett",
      bet2: "6.15",
      rating: "+2",
      game:"World- Olympic Games"

    },
    {
      data: "Today, 12:00",
      vs1: "Amina Anshba",
      bet1: "1.09",
      vs2: "Nikola Breckova",
      bet2: "6.15",
      rating: "+2",
      game:"World- Olympic Games"

    },
    {
      data: "Today, 12:00",
      vs1: "Dminik Koepfer",
      bet1: "1.64",
      vs2: "Max Purcell",
      bet2: "2.12",
      rating: "+42",
      game:"World- Olympic Games"

    },
    {
      data: "Today, 12:00",
      vs1: "Karolina Kubanova",
      bet1: "6.70",
      vs2: "Tereza Smitkova",
      bet2: "1.075",
      rating: "+2",
      game:"World- Olympic Games"

    },
  ]
  },
  {
    icon: "fas fa-football-ball",
    name: "Football",
    bgcolor: "#E85D75",
    fcolor: "#ffffff",
    arr1: [{
      data: "Today, 12:00",
      vs1: "Yifan Xu/Zhaoxuan Yang",
      bet1: "3.83",
      vs2: "Ashleigh Barty/Storm Sanders",
      bet2: "1.22",
      rating: "+3",
      game:"World- Olympic Games"

    },
    {
      data: "Today, 12:00",
      vs1: "Daniela Vismane",
      bet1: "1.09",
      vs2: "Alicia Barnett",
      bet2: "6.15",
      rating: "+2",
      game:"World- Olympic Games"

    },
    {
      data: "Today, 12:00",
      vs1: "Amina Anshba",
      bet1: "1.09",
      vs2: "Nikola Breckova",
      bet2: "6.15",
      rating: "+2",
      game:"World- Olympic Games"

    },
    {
      data: "Today, 12:00",
      vs1: "Dminik Koepfer",
      bet1: "1.64",
      vs2: "Max Purcell",
      bet2: "2.12",
      rating: "+42",
      game:"World- Olympic Games"

    },
  ]
  }, {
    icon: "far fa-futbol",
    name: "Football",
    bgcolor: "#F5FBEF",
    fcolor: "#17171c",
    arr1: [{
      data: "Today, 12:00",
      vs1: "Yifan Xu/Zhaoxuan Yang",
      bet1: "3.83",
      vs2: "Ashleigh Barty/Storm Sanders",
      bet2: "1.22",
      rating: "+3",
      game:"World- Olympic Games"

    },
    {
      data: "Today, 12:00",
      vs1: "Daniela Vismane",
      bet1: "1.09",
      vs2: "Alicia Barnett",
      bet2: "6.15",
      rating: "+2",
      game:"World- Olympic Games"

    },
    {
      data: "Today, 12:00",
      vs1: "Amina Anshba",
      bet1: "1.09",
      vs2: "Nikola Breckova",
      bet2: "6.15",
      rating: "+42",
      game:"World- Olympic Games"
      
    },
    {
      data: "Today, 12:00",
      vs1: "Dminik Koepfer",
      bet1: "1.64",
      vs2: "Max Purcell",
      bet2: "2.12",
      rating: "+42",
      game:"World- Olympic Games"

    },
    {
      data: "Today, 12:00",
      vs1: "Karolina Kubanova",
      bet1: "6.70",
      vs2: "Tereza Smitkova",
      bet2: "1.075",
      rating: "+2",
      game:"World- Olympic Games"

    },
  ]
  },
]
let tabCont = document.querySelector(".tabContent")
let tabPAR = document.querySelector(".tabMenuColor")
arr.forEach(elem => {
  let dv = document.createElement("button")
  dv.setAttribute("class", "tab")
  dv.innerHTML = `<i class="${elem.icon}"></i> <p>${elem.name}</p>`
  tabPAR.append(dv)
  let fontcolor = elem.fcolor
  let color = elem.bgcolor
  dv.style.backgroundColor = "#212228"
  dv.style.color = "#ffffff"
  dv.style.borderTop =`5px solid ${color}`
  let block = document.createElement("div")
  block.setAttribute("class","tab_row")
  tabCont.append(block)
  block.style.display="none"
  elem.arr1.forEach(elem2 => {
    let div = document.createElement("div")
    div.setAttribute("class","tabContent_txt")
    block.append(div)
    div.innerHTML=`<div class="data"><p>${elem2.data}</p><span>${elem2.game}</span></div><div class="vs"><div class="vsr vslt"><p>${elem2.vs1}</p><p>${elem2.bet1}</p></div><div class="vsr vsrt"><p>${elem2.vs2}</p><p>${elem2.bet2}</p></div></div><div class="rating"><p>${elem2.rating}</p></div>`
  });
  dv.addEventListener("click", function () {
    let btn2 = document.querySelectorAll(".tab")
    let bl2 =document.querySelectorAll(".tab_row")
    for (let k = 0; k < btn2.length; k++) {
      btn2[k].classList.remove("active")
      btn2[k].style.backgroundColor = "#212228"
      btn2[k].style.color = "#ffffff"
      bl2[k].style.display="none"
    }
    block.style.display="block"
    dv.classList.add("active")
    dv.style.backgroundColor = color;
    dv.style.color = fontcolor;
  })
  
});