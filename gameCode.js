var event, ok;
var answer = [];

function Message(a, b, c, d){
    do {//Выводим первый вопрос
        ok = false;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        event = +prompt(`${this.a} ${this.b} ${this.c} -1 - Выход из игры`);
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(this.d, event);
        }
        answer.push(event);
    } while (!ok);
}

Message(works.a00, works.a1, works.a2, works.a0);

switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        Message(works.b00, works.b1, works.b2, works.b0);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                Message(works.d00, works.d1, works.d2, works.d0);
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                Message(works.d00, works.d1, works.d2, works.d0);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        Message(works.c00, works.c1, works.c2, works.c0);
        switch (event) {
            case 1: // Второе действие
                Message(works.d00, works.d1, works.d2, works.d0);
                break;
            case 2: // Второе действие
                Message(works.d00, works.d1, works.d2, works.d0);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}

if (event != -1){
    res = 0
    while (res != 1){
        result = +prompt('Укажите номер хода\n\n-1 - Выход из игры');
        if(result == -1){
            break;
        }
        else
            switch (result) {
                case 1:
                    if (answer[0] == 1){
                        alert(works.a1);
                    }
                    else {
                        alert(works.a2);
                    }
                    res = 1;
                    break;

                case 2:
                    if (answer[0] == 1 && answer[1] == 1){
                        alert(works.b1);
                    } else if (answer[0] == 2 && answer[1] == 1){
                        alert(works.c1);
                    } else if (answer[0] == 2 && answer[1] == 2){
                        alert(works.c2);
                    }
                    else {
                        alert(works.b2);
                    }
                    res = 1;
                    break;
                case 3:
                    if (answer[2] == 1){
                        alert(works.d1);
                    }
                    else {
                        alert(works.d2);
                    }
                    res = 1;
                    break;
            }
    }
}

alert('Спасибо за игру');

//------------------------------------------
function isAnswer(q, event) {
    if (event == 1 || event == 2) {
        return true;
    }
    else {
        alert('Вы ввели недопустимый символ');
        return false;
    }
}
