const text = `
 Российская корпорация "Иркут" и египетский холдинг KATO Investment на авиасалоне в Дубае подписали ряд соглашений о развитии сотрудничества по проекту новейшего российского пассажирского самолета МС-21 . "В рамках программы сотрудничества заключено соглашение о закупке для авиакомпании Cairo Aviation (дочернее предприятие KATO Investment ) 6 самолетов МС-21. Соглашение также предусматривает опцион на 4 самолета МС-21" , — сообщается в понедельник на сайте российской компании. Кроме того, в настоящее время стороны обсуждают создание регионального центра по ремонту и обслуживанию МС-21 в районе международного аэропорта Аль-Аламейн, расположенного в 184 километрах от Каира. Египетская сторона планирует бесплатно предоставить площадь, примыкающую к воздушной гавани, для размещения производственных сооружений. Отметим, что в настоящее время на Иркутском авиазаводе ведется сборка первых летных прототипов МС-21. Первый полет запланирован на весну-лето будущего года, серийное производство — на 2017 год. 

`

const words = text.split(" ")


let numbers = []
let generalWords = []
let names = []
let quotes = []
let total = []
let numberWithWords = []


function tgtrimm(str){var ars = str.replace(/[^a-zA-ZА-Яа-яЁё]/gi,'').replace(/\s+/gi,', '); return ars;}


const isTrashWord = (word) => {
    if (tgtrimm(word).length < 3) {
        return true
    }
}

for (const word of words) {
    if (word.indexOf("ли") !== -1) {
        // Что сделали?
        console.log(word)
    }
    if (word.indexOf("ий") !== -1) {
        console.log(word)
        // С чем сделали? Прилагательные
    }
    if (word[0] === word[0].toUpperCase()) {

            if (word.search(/\d/) !== -1) {
                if (Number.isInteger(parseInt(word))) {
                    numbers.push(word)
                } else {
                    numberWithWords.push(word)
                }
            } else {
                if (!isTrashWord(word)) {
                if (word[0] === '"') {
                    if (word[word.length] === '"') {
                        names.push(word)
                    } else {
                        quotes.push(word)
                    }
                } else {
                    generalWords.push(word)
                }
            }
        }
    }
}

var result = {};
numberWithWords.forEach(function(a){
    if (result[a] != undefined)
        ++result[a];
    else
        result[a] = 1;
});
for (var key in result) {
    if (result[key] > 2) {
        total += key
    }
}

console.log(total)
console.log(generalWords)