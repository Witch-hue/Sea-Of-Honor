module.exports = {
	// Entering the dungeon
	DungeonInfo : [

		{zone: 3020, string: 'Welcome too <font color="#56B4E9">Sea of Honor</font>'}
	],
	// 金麟號 (Sailing Instance)
	SOH_BOSS_1 : [
		{id: 104, msg: 'Suction (Dodge)'}
	],
	SOH_BOSS_2 : [
		{id: 103, msg: 'Suction (Dodge)'}
	],
	SOH_BOSS_3 : [
		{id: 108, msg: 'Front Stun'},
		{id: 128, msg: 'Upper cut (Knock up)'},
		{id: 129, msg: 'Hammer Toss ~ Skull'},
	//  {id: 131, msg: "毒圈射线131"},
		{id: 135, msg: "Puddles Inc (Jump)"},
	//  {id: 203, msg: "(防御10秒)"},
		{id: 204, msg: "30%"},
		{id: 137, msg: 'Outward Pluse'},
		{id: 139, msg: 'Succ'},
		{id: 133, msg: 'Secondary Aggro Jump -> Outward Donuts'},
		{id: 127, msg: 'Jump -> ', TIP: ["In Safe", "Out Safe"]},

		{id: 121, msg: ''},         // '前砸(外) | 转圈(内)'(绿)_来吧  +No.1 buff
		{id: 122, msg: ''},         // '转圈(内) | 前砸(外)'(紫)_滚开  +No.1 buff
	//  {id: 124, msg: '前砸'},     // 第一击 / 第二击
	//  {id: 125, msg: '转圈'},     // 第一击 / 第二击

		{id: 123, msg: ''},         // '蓄力前砸 | ↓(外)↓'(绿)_爆炸  +No.2 buff
		{id: 120, msg: ''},         // '蓄力转圈 | ↑(内)↑'(紫)_深渊  +No.2 buff
	//  {id: 126, msg: '大前砸'},  // 第三击
	//  {id: 134, msg: '大转圈'},  // 第三击
	],
	//           121+120=221 122+120=222           121+123=224 122+123=225
	SOH_TipMsg : ["Out - In - In", "In - Out - In","Dodge!", "Out - In - Out", "In - Out - Out"]
}
