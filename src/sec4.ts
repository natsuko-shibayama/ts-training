// console.log("Hello, Typescript!");
// ESlintでルールを統一。プロジェクトによって違う！
//型推論と型注釈
let count = 0; //これは明らかにnumberってわかるよね

function add1(a: number, b:number):number{
    return a + b;
}

const add2 = (a: number, b:number) => {
    return a + b;
}

add1(5,3);
// add2(5, "3");//これはエラーになるよね。

//NaN(not a number)
let result1 :number = 0/0;
// console.log(result1);//NaN
// console.log(Number.isNaN(result1));//true


//Infinity
let result2:number = 1/0;
// console.log(result2);

//配列の書き方ー角かっこもしくはジェネリクス
// ジェネリクス→Array<型名>
let names1:string[] = ["aa", "bb", "cc"];
let names2:Array<string> = ["aa", "bb", "cc"];
console.log(names1 == names2);//参照しているオブジェクトが違うから、一緒にはならないよ
console.log(JSON.stringify(names1) === JSON.stringify(names2));//中身を比較したいならこうするみたい

//オブジェクト型
let user :{
    name: string,
    age: number,
    address:{
        city:string, zipCode: string
    }
} = {
    name: "yamada",
    age: 30,
    address: {
        city: "sendai",zipCode: "111-2222"
    }
}
console.log(user);

//any型ー型チェック無効。型安全性が失われる！なるべく使わない！
// let value : any = "test";
// value = 123;// ほんとはできないはずなのに...

//型ガード-anyでも安全に型チェックをして扱う場合
function process(value: any){
    if(typeof value === "string"){
        return value.toUpperCase();
    } else if (value instanceof Error){// オブジェクトの型を確認する場合
        return value.message;
    } else {
        return "処理できません";
    }
}

process(111);//これはelseにはいるね

//unknown型ーanyより安全
let val1: unknown = "test";
if (typeof val1 === "string"){
    val1.toUpperCase();//型ガードが必要。typeofないとval1はエラーに。
}

let val2: any = "test";
val2.toUpperCase();

//void型-空、無効、関数が戻り値を返さないときとかに。
// function greet(name: string): void{
//     console.log(`こんにちは、${name}さん`);
//     alert();
// }
// →void型はなにも返さないことを意図する、undefined型はundefined型を返すことを意図する！

//デフォルト引数-初期値/オプション引数-省略可能
function greeting(name: string, age: number = 20){
    console.log(`こんにちは${name}さん(${age}歳)`);
}

greeting("jane");

function greet(name: string, age?: number): void{//?をつけることであってもなくてもいい、ということになる
    if(age !== undefined){
        console.log(`こんにちは${name}さん(${age}歳)`);
    } else {
        console.log(`こんにちは${name}さん`);
    }
}

greet("yamada", 30);
greet("suzuki");


//Union型-結合、統合
let input: string | number;
input = "hello";

function processId(id: string | number): string {//事前に不正な型を検出できる
    if (typeof id === "string") {
        return id.toUpperCase();
    } else {
        return id.toString();
    }
}

//literal型-設定値やステータス管理に使う
let httpStatus: 200 | 404 | 500;
httpStatus = 200;
// httpStatus = 403;//これはエラー。

//asでの型アサーション（型の強制指定）-型が確実な場合のみに使用すること。DOM操作やAPIで使うことがある
let value: any = "Hello";
let valueLength: number = (value as string).length;

// const btn = document.getElementById("submit") as HTMLButtonElement;
// btn.disabled = true;

//Tuple型-順序のある要素の組
let user1: [string, number] = ["james", 30];

//Enum型-マジックナンバーはよくこれで管理する
// enum Gender {
//     Male,
//     Female,
//     Other
// }
// let userGender: Gender = Gender.Female;
// console.log(userGender);//結果は1

enum HttpStatus1 {//手動で値の設定も可能
    OK = 200,
    NotFound = 404,
    InternalServerError = 500
}
console.log(HttpStatus1.InternalServerError);//結果は500

enum Gender {//手動で文字列も出せるよ
    Male = "male",
    Female = "female",
    Other = "other"
}
console.log(Gender.Other);//結果はother






