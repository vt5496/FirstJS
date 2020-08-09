"use strict";
//массив с кисями
let cat = [
    {
        img: 'https://d2hhj3gz5jljkm.cloudfront.net/wallpapers2/037/326/900/736/original/GCvmJ72UU1U.jpg',
        name: 'Vladik',
        whereFrom: 'UKraine. Z.P.',
        positionMan: 'Manager, user interface and very good man',
        color: 'Black',
        poroda: 'cot9',
        gender: "Malchik",
        weight: "65kg",
        skills:["UI/UX",'FrontEnd Development']
    }
];

//создать кисю и скрыть это меню

$(document).ready(function () {
    $('#addKisa').click(function () {
        $('#newKot9').toggleClass('active');
    })
})

let newCat = function () {
    cat[cat.length++] = {
        img: document.getElementById('imgCat').value,
        color: document.getElementById('newColor').value,
        poroda: document.getElementById('newPoroda').value,
        name: document.getElementById('newName').value,
        gender: document.getElementById('newGender').value,
        weight: document.getElementById('newWeight').value
    };
    confirm(
        "Вы создали котика №" + cat.length +
        "\r\nИмя: " + cat[cat.length - 1].name +
        "\r\nПорода: " + cat[cat.length - 1].poroda +
        "\r\nЦвет: " + cat[cat.length - 1].color +
        "\r\nВес: " + cat[cat.length - 1].weight +
        "\r\nГендер: " + cat[cat.length - 1].gender +
        "\r\nВы действительно хотите добавить котика?")
};

//показать и скрыть меню где вводиться номер одного котика чтобы его показать
$(document).ready(function () {
    $('#openMenuOpenCat').click(function () {
        $('#openCat').toggleClass('active');
    })
})

//вывести кисю по номеру


let openCatF = function () {
    document.getElementById('openCat').hidden = true;
    let root2 = document.getElementById('odinKot9');

    addCatClicked = true;
    let nomerKisi = document.getElementById("numberCat").value - 1;
    let element = document.createElement('div');
    element.className = 'onecat';

    let properties = document.createElement("div");
    properties.className = 'properties';

    let name = document.createElement('div');
    name.innerText = " Имя " + cat[nomerKisi].name;
    name.className = 'zagolovok';

    let color = document.createElement("div");
    color.innerText = " Цвет: " + cat[nomerKisi].color;
    color.className = 'TextSkill';

    let poroda = document.createElement("div");
    poroda.innerText = " Порода: " + cat[nomerKisi].poroda;
    poroda.className = 'TextSkill';

    let gender = document.createElement("div");
    gender.innerText = " Гендер: " + cat[nomerKisi].gender;
    gender.className = 'TextSkill';

    let weight = document.createElement("div");
    weight.innerText = " Вес: " + cat[nomerKisi].weight;
    weight.className = 'TextSkill';


    element.appendChild(name);
    properties.appendChild(color);
    properties.appendChild(poroda);
    properties.appendChild(gender);
    properties.appendChild(weight);

    element.appendChild(properties);
    root2.appendChild(element)



};

//создать изображение и вернуть элемент
/*let newImg = addimg;
let imgADD = function(newImg)   {
     imgADD = new Image(100, 200);
    img.src = 'picture.jpg';
    console.log(img);
}
*/

//выведение всех котиков
let addCatsClicked = false;
let addCats = function () {
    let root = document.getElementById('vseKoti');
    if (addCatsClicked) {
        root.innerHTML = '';
        addCatsClicked = false;
    } else {
        addCatsClicked = true;
        cat.forEach(cat => {

            let element = document.createElement('div');
            element.className = 'cat';

            let imgCenter = document.createElement('div');
            imgCenter.className = 'imgCenter'

            let proClass = document.createElement('div');
            proClass.innerText = "PRO";
            proClass.className = 'proClass';

            let imgCat = document.createElement('img');
            imgCat.src = cat.img;
            imgCat.className = 'img';

            let name = document.createElement('div');
            name.innerText = " Имя " + cat.name;
            name.className = 'zagolovok';

            let whereFrom = document.createElement('div');
            whereFrom.innerText = cat.whereFrom;
            whereFrom.className = 'textWhereFrom';

            let positionMan = document.createElement('div');
            positionMan.innerText = cat.positionMan;
            positionMan.className = 'textPositionMan';

            let buttonsOfMan = document.createElement('div');
            buttonsOfMan.className = 'buttonsOfMan';

            let follow = document.createElement('button');
            follow.innerText = "Follow";
            follow.className = 'buttonOfMan';

            let message = document.createElement('button');
            message.innerText = "Message";
            message.className = 'buttonOfMan';

            let profile = document.createElement('button');
            profile.innerText = "Profile";
            profile.className = 'buttonOfMan';

            let skillsPage = document.createElement('div');
            skillsPage.className =  'skillsPage';

            let skills = document.createElement('div');
            skills.innerText = 'SKILLS';
            skills.className = 'textSkills';

            let properties = document.createElement("div");
            properties.className = 'properties';

            let color = document.createElement("div");
            color.innerText = " Цвет: " + cat.color;
            color.className = 'TextSkill';

            let poroda = document.createElement("div");
            poroda.innerText = " Порода: " + cat.poroda;
            poroda.className = 'TextSkill';

            let gender = document.createElement("div");
            gender.innerText = " Гендер: " + cat.gender;
            gender.className = 'TextSkill';

            let weight = document.createElement("div");
            weight.innerText = " Вес: " + cat.weight;
            weight.className = 'TextSkill';



            element.appendChild(proClass);
            imgCenter.appendChild(imgCat);

            element.appendChild(imgCenter);
            element.appendChild(name);
            element.appendChild(whereFrom);
            element.appendChild(positionMan);

            buttonsOfMan.appendChild(follow);
            buttonsOfMan.appendChild(message);
            buttonsOfMan.appendChild(profile);

            element.appendChild(buttonsOfMan);
            skillsPage.appendChild(skills);

            properties.appendChild(color);
            properties.appendChild(poroda);
            properties.appendChild(gender);
            properties.appendChild(weight);


            skillsPage.appendChild(properties);

            element.appendChild(skillsPage);


            root.appendChild(element)

        })
    }


};
/*
cat=>{
}
function(cat){
}*/

//количество котиков
let kolKotikov = function () {
    var vivodkolKotikov = document.getElementById("kolKotikov").innerHTML = "Количество котиков: " + cat.length;
    document.getElementById('skrit2').hidden = false;
};
