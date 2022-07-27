---
title: About
icon: fas fa-info-circle
order: 4
last_modified_at: 2022-07-23 23:54:00 +0900
---

이것저것 만드는것을 좋아하며, embedded를 공부하고 있는 학생입니다.  
현제 현역병으로 복무 중 입니다.
> 남은 군생활: <span id="remainDuty">Not suppot IE</span>일

<script>
    remainDuty = () => {
        let today = new Date();
        let end = new Date("2023-04-01 00:00:00 +0900");
        let remain = ((end - today) / 864 + 0.5).toFixed()/100000;
        document.getElementById("remainDuty").innerText=remain.toString().padEnd(9,'0');
    };
    remainDuty();
    setInterval(remainDuty, 1000);
</script>