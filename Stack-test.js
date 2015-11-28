/**
 * Created by xin on 2015/11/28.
 */
function Stack(){
    this.dataStore = [];//存放堆栈内元素
    this.top = 0;//栈顶位置
    this.push = push;//向栈内压入一个元素
    this.pop = pop;//返回栈顶的元素，同时将top的值减1
    this.peek = peek;//返回数组第top-1位置的元素，即栈顶元素
    this.length = length;//返回长度
    this.clean = clean;//清除元素
}

function push(element){
    this.dataStore[this.top++] = element;
}

function pop(){
    return this.dataStore[--this.top];
}

function peek(){
    return this.dataStore[this.top-1]
}

function length(){
    return this.top;
}

function clean(){
    this.top = 0;
}

//test stack

var s = new Stack();
s.push('a');
s.push('b');
s.push('c');
console.log('data:'+s.dataStore);
console.log('length:'+ s.length());
console.log(s.peek());
console.log(s.pop());
console.log('data:'+s.dataStore);
s.clean();
console.log(s.peek());




