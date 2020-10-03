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
3. You have to declare globle node pointer
        a. top       
*/

//Function defination
void push(int data)
{
    struct node *temp;
    temp = (struct node *)malloc(sizeof(struct node));

    if(temp == NULL){
        printf("  Stack overflow  ");
        return;
    }

    temp->data = data;
    temp->next = top;
    top = temp;
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
2. You have to declare globle node pointer
        a. top
*/

//Function defination
int pop()
{
    struct node *temp;
    int r;

    if(isEmpty()){
        printf("  Stack underflow  ");
        return -255;
    }

    temp = top;
    r = top->data;
    top = top->next;
    free(temp);

    return r;
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
2. You have to declare globle node pointer
        a. top
*/

//Function defination
int peek()
{
    if(isEmpty()){
        printf("  Stack underflow  ");
        return -255;
    }

    return top->data;
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
2. You have to declare globle node pointer
        a. top
*/

//Function defination
int isEmpty()
{
    return (top == NULL);
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
2. You have to declare globle node pointer
        a. top
*/

//Function defination
void printList()
{
    struct node *p;

    if(isEmpty()){
        printf("  Stack is empty  ");
        return;
    }

    p = top;

    printf("  List is  ");
    while(p != NULL){
        printf("%d ", p->data);
        p = p->next;
    }
}
`
    }

];



export default fun;