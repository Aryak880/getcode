const fun = [
    {
        funName: "Enqueue(insert) element",
        working:
`//Function declaration
void insert(int data, int pre);

/*
struct type->

struct node
{
    int pre;
    int data;
    struct node *next;
}*front = NULL;

1. Function arguments
        a. element to be inserted
        b. priority of the element
2. Function return void
3. You must have declare globle node pointer
        a. front // for point to the front of queue
*/

//Function defination
void insert(int data, int pre)
{
    struct node *p, *temp;
    temp = (struct node *)malloc(sizeof(struct node));

    if(temp == NULL){
        printf("  Memory not available  ");
        return;
    }

    temp->data = data;
    temp->pre = pre;

    if(isEmpty() || pre < front->pre){
        temp->next = front;
        front = temp;
        return;
    }

    p = front;

    while(p->next != NULL && p->next->pre <= pre)
        p = p->next;

    temp->next = p->next;
    p->next = temp;
}
`
    },
    {
        funName: "Dequeue(delete) element",
        working:
`//Function declaration
int del();

/*
struct type->

struct node
{
    int pre;
    int data;
    struct node *next;
}*front = NULL;

1. Function return data of deleted element
    if queue empty return - 255;
2. You must have declare globle node pointer
        a. front // for point to the front of queue
*/

//Function defination
int del()
{
    int data;
    struct node *temp;

    if(isEmpty()){
        printf("  Queue underflow  ");
        return -255;
    }

    temp = front;
    data = front->data;
    front = front->next;
    free(temp);

    return data;
}
`
    },
    {
        funName: "Peek element",
        working:
`//Function declaration
int peek();

/*
struct type->

struct node
{
    int pre;
    int data;
    struct node *next;
}*front = NULL;

1. Function return data of peeked element
    if queue empty return - 255;
2. You must have declare globle node pointer
        a. front // for point to the front of queue
*/

//Function defination
int peek()
{
    if(isEmpty()){
        printf("  Queue underflow  ");
        return -255;
    }

    return front->data;
}
`
    },
    
    {
        funName: "Is queue empty?",
        working:
`//Function declaration
int isEmpty();

/*
struct type->

struct node
{
    int data;
    struct node *next;
} *front = NULL;

1. Function return 1 if queue is empty else 0
2. You must have declare globle node pointer
        a. front // for point to the front of queue
*/

//Function defination
int isEmpty()
{
    return (front == NULL);
}
`
    },
    
    {
        funName: "print queue elements",
        working:
`//Function declaration
void printList();

/*
struct type->

struct node
{
    int data;
    struct node *next;
} *front = NULL;

1. Function return void
2. You must have declare globle node pointer
        a. front // for point to the front of queue
*/

//Function defination
void printList()
{
    struct node *p;
    if(front == NULL){
        printf("  List is empty  ");
        return;
    }

    p = front;
    printf("List is  ");
    while(p != NULL){
        printf("%d ", p->data);
        p = p->next;
    }
}
`
    },
];



export default fun;