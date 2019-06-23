// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
(function(a,b){
	alert(a instanceof Array);
	alert(b instanceof Array);
}(a,b));


// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
(function(a){
	for(let i=0;i<a.length;i++){
		a[i]=a[i]*2;
	}
	alert(a);
}(a));

// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
(function(colors){
	var output1="";
	var output2="";
	var output3="";
	for(let i=0;i<colors.length;i++){
		if(i!=colors.length-1){
			output1=output1+colors[i]+" ";
			output2=output2+colors[i]+"+";
			output3=output3+colors[i]+",";
		}
		else{
			output1=output1+colors[i];
			output2=output2+colors[i];
			output3=output3+colors[i];
		}
		
	}
	alert(output1);
	alert(output2);
	alert(output3);
}(colors));

// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
(function(a){
	function compare(val1,val2){
      if(val1 < val2){
         return 1;
      }
      else if(val1 > val2){
         return -1;
      }
      else{
         return 0;   
      }
	}
	a.sort(compare);
	alert(a);
}(a));

// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
(function(a){
	var map={};
	for(let i=0;i<a.length;i++){
		if(!map[a[i]]){
			map[a[i]]=1;
		}
		else{
			map[a[i]]++;
		}
	}
	var keys=Object.keys(map);
	var maxNum=0;
	var maxEle=0;
	for(let i=0;i<keys.length;i++){
		if(map[keys[i]]>maxNum){
			maxNum=map[keys[i]];
			maxEle=keys[i];
		}
	}
	alert(maxEle);
}(a));
