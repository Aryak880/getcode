const boiler = [
    {
        dataStructure: "Queue using Array",
        comment: "",
        working:
`//Header file and defining max size of the array
#include<stdio.h>
#define MAX 20

int queue[MAX];
int front = -1;
int rear = -1;

//Function declarations
void enqueue(int item);
int dequeue();
int peek();
void printList();
int isFull();
int isEmpty();


int main()
{
    int choice, data;

    while(3){
        printf("1. Enqueue element  ");
        printf("2. Dequeue element  ");
        printf("3. Peek element  ");
        printf("4. Print List  ");
        printf("0. Exit  ");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch(choice)
        {
            case 0:
                break;

            case 1:
                printf("Enter the element: ");
                scanf("%d", &data);
                enqueue(data);
                break;

            case 2:
                printf("Dequeued element is: %d  ", dequeue());
                break;

            case 3:
                printf("Peeked element is: %d  ", peek());
                break;

            case 4:
                printList();
                break;

            default:
                printf("  Wrong input  ");
        }
        if(choice == 0)
            break;
    }

    return 0;
}

void enqueue(int data)
{
    if(isEmpty()){
        front++;
        queue[++rear] = data;
        return;
    }

    if(isFull()){
        printf("  Queue overflow  ");
        return;
    }

    queue[++rear] = data;
}

int dequeue()
{
    if(isEmpty()){
        printf("  Queue underflow  ");
        return -255;
    }

    return queue[front++];
}

int peek()
{
    if(isEmpty()){
        printf("  Queue underflow  ");
        return -255;
    }

    return queue[front];
}

void printList()
{
    int i;

    if(isEmpty()){
        printf("  Queue is empty  ");
        return;
    }

    printf("  List is  ");

    for(i=front; i<= rear; i++)
        printf("%d ", queue[i]);
}

int isFull()
{
    return (rear == (MAX - 1));
}

int isEmpty()
{
    return (rear == -1 || front == (rear + 1));
}
`
    }
];

export default boiler;