<?php
// エラー解消用の資料

//1 セミコロン忘れ
echo "Wellcome to TheNewGate"


//2 引数の不足
function add($a, $b) {
    return $a + $b;
}

echo add(5);

//3 定義し忘れ
$array = ["name" => "Hiro"];
echo $array["age"];


//4 文字連結間違い
echo "Wellcome to " + "TheNewGate";


?>