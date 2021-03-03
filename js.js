
//alert("If you are not versed with properties of relations check out this link");
let x, y = [],
    z = [];
let x2 = [];

let speed;


let input = (data) => {
//    document.querySelector(".results").textContent = ' ';
    let x1 = (document.querySelector(".USET").value);
    x1 = x1.split(",");
    x = (x1.map(x => +x));
    console.log(x);
}


let input2 = () => {
//    document.querySelector(".results").textContent = ' ';
    let x1 = (document.querySelector(".RelationSet").value);


    for (let i = 0; i < x1.length; i += 6) {
        y.push([parseInt(x1[i + 1]), parseInt(x1[i + 3])]);
        x2.push(`(${x1[i+1]},${x1[i+3]})`);
    }
    console.log("X1", y)


    /*  x1 = x1.split(",");
     console.log(x1);
     y = (x1.map(x => +x)); */
    //console.log(y);
}

let displayRSET = (cls) => {
    document.querySelector(`${cls} .anime2`).textContent = '';
    console.log(cls, "rset", y, x2);
    for (let i = 0; i < y.length; i++) {
        let anime = document.querySelector(`${cls} .anime2`);
        let span = document.createElement('span');
        span.textContent = x2[i];
        span.classList.add("uniHolder");
        anime.appendChild(span);
    }
}
let displayUSET = (cls) => {
    document.querySelector(`${cls} .anime`).textContent = '';
    console.log(cls, "uset");
    for (let i = 0; i < x.length; i++) {
        let anime = document.querySelector(`${cls} .anime`);
        console.log("anime", anime);
        let span = document.createElement('span');
        span.textContent = x[i];
        span.classList.add("uniHolder");
        anime.appendChild(span);
    }
}



let y1 = [
    [1, 1],
    [2, 2],
    [3, 3],
    [1, 2],
    [2, 3],
    [1, 3]
];

let y2 = [
    [1, 3],
    [3, 1],
    [2, 1],
    [2, 3],
    [1, 2]
];
let reflexive = () => {
    z=[];
    let irr = 0;
    let stopped = false;
    for (let i = 0; i < x.length; i++) {
        let good = false;
        for (let j = 0; j < y.length; j++) {
            //console.log(y[j][0], x[i], y[j][1], x[i])
            if (y[j][0] == x[i] && y[j][1] == x[i]) {
                good = true;
                break;
            }
        }
        if (good == false) {
            irr++;
            stopped = true;
        }

    }
    z.push(stopped ? ["REFLEXIVE", 0] : ["REFLEXIVE", 1]);
    console.log(stopped ? "NOPE NOT REFLEXIVE" : "REFLEXIVE");
    console.log(irr);
    if (irr == x.length) {
        z.push(["IRREFLEXIVE", 1])
        console.log("IRREFLEXIVE");
    } else {
        z.push(["IRREFLEXIVE", 0])
    }


}

//========



//======


let refAni = () => {
    let irr = 0;

    let stopped = false;

    let children = document.querySelector(".anime").children;
    console.log(children);
    for (let i = 0; i < x.length; i++) {
        //        var interval = setInterval(function () {
        //            //console.log(x);
        //            clock();
        //            x++;
        //            if (x > 90) clearInterval(interval);
        //        }, 30);
        let good = false;
        for (let j = 0; j < y.length; j++) {
            //console.log(y[j][0], x[i], y[j][1], x[i])
            if (y[j][0] == x[i] && y[j][1] == x[i]) {
                good = true;
                break;
            }
        }
        if (good == false) {
            irr++;
            stopped = true;
        }

    }
    z.push(stopped ? ["REFLEXIVE", 0] : ["REFLEXIVE", 1]);
    console.log(stopped ? "NOPE NOT REFLEXIVE" : "REFLEXIVE");
    console.log(irr);
    if (irr == x.length) {
        z.push(["IRREFLEXIVE", 1])
        console.log("IRREFLEXIVE");
    } else {
        z.push(["IRREFLEXIVE", 0])
    }


}




let symmetric = () => {

    let stopped = false;
    let anti = true;
    for (let i = 0; i < y.length; i++) {
        let good = false;
        for (let j = 0; j < y.length; j++) {


            if ((y[j][0] == y[i][1] && y[j][1] == y[i][0]) && i !== j) {
                console.log(y[j][0], y[j][1], y[i][0], y[i][1])
                anti = false;
            }

            if (y[j][0] === y[j][1] || (y[j][0] == y[i][1] && y[j][1] == y[i][0])) {
                good = true;
                /* console.log(y[j][0], y[j][1], y[i][0], y[i][1]) */
                break;
            }


        }
        if (good == false) {
            stopped = true;
            break;
        }

    }
    z.push(stopped ? ["SYMMETRIC", 0] : ["SYMMETRIC", 1])
    console.log(stopped ? "NOPE NOT SYMMETRIC" : "SYMMETRIC");
    z.push(!anti ? ["ANTI-SYMMETRIC", 0] : ["ANTI-SYMMETRIC", 1])
    console.log(!anti ? "NOT ANTI SYMMETRIC" : "ANTI SYMMETRIC")
}


//(1,2),(2,1),(1,1)
let transitive = () => {


    let stopped = false;
    let anti = true;
    for (let i = 0; i < y.length; i++) {
        let good = false;
        for (let j = 0; j < y.length; j++) {
            //console.log(y[j][0], x[i], y[j][1], x[i])
            if ((y[j][0] == y[i][1])) {
                let found = y.find(element => {
                    /* console.log(element[1],y[j][1],element[0],y[i][0]) */
                    return (element[1] == y[j][1] && element[0] == y[i][0])
                });
                if (found == 0 || found) {

                    break;
                } else {
                    stopped = true;
                }
            }


        }


    }
    z.push(stopped ? ["TRANSITIVE", 0] : ["TRANSITIVE", 1]);
    console.log(stopped ? "NOT TRANSITIVE" : "TRANSITIVE");


}
let refA = (cls) => {
    console.log("called refa", document.querySelector(`${cls} .anime`))

    displayUSET(cls);
    displayRSET(cls);

    for (let i = 0; i < x.length; i++) {
        let children = document.querySelector(`${cls} .anime`).children;
        let children2 = document.querySelector(`${cls}  .anime2`).children;
        console.log("==============", children2, y)
        task(i, children[i], children2);
    }

    function task(i, child, children2) {
        //        child.classList.toggle("active");
        setTimeout(function () {




            let current = document.querySelector(`${cls} .current`);
            let span = document.createElement('span');
            span.textContent = child.textContent;
            span.classList.add("uniHolder");
            current.textContent = 'Current element: ';
            current.appendChild(span);
            console.log("WOWO", span)

            let lookingFor = document.querySelector(`${cls} .lookingFor`);
            let span2 = document.createElement('span');
            span2.textContent = `(${child.textContent},${child.textContent})`;
            span2.classList.add("uniHolder");
            lookingFor.textContent = 'Looking for: ';
            lookingFor.appendChild(span2);





            console.log(child);
            child.classList.toggle("white");
            let stop = false;
            for (let j = 0; j < children2.length && stop != true; j++) {

                setTimeout(function () {

                    console.log(children2[j])
                    children2[j].classList.toggle("white");
                    if (children2[j].textContent == `(${child.textContent},${child.textContent})`) {
                        children2[j].classList.toggle("red");
                        child.style.backgroundColor = "rgb(0 161 255)";
                    }
                    setTimeout(function () {
                        if (children2[j].classList.contains("red")) {
                            children2[j].classList.toggle("red");
                            stop = true;
                        }

                        children2[j].classList.toggle("white");




                    }, 1000 / speed);


                }, 1000 * j / speed);
                if (stop === true) {
                    break;
                }

            }

            //(1,2),(2,3),(3,3),(1,1),(4,4),(5,5)
            setTimeout(function () {

                child.classList.toggle("white");
                //                lookingFor.textContent = 'Looking for: ';
                //                current.textContent = 'Current element: ';
                console.log(lookingFor, current);

            }, children2.length * 1000 / speed);

        }, children2.length * 1000 * i / speed);

    }
    //
    //    z = [];
    //    x = [], y = [];
}
let symA = (cls) => {
    displayRSET(cls);
    for (let i = 0; i < y.length; i++) {
        let children = document.querySelector(`${cls} .anime2`).children;
        //        console.log(children2, y)

        //        document.querySelector(".current").textContent = "Current element: " + children2[i].textContent;
        task(i, children);
        //        console.log(document.querySelector(".current").textContent);
    }

    function task(i, children2) {
        //        child.classList.toggle("active");
        console.log("sym=======",children2);
        setTimeout(function () {
            children2[i].classList.toggle("white");
            let stop = false;



            let current = document.querySelector(`${cls} .current`);
            let span = document.createElement('span');
            span.textContent = children2[i].textContent;
            span.classList.add("uniHolder");
            current.textContent = 'Current element: ';
            current.appendChild(span);
            console.log("WOWO", span)

            let lookingFor = document.querySelector(`${cls} .lookingFor`);
            let span2 = document.createElement('span');
            span2.textContent = `(${children2[i].textContent[3]},${children2[i].textContent[1]})`
            span2.classList.add("uniHolder");
            lookingFor.textContent = 'Looking for: ';
            lookingFor.appendChild(span2);





            for (let j = 0; j < children2.length && stop != true; j++) {

                setTimeout(function () {

                    //                    console.log(children2[j])

                    children2[j].classList.toggle("active");

                    if (children2[j].textContent == `(${children2[i].textContent[3]},${children2[i].textContent[1]})`) {
                        children2[j].classList.toggle("red");
                        if (children2[i].classList.contains("white") && i != j) {
                            children2[i].classList.toggle("red");
                            children2[i].classList.toggle("white");
                        }
                        if (children2[i].classList.contains("white") && i == j) {
                            children2[i].classList.toggle("white");
                        }
                        //                        child.style.backgroundColor = "#56ff00";
                    }
                    setTimeout(function () {
                        if (children2[j].classList.contains("white") && children2[j].classList.contains("red")) {
                            //                            console.log(children2[i].classList,children2[i].textContent);
                            children2[j].classList.toggle("white");
                            //                            stop = true;
                        }
                        //                        console.log(children2[i].classList,children2[i].textContent);

                        children2[j].classList.toggle("active");




                    }, 1000 / speed);



                }, 1000 * j / speed);
                //                if (stop === true) {
                //                    break;
                //                }

            }




            //(1,2),(2,3),(3,3),(1,1),(4,4),(5,5)
            setTimeout(function () {
                for (let x = 0; x < children2.length; x++) {
                    //                    console.log(children2[x])
                    if (children2[x].classList.contains("red")) {
                        children2[x].classList.toggle("red");

                        //                        children2[i].classList.toggle("white");
                    }
                    //                    if (children2[x].classList.contains("active")) {
                    //                    children2[x].classList.toggle("active");
                    //                }
                    //                    if(children2[x].classList.contains("active")){
                    //                        children2[x].classList.toggle("active");
                    //                    }
                    //                                    if (children2[x].classList.contains("white")) {
                    //                                        children2[x].classList.toggle("white");
                    //                    
                    //                                    }
                }
                if (children2[i].classList.contains("white")) {
                    children2[i].classList.toggle("white");
                }

                //                lookingFor.textContent = 'Looking for: ';
                //                current.textContent = 'Current element: ';

                //                for (let x = 0; x < children2.length; x++) {
                //                    if (children2[x].classList.contains("white")) {
                //                        children2[x].classList.toggle("white");
                //
                //                    }
                //                }

            }, children2.length * 1000 / speed);

        }, children2.length * 1000 * i / speed);

    }
}
let transA = () => {

    for (let i = 0; i < x.length; i++) {
        let children = document.querySelector(".anime").children;
        let children2 = document.querySelector(".anime2").children;
        console.log(children2, y)
        task(i, children[i], children2);
    }

    function task(i, child, children2) {
        //        child.classList.toggle("active");
        setTimeout(function () {




            let current = document.querySelector(".current");
            let span = document.createElement('span');
            span.textContent = child.textContent;
            span.classList.add("uniHolder");
            current.textContent = 'Current element: ';
            current.appendChild(span);
            console.log("WOWO", span)

            let lookingFor = document.querySelector(".lookingFor");
            let span2 = document.createElement('span');
            span2.textContent = `(${child.textContent},${child.textContent})`;
            span2.classList.add("uniHolder");
            lookingFor.textContent = 'Looking for: ';
            lookingFor.appendChild(span2);





            console.log(child);
            child.classList.toggle("white");
            let stop = false;
            for (let j = 0; j < children2.length && stop != true; j++) {

                setTimeout(function () {

                    console.log(children2[j])
                    children2[j].classList.toggle("white");
                    if (children2[j].textContent == `(${child.textContent},${child.textContent})`) {
                        children2[j].classList.toggle("red");
                        child.style.backgroundColor = "rgb(0 161 255)";
                    }
                    setTimeout(function () {
                        if (children2[j].classList.contains("red")) {
                            children2[j].classList.toggle("red");
                            stop = true;
                        }

                        children2[j].classList.toggle("white");




                    }, 1000 / speed);


                }, 1000 * j / speed);
                if (stop === true) {
                    break;
                }

            }

            //(1,2),(2,3),(3,3),(1,1),(4,4),(5,5)
            setTimeout(function () {

                child.classList.toggle("white");
                //                lookingFor.textContent = 'Looking for: ';
                //                current.textContent = 'Current element: ';
                console.log(lookingFor, current);

            }, children2.length * 1000 / speed);

        }, children2.length * 1000 * i / speed);

    }
}


run = () => {
    z=[];
    x=[],y=[];
    x2=[];
    document.querySelector("div.results").innerHTML=' ';
    speed = document.querySelector(".speed").value;
    input();
    input2();
    console.log(y);
    //    refA();
    //    symA();
    reflexive();
    symmetric();
    transitive();

    console.log(z);
    let element = document.querySelector(".results");
    element.innerHTML = "";
    console.log(z);
    for (let i = 0; i < z.length; i++) {
        let div = document.createElement("div");
        div.classList.add(z[i][0]);
        div.innerHTML = `<h3 style="font-family: Verdana;">${div.classList[0]} <i class="fas ${z[i][1]?"fa-check":"fa-times"} fa-1x"></i></h3><div style="display:none" class="hidden"><div class="anime"></div><div class="anime2" style="padding-top:100px;padding-bottom:50px;text-align: center"></div><div style="text-align:left" class="current">Current Element: </div><div style="text-align:left" class="lookingFor">Looking for: </div></div>`;
        div.addEventListener('click', () => {


            if (document.querySelector(`.${div.classList[0]} > div.hidden`).style.display == "none") {
                document.querySelector(`.${div.classList[0]} >  div.hidden`).style.display = "block";
                document.querySelector(`.${div.classList[0]} >  div.hidden`).style.paddingBottom="20px";
                if (div.classList[0] == "REFLEXIVE" || div.classList[0] == "IRREFLEXIVE") {
                    refA(`.${div.classList[0]} >  div.hidden > `);
                }else if(div.classList[0]=="SYMMETRIC" || div.classList[0]=="ANTI-SYMMETRIC"){
                    symA(`.${div.classList[0]} >  div.hidden > `);
                }






            } else {
                document.querySelector(`.${div.classList[0]} > div.hidden`).style.display = "none";
                document.querySelector(`.${div.classList[0]} >  div.hidden`).style.paddingBottom="0px";
            }
            //            if (div.innerHTML.length < 100) {
            //                document.querySelector(".hidden").style.display="block";
            //            } else {
            //                document.querySelector(".hidden").style.display="none";
            //            }

        })
        //        div.appendChild(para);
        //        para.appendChild(icon);
        element.appendChild(div);


    }

}
