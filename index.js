#!/usr/bin/env node

// Check Hardware Spec first
checkHardwareSpec()

function checkHardwareSpec(){
	// https://github.com/sebhildebrandt/systeminformation
	const sysinfo = require('systeminformation')
	
	const os = require('os')
	const ram = '램'
	const cpu  = 'CPU'

	sysinfo.mem()
		.then((data)=>{
				//return sysinfo.cpu()
			if(data.total/(1024*1024*1024) < 486){
				blameYourParents(ram)
			}else{
				return sysinfo.cpu()
			}
		})
		.then((data)=>{
			// http://www.intel.co.kr/content/www/kr/ko/processors/xeon/xeon-processor-e7-family.html
			if(data.cores < 16 || +data.speed < 1.90){
				blameYourParents(cpu)
			}
		})

	console.error('독일 팔선녀회 중앙 서버로부터 실행 허가를 받는 중입니다. 잠시만 기다려주세요...')
	setTimeout(() => {
		// TODO: Intel® Xeon® Processor E7
		// TODO: 승마장
		// TODO: 독일 직통 광케이블
		console.error('아직 지원되지 않는 컴퓨터입니다.')
	}, 2.52e+7) // 7시간
}

// Hardware Error
function blameYourParents(lacks){
	console.error(`하드웨어 경고: ${lacks} 없으면 니네 부모를 원망해.`
		+` ${lacks}도 실력이야. 있는 우리 컴퓨터 가지고 감 놔라 배 놔라 하지 말고.`
		+`남의 욕하기 바쁘니 아무리 다른 것 한들 어디 성공하겠니?`
		+`모자란 애들 상대하기 더러워서 안 하는 거야`)
	process.exit(126)
}
