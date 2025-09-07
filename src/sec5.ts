// // 複雑な型の定義-interface(異なるコンポーネント間でのデータの形を定義)、型エイリアス
// interface User {
//     name: string;
//     age: number;
// }

// const user1: User = {
//     name: "Jones",
//     age: 30
// }

// //コールシグネチャー。関数の型を定義すること。イベントハンドラーやコールバック関数に使える
// interface Calculator {
//     (x: number, y: number): number;
// }

// const add: Calculator = (x, y) => {
//     return x + y;
// }
// console.log(add(5,3)); //8

interface EventHandler {
    (message: string): void;
}
function process(input: string, handler: EventHandler): void {
    handler(`処理完了: ${input}`);
}
const logger: EventHandler = (message) => {
    console.log(message);
}
process("テストデータ", logger);

//オプショナルプロパティ
// interface User {
//     name: string;
//     age?: number;
//     readonly email: string;
// }

// const user: User = {
//     name: "tanaka",
//     // age: 30, なくてもいいからコメントアウトしてもエラーにはならない
//     email: "test@test.com"
// }

// user.email = "test2@test.com" //読み取り専用だから再代入できないよ

//ネストしたinterface
interface Product {
    id: number;
    name: string;
    price: number;
}

interface OrderItem  {
    product: Product;//上のinterfaceを使う
    quantity: number;
}

//型エイリアス-interfaceではなくtypeでも書けるよ
// type User = {
//     id: number;
//     name: string;
//     email: string;
// }

//extendsキーワード
interface User {
    id: number;
    name: string;
}

interface AdminUser extends User {
    role: "super" | "sub"
}

const admin :AdminUser = { //どれか1つでも抜けてるとエラーがでる
    id: 1,
    name: "Angela",
    role: "super"
}

//intersection型-かつ条件での型を定義できる
type PersonalInfo = {
    name: string;
    age: number;
}

type ContactInfo = {
    email: string;
}

type UserProfile = PersonalInfo & ContactInfo;

const user: UserProfile = {//どれか1つでも抜けてるとエラーがでる
    name: "Emma",
    age: 20,
    email: "ema@test.com"
}


