---
title: About
icon: fas fa-info-circle
order: 4
last_modified_at: 2022-07-23 23:54:00 +0900
---
{%   assign today = site.time | date: '%s'      %}
{%   assign start = '2023-04-01 00:00:00 +0900' | date: '%s'  %}
{%   assign secondsSince = today | minus: start     %}
{%   assign hoursSince = secondsSince | divided_by: 60 | divided_by: 60     %}
{%   assign daysSince = hoursSince | divided_by: 24  %}
{%   assign daysRemain = -1 | times: daysSince  %}

이것저것 만드는것을 좋아하며, embedded를 공부하고 있는 학생입니다.  
현제 현역병으로 복무 중 입니다.
> 남은 군생활: {{daysRemain}}