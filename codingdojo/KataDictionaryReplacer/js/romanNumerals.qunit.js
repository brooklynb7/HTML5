module("");

test("getkataDictOutput", function(){
	strictEqual(getkataDictOutput("$temp$",{temp:"template"}),"template","output should be template");
	strictEqual(getkataDictOutput("$somebody$ is $role$",{somebody:"jamy",role:"a gay"}),"jamy is a gay","output should be jamy is a gay");
	strictEqual(getkataDictOutput("$somebody$ is $role$",{somebody:"jamy"}),"jamy is ","output should be jamy is ");
	strictEqual(getkataDictOutput("$somebody$ is $role$",{})," is ","output should be is ");
	strictEqual(getkataDictOutput("$somebody$ $action$ $somebody$ is $state$",{somebody:"Li Xiongjun", action:"says",state:"hungry"}),"Li Xiongjun says Li Xiongjun is hungry","output should be Li Xiongjun says Li Xiongjun is hungry");
	strictEqual(getkataDictOutput("$$somebody$ $action$ $somebody$ is $state$",{somebody:"Li Xiongjun", action:"says",state:"hungry"}),"$Li Xiongjun says Li Xiongjun is hungry","output should be $Li Xiongjun says Li Xiongjun is hungry");
	strictEqual(getkataDictOutput("$ $somebody$ $action$ $somebody$ is $state$",{somebody:"Li Xiongjun", action:"says",state:"hungry"}),"$ Li Xiongjun says Li Xiongjun is hungry","output should be $ Li Xiongjun says Li Xiongjun is hungry");
	strictEqual(getkataDictOutput("$somebody$action$ $somebody$ is $state$",{action:"says",state:"hungry", somebody:"Li Xiongjun"}),"$ Li Xiongjun says Li Xiongjun is hungry","output should be $ Li Xiongjun says Li Xiongjun is hungry");
});


