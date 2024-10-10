let target = document.querySelector("#dynamic");
let stringArr = ["1905.06,25...", "1953.07.27...", "1,957.816...", "621,479...", "1950.10.01..."];
let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
let selectStringArr = selectString.split("");

// 오디오 객체 가져오기
let clockSound = document.getElementById("clock-sound");

// 아이콘 클릭 시 소리 재생 함수
document.getElementById("alarm-icon").addEventListener("click", function() {
    clockSound.play();
});

function randomString() {
    let target = document.querySelector("#dynamic");
    let stringArr = ["1905.06,25...", "1953.07.27...", "1,957.816...", "621,479...", "1950.10.01..."];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;
}

// 타이핑 리셋
function resetTyping() {
    target.textContent = "";
    dynamic(randomString());
}

// 한글자씩 텍스트 출력 함수
function dynamic(randomArr) {
    if (randomArr.length > 0) {
        target.textContent += randomArr.shift();
        setTimeout(function() {
            dynamic(randomArr);
        }, 250);
    } else {
        setTimeout(resetTyping, 3500);
    }
}

dynamic(randomString());

// 커서 깜빡임 효과
function blink() {
    target.classList.toggle("active");
}
setInterval(blink, 500);

// 'n' 키를 누르면 다음 사이트로 넘어감
document.addEventListener("keydown", function(event) {
    if (event.key === 'n') {
        window.location.href = "file:///C:/Users/ji040/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/%EA%B9%80%EC%A7%80%ED%98%84/%EC%8B%AC%EC%9E%A5%EC%86%8C%EB%A6%AC%EC%99%80%20%ED%8D%BC%EC%A7%80%EB%8A%94%20%ED%9A%A8%EA%B3%BC/index.html";
    }
});

// 'e' 키를 눌렀을 때 전체화면
document.addEventListener("keydown", function(event) {
    if (event.key === 'e' || event.keyCode === 69) {
        toggleFullscreen();
    }
});

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable full-screen mode: ${err.message}`);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}
