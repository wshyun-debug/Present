const names = ["여진", "승진", "지영", "지원", "예린", "승현"];
const drawBtn = document.getElementById("drawBtn");
const result = document.getElementById("result");
const message = document.getElementById("message");

// 이미 뽑았는지 확인
const myResult = localStorage.getItem("myResult");

if (myResult) {
  result.textContent = myResult;
  message.textContent = "이미 뽑았습니다";
  drawBtn.disabled = true;
}

// 전체 결과 저장소
let remaining = JSON.parse(localStorage.getItem("remainingNames")) || names;

drawBtn.addEventListener("click", () => {
  if (remaining.length === 0) {
    alert("더 이상 뽑을 수 없습니다");
    return;
  }

  const index = Math.floor(Math.random() * remaining.length);
  const selected = remaining[index];

  // 저장
  localStorage.setItem("myResult", selected);
  remaining.splice(index, 1);
  localStorage.setItem("remainingNames", JSON.stringify(remaining));

  result.textContent = selected;
  message.textContent = "결과가 확정되었습니다";
  drawBtn.disabled = true;
});
