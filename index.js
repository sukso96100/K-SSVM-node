#!/usr/bin/env node
if(require('os').freemem()/(1024*1024*1024) < 486) {
	console.error('하드웨어 경고: 램 없으면 니네 부모를 원망해. 램도 실력이야. 있는 우리 컴퓨터 가지고 감 놔라 배 놔라 하지 말고. 남의 욕하기 바쁘니 아무리 다른 것 한들 어디 성공하겠니? 모자란 애들 상대하기 더러워서 안 하는 거야')
	process.exit(126)
}

console.error('독일 팔선녀회 중앙 서버로부터 실행 허가를 받는 중입니다. 잠시만 기다려주세요...')
setTimeout(() => {
	// TODO: Intel® Xeon® Processor E7
	// TODO: 승마장
	// TODO: 독일 직통 광케이블
	console.error('아직 지원되지 않는 컴퓨터입니다.')
}, 2.52e+7) // 7시간

