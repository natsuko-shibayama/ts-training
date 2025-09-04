//デフォルト引数-初期値/オプション引数-省略可能。jsにはない
function greeting(name, age = 20){
    console.log(`こんにちは${name}さん(${age}歳)`);
}

greeting("yamada", 30);
greeting("suzuki");

