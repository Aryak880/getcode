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
        d. int arr[MAX] //array for queue
*/

//Function defination
void printList()
{
    int i;
    if(front == -1){
        printf("Queue underflow  ");
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
        funName: "Insert element",
        working:
`//Function declaration
void insert(int item);

/*
1. Function arguments
        a. item to be inserted
2. Function return void
3. You must have declare globle variables
        a. #define MAX;  //for size of array
        b. int front = -1; //for point to front of array
        c. int rear = -1; //for point to rear of array
        d. int arr[MAX] //array for queue
*/

//Function defination
void insert(int item)
{
    if((rear == MAX-1 && front == 0) || (front == rear+1)){
        printf("Queue overflow  ");
        return;
    }

    if(front == -1)
        front = 0;

    if(rear == MAX-1)
        rear = 0;

    else
        rear++;

    arr[rear] = item;
}
`
    },
    {
        funName: "Delete element",
        working:
`//Function declaration
int del();

/*
1. Function return 
2. You must have declare globle variables
        a. #define MAX;  //for size of array
        b. int front = -1; //for point to front of array
        c. int rear = -1; //for point to rear of array
        d. int arr[MAX] //array for queue
*/

//Function defination
int del()
{
    int item;

    if(front == -1){
        printf("Queue underflow  ");
        return -225;
    }

    item = arr[front];

    if(front == rear){
        front = -1;
        rear = -1;

        return item;
    }

    if(front == MAX - 1)
        front = 0;

    else
        front++;

    return item;
}
`
    },
    {
        funName: "Peek element",
        working:
`//Function declaration
int peek();

/*
1. Function return data of peeked element
2. You must have declare globle variables
        a. #define MAX;  //for size of array
        b. int front = -1; //for point to front of array
        c. int rear = -1; //for point to rear of array
        d. int arr[MAX] //array for queue
*/

//Function defination
int peek()
{
   if(front == -1){
        printf("Queue underflow  ");
        return -225;
    }

    return arr[front];
}
`
    },
    {
        funName: "Is queue empty?",
        working:
`//Function declaration
int isEmpty();

/*
1. Function return 1 if true else 0
2. You must have declare globle variables
        a. #define MAX;  //for size of array
        b. int front = -1; //for point to front of array
        c. int rear = -1; //for point to rear of array
        d. int arr[MAX] //array for queue
*/

//Function defination
int isEmpty()
{
    return (front == -1);
}
`
    },
    {
        funName: "Is queue full?",
        working:
`//Function declaration
int isFull();

/*
1. Function return 1 if true else 0
2. You must have declare globle variables
        a. #define MAX;  //for size of array
        b. int front = -1; //for point to front of array
        c. int rear = -1; //for point to rear of array
        d. int arr[MAX] //array for queue
*/

//Function defination
int isFull()
{
    return ((rear == MAX-1 && front == 0) || (front == rear+1));
}
`
    }
    
];

export default fun;