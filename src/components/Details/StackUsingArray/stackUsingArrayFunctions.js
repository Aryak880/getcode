const fun = [
    {
        funName: "Push an element",
        working:
`//Function declaration
void push(int data);

/*
1. Function argument
        a. data to be pushed
2. Function return void
3. You have to declare globle variables
        a. top
        b. stack[MAX] 
        c. MAX for size of array
*/

//Function defination
void push(int item)
{
    if(isFull()){
        printf("  Stack overflow  ");
        return;
    }

    stack[++top] = item;
}
`
    },
    {
        funName: "Pop last element",
        working:
`//Function declaration
int pop();

/*
1. Function return data(int) of the last deleted element
2. You have to declare globle variables
        a. top
        b. stack[MAX] 
        c. MAX for size of array
*/

//Function defination
int pop()
{
    if(isEmpty()){
        printf("  Stack underflow  ");
        return -255;
    }

    return stack[top--];
}
`
    },
    {
        funName: "Peek last element",
        working:
`//Function declaration
int peek();

/*
1. Function return data(int) of the last element
2. You have to declare globle variables
        a. top
        b. stack[MAX] 
        c. MAX for size of array
*/

//Function defination
int peek()
{
    if(isEmpty()){
        printf("  Stack underflow  ");
        return -255;
    }

    return stack[top];
}
`
    },
    {
        funName: "Is stack empty?",
        working:
`//Function declaration
int isEmpty();

/*
1. Function return 1 or 0 if stack is empty or not
2. You have to declare globle variables
        a. top = -1
        b. stack[MAX] 
        c. MAX for size of array
*/

//Function defination
int isEmpty()
{
    return (top == -1);
}
`
    },
    {
        funName: "Is stack full?",
        working:
`//Function declaration
int isFull();

/*
1. Function return 1 or 0 if stack is full or not
2. You have to declare globle variables
        a. top = -1
        b. stack[MAX] 
        c. MAX for size of array
*/

//Function defination
int isFull()
{
    return (top == (MAX - 1));
}
`
    },
    {
        funName: "Print stack elements",
        working:
`//Function declaration
void printList();

/*
1. Function return void
2. You have to declare globle variables
        a. top = -1
        b. stack[MAX] 
        c. MAX for size of array
*/

//Function defination
void printList()
{
    int i;

    if(isEmpty()){
        printf("  Stack underflow  ");
        return;
    }

    printf("Stack items are  ");
    for(i=top; i>=0; i--){
        printf("%d ", stack[i]);
    }
}
`
    }

];



export default fun;