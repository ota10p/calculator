# calculator
iPhone計算機アプリを模倣したオリジナル計算機アプリです。  
ボタンの位置や挙動が同じになるようにしました。  
レスポンシブ対応をしているのでスマホでも利用可能です。  

<img width="517" alt="スクリーンショット 2023-06-20 1 33 00" src="https://github.com/ota10p/calculator/assets/135662234/c1bf16f0-1236-4708-9139-9003992d0ce0">
<img width="547" alt="スクリーンショット 2023-06-20 12 18 57" src="https://github.com/ota10p/calculator/assets/135662234/42829b49-d73d-407f-8565-19cd508ef175">
<img width="510" alt="スクリーンショット 2023-06-20 12 22 16" src="https://github.com/ota10p/calculator/assets/135662234/2751809e-77cf-4427-8edc-2096f8a47494">

## ○使用言語
- html 5
- css 3
- Typescript 5.0.3
- webpack 5.77.0

## ○機能紹介
1. 入力は11桁までで制御
2. 計算結果が11桁を超える場合は"E"という文字列を表示してエラーを出力
3. 演算子をクリック後、次に数値が入力されるまでは、分かりやすいように背景が白くなった状態になる
4. 計算結果後の数値から、さらに追加で計算可能
5. 数値が何も入力されていない状態で演算子やクリアボタンなどをクリックしても何も反応しないように制御
6. 小数点の"."は何度も押せないように制御。表示が0の場合でもクリック可能
7. ”%”は百分率に変換
8. "C"は画面だけクリア
9. "AC"は画面とプログラム内で保存している数値を全てクリア

## ○構成
クロージャを用いて、表示されている数値、計算後の値、計算途中の値、などを追加や取得できるstate関数で管理してます。  
計算結果などを保持して管理する関数、if文などの条件式で使うbool値だけを返す関数、エラーを吐き出す関数、計算させる関数、計算可能か調べる関数、入力値が文字か数値かを判別する関数等、
細かく関数化するのを意識しました。  
文字列と数値をしっかり区別して、計算や変換をするプログラムなので、TypeScriptの型定義などの恩恵をしっかり受ける事ができました。  
JSだけで書いた時と全然違った^^  





