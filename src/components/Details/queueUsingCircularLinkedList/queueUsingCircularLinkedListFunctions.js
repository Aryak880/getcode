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
} *rear = NULL;

1. Function arguments
        a. element to be inserted
2. Function return void
3. You must have declare globle node pointer
        a. rear // for point to the last of queue
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

    if(rear == NULL){
        rear = temp;
        rear->next = rear;
        return;
    }

    temp->next = rear->next;
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
} *rear = NULL;

1. Function return data of the deleted node
2. You must have declare globle node pointer
        a. rear // for point to the last of queue
*/

//Function defination
int dequeue()
{
    int data;
    struct node *temp;

    //If the queue is empty
    if(rear == NULL){
        printf("  Queue underflow  ");
        return -255;
    }

    if(rear->next == rear){
        temp = rear;
        rear = NULL;
    }

    else{
        temp = rear->next;
        rear->next = temp->next;
    }

    data = temp->data;
    free(temp);
    return data;
}
`
    },
    {
        funName: "peek element",
        working:
`//Function declaration
int peek();

/*
struct type->

struct node
{
    int data;
    struct node *next;
} *rear = NULL;

1. Function return data of the first node
2. You must have declare globle node pointer
        a. rear // for point to the last of queue
*/

//Function defination
int peek()
{
    //If the queue is empty
    if(rear == NULL){
        printf("  Queue underflow  ");
        return -255;
    }

    return rear->next->data;
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
} *rear = NULL;

1. Function return 1 if true else 0
2. You must have declare globle node pointer
        a. rear // for point to the last of queue
*/

//Function defination
int isEmpty()
{
    return (rear == NULL);
}
`
    },
    {
        funName: "Print queue elements",
        working:
`//Function declaration
void printList();

/*
struct type->

struct node
{
    int data;
    struct node *next;
} *rear = NULL;

1. Function return void
2. You must have declare globle node pointer
        a. rear // for point to the last of queue
*/

//Function defination
void printList()
{
    struct node *p;
    if(isEmpty()){
        printf("List is empty  ");
        return;
    }

    p = rear->next;
    printf("List is  ");

    do{
        printf("%d ", p->data);
        p = p->next;
    }while(p != rear->next);
}
`
    },

];



export default fun;