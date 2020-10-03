const fun = [
    {
        funName: "Enqueue(insert) element",
        working:
`//Function declaration
void enqueue(int item);

/*
1. Function arguments
        a. element to be inserted
2. Function return void
3. You must have declare globle variables
        a. int MAX;  //for size of array
        b. int front = -1; //for point to front of array
        c. int rear = -1; //for point to rear of array
        d. int queue[MAX] //array for queue
*/

//Function defination
void enqueue(int data)
{
    if(rear == -1 || front == (rear + 1)){
        front++;
        queue[++rear] = data;
        return;
    }

    if(rear == (MAX - 1)){
        printf("  Queue overflow  ");
        return;
    }

    queue[++rear] = data;
}
`
    },
    {
        funName: "Dequeue(delete) element",
        working:
`//Function declaration
int dequeue();

/*
1. Function return int data of deleted element
2. You must have declare globle variables
        a. int MAX;  //for size of array
        b. int front = -1; //for point to front of array
        c. int rear = -1; //for point to rear of array
        d. int queue[MAX] //array for queue
*/

//Function defination
int dequeue()
{
    if(rear == -1 || front == (rear + 1)){
        printf("  Queue underflow  ");
        return -255;
    }

    return queue[front++];
}
`
    },
    {
        funName: "peek first element",
        working:
`//Function declaration
int peek();

/*
1. Function return int data of peeked element
2. You must have declare globle variables
        a. int MAX;  //for size of array
        b. int front = -1; //for point to front of array
        c. int rear = -1; //for point to rear of array
        d. int queue[MAX] //array for queue
*/

//Function defination
int peek()
{
    if(rear == -1 || front == (rear + 1)){
        printf("  Queue underflow  ");
        return -255;
    }

    return queue[front];
}
`
    },
    {
        funName: "Print the queue elements",
        working:
`//Function declaration
void printList();

/*
1. Function return void
2. You must have declare globle variables
        a. int MAX;  //for size of array
        b. int front = -1; //for point to front of array
        c. int rear = -1; //for point to rear of array
        d. int queue[MAX] //array for queue
*/

//Function defination
void printList()
{
    int i;

    if(rear == -1 || front == (rear + 1)){
        printf("  Queue is empty  ");
        return;
    }

    printf("  List is  ");

    for(i=front; i<= rear; i++)
        printf("%d ", queue[i]);
}
`
    },
    {
        funName: "Check queue is full",
        working:
`//Function declaration
int isFull();

/*
1. Function return 1 if full else 0
2. You must have declare globle variables
        a. int MAX;  //for size of array
        b. int front = -1; //for point to front of array
        c. int rear = -1; //for point to rear of array
        d. int queue[MAX] //array for queue
*/

//Function defination
int isFull()
{
    return (rear == (MAX - 1));
}
`
    },
    {
        funName: "Check queue is empty",
        working:
`//Function declaration
int isEmpty();

/*
1. Function return 1 if empty else 0
2. You must have declare globle variables
        a. int MAX;  //for size of array
        b. int front = -1; //for point to front of array
        c. int rear = -1; //for point to rear of array
        d. int queue[MAX] //array for queue
*/

//Function defination
int isEmpty()
{
    return (rear == -1 || front == (rear + 1));
}

`
    },



];



export default fun;