const fun = [
    {
        funName: "Print list",
        working:
`//Function declaration
void printList();

/*
1. Function return void
2. You must have declare globle variables
        a. #define MAX;  //for size of array
        b. int front = -1; //for point to front of array
        c. int rear = -1; //for point to rear of array
        d. int arr[MAX] //array for Dequeue
*/

//Function defination
void printList()
{
    int i;
    if(rear == -1 || front == -1){
        printf("Dequeue underflow  ");
        return;
    }

    i = front;
    printf("List elements are  ");

    if(front <= rear){
        while(i <= rear)
            printf("%d ", arr[i++]);
    }
    else{
        while(i <= MAX-1)
            printf("%d ", arr[i++]);

        i = 0;

        while(i <= rear)
            printf("%d ", arr[i++]);
    }
}
`
    },
    {
        funName: "Insert element to the front",
        working:
`//Function declaration
void insert_frontEnd(int item);

/*
1. Function arguments
        a. item to be inserted
2. Function return void
3. You must have declare globle variables
        a. #define MAX;  //for size of array
        b. int front = -1; //for point to front of array
        c. int rear = -1; //for point to rear of array
        d. int arr[MAX] //array for Dequeue
*/

//Function defination
void insert_frontEnd(int item)
{
    if((front == 0 && rear == MAX-1) || (front == rear + 1)){
        printf("Dequeue overflow  ");
        return;
    }

    if(isEmpty()){
        front = 0;
        rear = 0;
    }
    else if(front == 0)
        front = MAX - 1;

    else
        front--;

    arr[front] = item;
}
`
    },
    {
        funName: "Insert element to the end",
        working:
`//Function declaration
void insert_rearEnd(int item);

/*
1. Function arguments
        a. item to be inserted
2. Function return void
3. You must have declare globle variables
        a. #define MAX;  //for size of array
        b. int front = -1; //for point to front of array
        c. int rear = -1; //for point to rear of array
        d. int arr[MAX] //array for Dequeue
*/

//Function defination
void insert_rearEnd(int item)
{
    if((front == 0 && rear == MAX-1) || (front == rear + 1)){
        printf("Dequeue overflow  ");
        return;
    }

    if(isEmpty()){
        front = 0;
        rear = 0;
    }
    else if( rear == MAX-1)
        rear = 0;
    else
        rear++;

    arr[rear] = item;
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
2. You must have declare globle variables
        a. #define MAX;  //for size of array
        b. int front = -1; //for point to front of array
        c. int rear = -1; //for point to rear of array
        d. int arr[MAX] //array for Dequeue
*/

//Function defination
int delete_rearEnd()
{
    int item;
    if(rear == -1 || front == -1){
        printf("Dequeue is underflow  ");
        return -255;
    }

    item = arr[rear];
    if(front == rear){
        front = -1;
        rear = -1;

        return item;
    }

    if(rear == 0)
        rear = MAX - 1;

    else
        rear--;

    return item;
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
2. You must have declare globle variables
        a. #define MAX;  //for size of array
        b. int front = -1; //for point to front of array
        c. int rear = -1; //for point to rear of array
        d. int arr[MAX] //array for Dequeue
*/

//Function defination
int delete_frontEnd()
{
    int item;

    if(front == -1 || rear == -1){
        printf("Dequeue underflow  ");
        return -255;
    }

    item = arr[front];

    if(front == rear){
        front = -1;
        rear = -1;

        return item;
    }

    if(front == MAX-1)
        front = 0;
    else
        front++;

    return item;
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
2. You must have declare globle variables
        a. #define MAX;  //for size of array
        b. int front = -1; //for point to front of array
        c. int rear = -1; //for point to rear of array
        d. int arr[MAX] //array for Dequeue
*/

//Function defination
int isEmpty()
{
    return (rear == -1 || front == -1);
}
`
    },
    {
        funName: "Is Dequeue full?",
        working:
`//Function declaration
int isFull();

/*
1. Function return 1 if true else 0
2. You must have declare globle variables
        a. #define MAX;  //for size of array
        b. int front = -1; //for point to front of array
        c. int rear = -1; //for point to rear of array
        d. int arr[MAX] //array for Dequeue
*/

//Function defination
int isFull()
{
    return ((front == 0 && rear == MAX-1) || (front == rear + 1));
}
`
    }
    
];

export default fun;