const fun = [
    {
        funName: "Print list",
        working:
`//Function declaration
void printList();

/*
1. Function return void
2  You must have declare global linked list is of type
        struct node {
            int data;
            struct node *next;
        } *rear = NULL;
*/

//Function defination
void printList()
{
    struct node *p;
    if(rear == NULL){
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
    {
        funName: "Insert element to the front",
        working:
`//Function declaration
void insert_frontEnd(int data);

/*
1. Function argument 
        a. Element to be intered
2. Function return void
3.  You must have declare global linked list is of type
        struct node {
            int data;
            struct node *next;
        } *rear = NULL;
*/

//Function defination
void insert_frontEnd(int data)
{
    struct node *temp;
    temp = (struct node *)malloc(sizeof(struct node));

    if(temp == NULL){
        printf("  Dequeue overflow  ");
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
}
`
    },
    {
        funName: "Insert element to the end",
        working:
`//Function declaration
void insert_rearEnd(int data);

/*
1. Function argument 
        a. Element to be intered
2. Function return void
3.  You must have declare global linked list is of type
        struct node {
            int data;
            struct node *next;
        } *rear = NULL;
*/

//Function defination
void insert_rearEnd(int data)
{
    struct node *temp;
    temp = (struct node *)malloc(sizeof(struct node));

    if(temp == NULL){
        printf("  Dequeue overflow  ");
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
        funName: "Delete element from rear end",
        working:
`//Function declaration
int delete_rearEnd();

/*
1. Function return data of the element to be deleted or if
        not deleted return -255
2.  You must have declare global linked list is of type
        struct node {
            int data;
            struct node *next;
        } *rear = NULL;
*/

//Function defination
int delete_rearEnd()
{
    struct node *p, *temp;
    int data;

    if(rear == NULL){
        printf("  Dequeue underflow  ");
        return -255;
    }

    p = rear->next;

    while(p->next != rear)
        p = p->next;

    temp = p->next;
    data = temp->data;

    p->next = temp->next;
    free(temp);

    rear = p;

    return data;
}
`
    },
    {
        funName: "Delete element from front end",
        working:
`//Function declaration
int delete_frontEnd();

/*
1. Function return data of the element to be deleted or if
        not deleted return -255
2.  You must have declare global linked list is of type
        struct node {
            int data;
            struct node *next;
        } *rear = NULL;
*/

//Function defination
int delete_frontEnd()
{
    int data;
    struct node *temp;

    if(rear == NULL){
        printf("  Dequeue underflow  ");
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
        funName: "Is Dequeue empty?",
        working:
`//Function declaration
int isEmpty();

/*
1. Function return 1 if true else 0
2.  You must have declare global linked list is of type
        struct node {
            int data;
            struct node *next;
        } *rear = NULL;
*/

//Function defination
int isEmpty()
{
    return (rear == NULL);
}
`
    }    
];

export default fun;