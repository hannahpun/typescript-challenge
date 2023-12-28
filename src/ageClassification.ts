/**
 * 任務：實作一個函式 `classifyAge`，根據年齡進行分類。
 *
 * 範例：
 * classifyAge(10) 應該回傳 "Child"
 * classifyAge(15) 應該回傳 "Teenager"
 * classifyAge(30) 應該回傳 "Adult"
 * classifyAge(70) 應該回傳 "Senior"
 *
 * @param age - 一個需要被分類的年齡
 * @returns - 回傳年齡的分類結果
 */

function Cond(pairs: any[]) {
  return function (args: number) {
    for (const pair of pairs) {
      if (pair[0](args)) {
        return pair[1](args);
      }
    }
  };
}
export function classifyAge(age: number): string {
  // 請在此處寫下你的程式碼
  return Cond([
    [(x: number) => x <= 10, () => "Child"],
    [(x: number) => x <= 15, () => "Teenager"],
    [(x: number) => x <= 30, () => "Adult"],
    [(x: number) => x <= 15, () => "Teenager"],
    [() => true, () => "Senior"],
  ])(age);
}
