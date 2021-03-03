//alert("If you are not versed with properties of relations check out this link");
let x, y = [],
    z = [];
let x2 = [];

let formatter = (str) => {
    if (str == "ANTI-SYMMETRIC") {
        return "Anti-Symmetric";
    } else return str[0].toUpperCase() + str.slice(1).toLowerCase();
}


let speed;
speed = .5;
document.querySelector("#speed").addEventListener('change', (el) => {
//     console.log(el.target.value);
    speed = parseFloat(el.target.value)
    //    console.log(speed)
})
document.querySelector(".reset").addEventListener('click', () => {
    Array.from((document.querySelectorAll(".uni>div>input"))).forEach(el => el.value = "");
    Array.from(document.querySelectorAll(".result>div div")).forEach(el => {
        el.children[0].value = "";
        el.children[1].value = "";
    });
    (Array.from(document.querySelector(".relation .results").children).forEach(el => {
        if (el.nodeName != "H2") {
            el.remove();
        }
    }));
    (Array.from(document.querySelector(".animation").children).forEach(el => {
        el.remove();

    }));
    document.querySelector(".animation").innerHTML = `<p style="text-align:center;font-size:20px;padding-top:10px;">Click on one of the Results to see the Animation</p>`;
    //    document.querySelector("#speed").selectedIndex=1;
    document.querySelector(".animation").classList.remove("animation2");
})


document.querySelector("#rel").addEventListener('click', (el) => {
    //    console.log(el);
    document.querySelector(".result >div").insertAdjacentHTML("beforeend", '<div> (<input class="round">,<input class="round">) </div>');
    //    document.querySelector(".result >div").innerHTML+=`<div> (<input class = "round">,<input class = "round">) </div>`;

});

document.querySelector("#uni").addEventListener('click', (el) => {
    //    console.log(el);

    document.querySelector(".uni >div").insertAdjacentHTML("beforeend", `<input class="round">`)

});




let input = (data) => {
    //    document.querySelector(".results").textContent = ' ';

    let inputs = Array.from((document.querySelectorAll(".uni>div>input"))).map(el => parseInt(el.value));
    //    console.log(inputs);
    inputs = inputs.filter(el => el);
    //    console.log(inputs);

    //NEW SHIT ABOVE
    //    let x1 = (document.querySelector(".USET").value);
    //    x1 = x1.split(",");
    //    x = (x1.map(x => +x));
    x = inputs;
    //    console.log(x);
}


let input2 = () => {
    let inputs = Array.from(document.querySelectorAll(".result>div div"));
    //    console.log(inputs);
    let tempY = [];
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].children[0].value.length == 0 || inputs[i].children[1].value.length == 0) {
            break;
        }
        tempY.push([parseInt(inputs[i].children[0].value), parseInt(inputs[i].children[1].value)]);

    }
    //    console.log(tempY);

    //    document.querySelector(".results").textContent = ' ';
    //    let x1 = (document.querySelector(".RelationSet").value);
    y = tempY;
    //    console.log(y);

    //    for (let i = 0; i < x1.length; i += 6) {
    //        y.push([parseInt(x1[i + 1]), parseInt(x1[i + 3])]);
    //        x2.push(`(${x1[i+1]},${x1[i+3]})`);
    //    }


    /*  x1 = x1.split(",");
     console.log(x1);
     y = (x1.map(x => +x)); */
}

let displayRSET = (cls) => {
    document.querySelector(`.animation .anime2`).textContent = '';
    //    console.log(cls, "rset", y, x2);
    for (let i = 0; i < y.length; i++) {
        let anime = document.querySelector(`.animation .anime2`);
        let span = document.createElement('span');
        span.textContent = `(${y[i][0]},${y[i][1]})`;
        span.classList.add("uniHolder");
        anime.appendChild(span);
    }
}
let displayUSET = (cls) => {
    document.querySelector(`.animation .anime`).textContent = '';
    //    console.log(cls, "uset");
    for (let i = 0; i < x.length; i++) {
        let anime = document.querySelector(`.animation .anime`);
        //        console.log("anime", anime);
        let span = document.createElement('span');
        span.textContent = x[i];
        span.classList.add("uniHolder");
        anime.appendChild(span);
    }
}

let displayRSET2 = (cls) => {
    cls = ".animation";
    document.querySelector(`${cls} .anime`).textContent = '';
    //    console.log(cls, "rset", y, x2);
    for (let i = 0; i < y.length; i++) {
        let anime = document.querySelector(`${cls} .anime`);
        let span = document.createElement('span');
        span.textContent = `(${y[i][0]},${y[i][1]})`;
        span.classList.add("uniHolder");
        anime.appendChild(span);
    }
}
let displayRSET3 = (cls) => {
    cls = ".animation";
    document.querySelector(`${cls} .anime3`).textContent = '';
    //    console.log(cls, "rset", y, x2);
    for (let i = 0; i < y.length; i++) {
        let anime = document.querySelector(`${cls} .anime3`);
        let span = document.createElement('span');
        span.textContent = `(${y[i][0]},${y[i][1]})`;
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
    z = [];
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
    //    console.log(stopped ? "NOPE NOT REFLEXIVE" : "REFLEXIVE");
    //    console.log(irr);
    if (irr == x.length) {
        z.push(["IRREFLEXIVE", 1])
        //        console.log("IRREFLEXIVE");
    } else {
        z.push(["IRREFLEXIVE", 0])
    }


}

//========

let symmetric = () => {



    let stopped = false;
    let anti = true;


    for (let i = 0; i < y.length; i++) {
        let index = y.indexOf(y.find(el => el[0] == y[i][1] && el[1] == y[i][0]));
        if (index == -1) {
            stopped = true;
        } else if (index != i) {
            anti = false;
        }
    }

    for (let i = 0; i < y.length; i++) {
        let index = y.indexOf(y.find(el => el[0] == y[i][1] && el[1] == y[i][0]));
        if (index == -1) {
            stopped = true;
        }
    }

    for (let i = 0; i < y.length; i++) {
        let good = false;
        for (let j = 0; j < y.length; j++) {


            if ((y[j][0] == y[i][1] && y[j][1] == y[i][0]) && i !== j) {
                //                console.log(y[j][0], y[j][1], y[i][0], y[i][1])
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
    //    console.log(stopped ? "NOPE NOT SYMMETRIC" : "SYMMETRIC");
    z.push(!anti ? ["ANTI-SYMMETRIC", 0] : ["ANTI-SYMMETRIC", 1])
    //    console.log(!anti ? "NOT ANTI SYMMETRIC" : "ANTI SYMMETRIC")
}
//(1,2),(2,1),(1,1)
let transitive = () => {


    let stopped = false;
    for (let i = 0; i < y.length; i++) {
        for (let j = 0; j < y.length; j++) {
            //console.log(y[j][0], x[i], y[j][1], x[i])
            if ((y[j][0] == y[i][1])) {
                let found = y.indexOf(y.find(element => {
                    /* console.log(element[1],y[j][1],element[0],y[i][0]) */
                    return (element[1] == y[j][1] && element[0] == y[i][0])
                }));
                //                console.log("In trans ", found)
                if (found == -1) {
                    stopped = true;
                    break;
                }
            }


        }


    }
    z.push(stopped ? ["TRANSITIVE", 0] : ["TRANSITIVE", 1]);
    //    console.log(stopped ? "NOT TRANSITIVE" : "TRANSITIVE");


}

let asymmetric = () => {
    let r = 0,
        ans = 0;
    for (let i = 0; i < z.length; i++) {
        //        console.log(z[i]);
        if (z[i][0] == "IRREFLEXIVE" && z[i][1] == 1) {
            r = 1;
        }
        if (z[i][0] == "ANTI-SYMMETRIC" && z[i][1] == 1) {
            ans = 1;
        }
    }

    if (ans == 1 && r == 1) {
        z.push(["ASYMMETRIC", 1]);
    } else {
        z.push(["ASYMMETRIC", 0]);
    }

}




let refA2 = (cls) => {
    cls = ".animation"
    //    console.log("called refa", document.querySelector(`${cls} .anime`))

    displayUSET(cls);
    displayRSET(cls);
    document.querySelector(".animation").classList.remove("animation2");
    let children = document.querySelector(`.animation .anime`).children;
    let children2 = document.querySelector(`.animation  .anime2`).children;




    // Returns a Promise that resolves after "ms" Milliseconds
    const timer2 = (ms) => {
        return new Promise(res => setTimeout(res, ms))
    }

    async function timer(ms, i) {
        let found = true;
        if (ms == -1) {
            found = false;
            ms = y.length - 1;
        }
        for (let j = 0; j <= ms; j++) {




            if (found == false) {
                children2[j].classList.toggle("white");
                await timer2(1000 * speed);
                children2[j].classList.toggle("white");
            } else if (found == true) {
                if (ms != j) {
                    children2[j].classList.toggle("white");
                    await timer2(1000 * speed);
                    children2[j].classList.toggle("white");
                } else {
                    children[i].classList.toggle("red");
                    children[i].classList.toggle("white");
                    children2[j].classList.toggle("red");
                    await timer2(1000 * speed);
                    children2[j].classList.toggle("red");
                }
            }

        }
        if (found == false) {
            children[i].classList.toggle("danger");
            children[i].classList.toggle("white");
        }

        return new Promise(res => setTimeout(res, 0))
    }



    async function load() {
        let father = document.querySelector(`.animation  .stat`);
        let current = document.createElement("div");
        current.classList.add("current");
        let span = document.createElement('span');
        //        span.textContent = children[i].textContent;
        span.classList.add("uniHolder");
        current.textContent = 'Current element: ';
        current.appendChild(span);

        let lookingFor = document.createElement("div");
        let span2 = document.createElement('span');
        lookingFor.classList.add("lookingFor")
        //        span2.textContent = `(${children[i].textContent},${children[i].textContent})`;
        span2.classList.add("uniHolder");
        lookingFor.textContent = 'Looking for: ';
        lookingFor.appendChild(span2);
        father.appendChild(current);
        father.appendChild(lookingFor);

        // We need to wrap the loop into an async function for this to work
        for (var i = 0; i < x.length; i++) {

            document.querySelector(".animation .stat .current>span").textContent = children[i].textContent;
            document.querySelector(".animation .stat .lookingFor>span").textContent = `(${children[i].textContent},${children[i].textContent})`;

            children[i].classList.toggle("white");
            let index = y.indexOf(y.find(el => el[0] == x[i] && el[1] == x[i]));
            //            index = (index == -1) ? y.length - 1 : index;
            await timer(index, i); // then the created Promise can be awaited
            if (!children[i].classList.contains("red") && !children[i].classList.contains("danger")) {
                children[i].classList.toggle("white");
            }

            //            console.log(index);
        }
        document.querySelector(".animation .stat .current>span").textContent = "";
        document.querySelector(".animation .stat .lookingFor>span").textContent = "";
        //        document.querySelector(`${cls}  .current`).textContent = 'Current element: ';
        //        document.querySelector(`${cls} .lookingFor`).textContent = 'Looking for: ';
    }

    load();

}









let symA = (cls) => {
    cls = ".animation";
    displayRSET(cls);
    displayRSET2(cls);
    document.querySelector(".animation").classList.remove("animation2");
    let children = document.querySelector(`${cls} .anime`).children;
    let children2 = document.querySelector(`${cls}  .anime2`).children;




    // Returns a Promise that resolves after "ms" Milliseconds
    async function timer2(ms) {
        return new Promise(res => setTimeout(res, ms))
    }

    async function timer(ms, i) {
        let found = true;
        if (ms == -1) {
            found = false;
            ms = y.length - 1;
        }
        //        console.log("ms", ms);
        for (let j = 0; j <= ms; j++) {

            //            console.log("Found", found, "j", j, "children[i]", children[i], "children2[j]", children2[j]);


            if (found == false) {
                children2[j].classList.add("white");
                //                console.log("before timer2");
                await timer2(1000 * speed);
                //                console.log("after time2")
                children2[j].classList.remove("white");
            } else if (found == true) {
                if (ms != j) {
                    children2[j].classList.add("white");
                    //                    console.log("before timer2");
                    await timer2(1000 * speed);
                    //                    console.log("after time2")
                    children2[j].classList.remove("white");
                } else {
                    children[i].classList.remove("white");
                    children[i].classList.add("red");

                    children2[j].classList.add("red");
                    //                    console.log("before timer2");
                    await timer2(1000 * speed);
                    //                    console.log("after time2")
                    children2[j].classList.remove("red");
                }
            }

        }
        if (found == false) {
            children[i].classList.add("danger");
            children[i].classList.remove("white");
        }


        return new Promise(res => setTimeout(res, 0))
    }



    async function load() {


        let father = document.querySelector(`.animation  .stat`);
        let current = document.createElement("div");
        current.classList.add("current");
        let span = document.createElement('span');
        //        span.textContent = `(${children[i][0].textContent},${children[i][1].textContent})`;
        span.classList.add("uniHolder");
        current.textContent = 'Current element: ';
        current.appendChild(span);

        let lookingFor = document.createElement("div");
        let span2 = document.createElement('span');
        lookingFor.classList.add("lookingFor")
        //                span2.textContent = `(${children[i][1].textContent},${children[i][0].textContent})`;
        span2.classList.add("uniHolder");
        lookingFor.textContent = 'Looking for: ';
        lookingFor.appendChild(span2);
        father.appendChild(current);
        father.appendChild(lookingFor);


        // We need to wrap the loop into an async function for this to work
        for (var i = 0; i < y.length; i++) {
            //            console.log(children2[i]);

            document.querySelector(".animation .stat .current>span").textContent = `(${y[i][0]}, ${y[i][1]})`;
            document.querySelector(".animation .stat .lookingFor>span").textContent = `(${y[i][1]}, ${y[i][0]})`;
            //            let current = document.querySelector(`${cls}  .current`);
            //            let span = document.createElement('span');
            //            span.textContent = children[i].textContent;
            //            span.classList.add("uniHolder");
            //            current.textContent = 'Current element: ';
            //            current.appendChild(span);
            //
            //            let lookingFor = document.querySelector(`${cls} .lookingFor`);
            //            let span2 = document.createElement('span');
            //            span2.textContent = `(${y[i][1]},${y[i][0]})`;
            //            span2.classList.add("uniHolder");
            //            lookingFor.textContent = 'Looking for: ';
            //            lookingFor.appendChild(span2);

            children[i].classList.add("white");
            let index = y.indexOf(y.find(el => el[0] == y[i][1] && el[1] == y[i][0]));
            //            index = (index == -1) ? y.length - 1 : index;
            //            console.log("BEFORE", children[i].classList, children[i]);
            await timer(index, i); // then the created Promise can be awaited

            //            children[i].classList.toggle("white");
            //            console.log("AFTER", children[i].classList, children[i]);
            if (!children[i].classList.contains("red") && !children[i].classList.contains("danger")) {
                children[i].classList.remove("white");
            }
            //            children[i].classList.remove("white");

            //            console.log(index);
        }
        //        document.querySelector(`${cls}  .current`).textContent = 'Current element: ';
        //        document.querySelector(`${cls} .lookingFor`).textContent = 'Looking for: ';
    }

    load();
}
let transA = () => {

    document.querySelector(".animation").innerHTML = ` <div class="tablo"><div class="ab"><p>(a,b)</p></div><div class="bc"><p>(b,c)</p></div><div class="ac"><p>(a,c)</p></div></div> <div class="inner"><div class="anime"></div><div class="anime2"></div><div class="anime3"></div> </div>`;

    displayRSET();
    displayRSET2();
    displayRSET3();
    cls = ".animation";
    document.querySelector(".animation").classList.add("animation2");
    let children = document.querySelector(`${cls} .anime`).children;
    let children2 = document.querySelector(`${cls}  .anime2`).children;
    let children3 = document.querySelector(`${cls}  .anime3`).children;




    // Returns a Promise that resolves after "ms" Milliseconds
    async function timer2(ms) {
        return new Promise(res => setTimeout(res, ms))
    }

    async function timer(ms, i, j, span3) {
        //        console.log(ms, i, j);
        let found = true;
        if (ms == -1) {
            found = false;
            ms = y.length - 1;
        }

        let ac = document.querySelector(".ac");



        if (found == false) {
            for (let k = 0; k < y.length; k++) {
                children3[k].classList.add("white");
                await timer2(1000 * speed);
                children3[k].classList.remove("white");
            }
            span3.classList.remove("uniHolderTemp");
            span3.classList.add("uniHolder");
            span3.innerHTML = `<i style="color:red;text-align:center" class="fas fa-times fa-1x"></i>`;

        } else {

            for (let k = 0; k <= ms; k++) {
                if (k != ms) {
                    children3[k].classList.add("white");
                    await timer2(1000 * speed);
                    children3[k].classList.remove("white");
                } else {
                    children3[k].classList.add("red");
                    children2[j].classList.add("red");
                    children[i].classList.add("red");
                    await timer2(1000 * speed);
                    children3[k].classList.remove("red");
                    children2[j].classList.remove("red");
                    children[i].classList.remove("red");
                }

            }

            span3.classList.remove("uniHolderTemp");
            span3.classList.add("uniHolder");
            span3.textContent = `(${y[i][0]},${y[j][1]})`;
        }

        ac.appendChild(span3);


        return new Promise(res => setTimeout(res, 500))
    }



    async function load() {


        //        let father = document.querySelector(`.animation  .stat`);
        //        let current = document.createElement("div");
        //        current.classList.add("current");
        //        let span = document.createElement('span');
        //        span.classList.add("uniHolder");
        //        current.textContent = 'Current element: ';
        //        current.appendChild(span);
        //
        //        let lookingFor = document.createElement("div");
        //        let span2 = document.createElement('span');
        //        lookingFor.classList.add("lookingFor")
        //        span2.classList.add("uniHolder");
        //        lookingFor.textContent = 'Looking for: ';
        //        lookingFor.appendChild(span2);
        //        father.appendChild(current);
        //        father.appendChild(lookingFor);


        // We need to wrap the loop into an async function for this to work
        for (var i = 0; i < y.length; i++) {
            children[i].classList.add("white");
            for (j = 0; j < y.length; j++) {

                if (y[i][1] === y[j][0]) {
                    children2[j].classList.add("white");
                    let ab = document.querySelector(".ab");
                    let bc = document.querySelector(".bc");
                    let ac = document.querySelector(".ac");



                    let span = document.createElement("divv");
                    span.classList.add("uniHolder");
                    span.textContent = `(${y[i][0]},${y[i][1]})`;


                    let span2 = document.createElement("div");
                    span2.classList.add("uniHolder");
                    span2.textContent = `(${y[j][0]},${y[j][1]})`;

                    let span3 = document.createElement("div");
                    span3.classList.add("uniHolderTemp");

                    ab.appendChild(span);
                    bc.appendChild(span2);
                    ac.appendChild(span3);
                    let index = y.indexOf(y.find(el => el[0] == y[i][0] && el[1] == y[j][1]));
                    await timer(index, i, j, span3);

                } else {
                    children2[j].classList.add("white");
                    await timer2(1000 * speed);
                    //                    children2[j].classList.remove("white");
                }

                children2[j].classList.remove("white");

            }
            children[i].classList.remove("white");


            //            document.querySelector(".animation .stat .current>span").textContent = `(${y[i][0]}, ${y[i][1]})`;
            //            document.querySelector(".animation .stat .lookingFor>span").textContent = `(${y[i][1]}, ${y[i][0]})`;



            //            if (!children[i].classList.contains("red") && !children[i].classList.contains("danger")) {
            //                children[i].classList.remove("white");
            //            }



        }

    }

    load();
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

run = () => {
    z = [];
    x = [], y = [];
    x2 = [];
    (Array.from(document.querySelector(".relation .results").children).forEach(el => {
        if (el.nodeName != "H2") {
            el.remove();
        }
    }));
    speed = document.querySelector("#speed").value;
    input();
    input2();
    //    console.log(y);
    //    asdfasd



    //    refA();
    //    symA();
    reflexive();
    symmetric();
    transitive();
    asymmetric();
    //    console.log(document.querySelectorAll(".uni>div>input"));
    //    console.log(z);
    let element = document.querySelector(".relation .results");
    //    console.log(element);

    //    element.innerHTML = "";
    //    console.log(z);
    for (let i = 0; i < z.length; i++) {
        let div = document.createElement("div");
        div.classList.add(z[i][0]);
        div.innerHTML = `<p class="${z[i][1]?"GreenRes":"redRes"}">${formatter(div.classList[0])} <i style="color:${z[i][1]
        ?"green":"red"}" class="fas ${z[i][1]?"fa-check":"fa-times"} fa-1x"></i></p>`;

        div.addEventListener('click', () => {

            if (div.classList[0] == "REFLEXIVE" || div.classList[0] == "IRREFLEXIVE") {
                (Array.from(document.querySelector(".animation").children).forEach(el => {

                    el.remove();

                }));



                let parent = document.querySelector(".animation");
                let stat = document.createElement("div");
                stat.classList.add("stat");
                let anime = document.createElement("div");
                anime.classList.add("anime");
                let anime2 = document.createElement("div");
                anime2.classList.add("anime2");
                parent.appendChild(stat);
                parent.appendChild(anime);
                parent.appendChild(anime2);
                refA2(`.${div.classList[0]} >  div.hidden > `);
            } else if (div.classList[0] == "SYMMETRIC" || div.classList[0] == "ANTI-SYMMETRIC" || div.classList[0] == "ASYMMETRIC") {

                (Array.from(document.querySelector(".animation").children).forEach(el => {

                    el.remove();

                }));



                let parent = document.querySelector(".animation");
                let stat = document.createElement("div");
                stat.classList.add("stat");
                let anime = document.createElement("div");
                anime.classList.add("anime");
                let anime2 = document.createElement("div");
                anime2.classList.add("anime2");
                parent.appendChild(stat);
                parent.appendChild(anime);
                parent.appendChild(anime2);
                symA(`.${div.classList[0]} >  div.hidden > `);







                //                symA(`.${div.classList[0]} >  div.hidden > `);
            } else if (div.classList[0] == "TRANSITIVE") {
                transA();
            }

            //            if (div.innerHTML.length < 100) {
            //                document.querySelector(".hidden").style.display="block";
            //            } else {
            //                document.querySelector(".hidden").style.display="none";
            //            }

        })

        element.appendChild(div);



    }

}
