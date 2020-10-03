const fun = [
    {
        funName: "Enqueue(insert) element",
        working:
`//Function declaration
void enqueue(int data);

/*
struct type->

struct node
{
    int data;
    struct node *next;
}

1. Function arguments
        a. element to be inserted
2. Function return void
3. You must have declare globle node pointer
        a. front // for point to the front of queue
        b. rear // for point to the front of queue
*/

//Function defination
void enqueue(int data)
{
    struct node *temp;
    temp = (struct node *)malloc(sizeof(struct node));

    if(temp == NULL){
        printf("  Queue overflow  ");
        return;
    }

    temp->data = data;
    temp->next = NULL;

    if(isEmpty())
        front = temp;

    else
    rear->next = temp;

    rear = temp;
}
`
    },
    {
        funName: "Dequeue(delete) element",
        working:
`//Function declaration
int dequeue();

/*
struct type->

struct node
{
    int data;
    struct node *next;
}

1. Function return int data of dequeued node
2. You must have declare globle node pointer
        a. front // for point to the front of queue
        b. rear // for point to the front of queue
*/

//Function defination
int dequeue()
{
    int data;
    struct node *temp;

    if(isEmpty()){
        printf("  Queue underflow  ");
        return -255;
    }

    data = front->data;
    temp = front;

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
    int data;
    struct node *next;
}

1. Function return int data of peeked node if empty return -255
2. You must have declare globle node pointer
        a. front // for point to the front of queue
        b. rear // for point to the front of queue
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
}

1. Function return 1 if queue is empty else 0
2. You must have declare globle node pointer
        a. front // for point to the front of queue
        b. rear // for point to the front of queue
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
}

1. Function return 1 if queue is empty else 0
2. You must have declare globle node pointer
        a. front // for point to the front of queue
        b. rear // for point to the front of queue
*/

//Function defination
void printList()
{
    struct node *p;
    if(isEmpty()){
        printf("List is empty  ");
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