#include<stdio.h>
#define MAX 20

int queue[MAX];
int front = -1;
int rear = -1;


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
        printf("1. Enqueue element\n");
        printf("2. Dequeue element\n");
        printf("3. Peek element\n");
        printf("4. Print List\n");
        printf("0. Exit\n");
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
                printf("Dequeued element is: %d\n", dequeue());
                break;

            case 3:
                printf("Peeked element is: %d\n", peek());
                break;

            case 4:
                printList();
                break;

            default:
                printf("\nWrong input\n");
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
        printf("\nQueue overflow\n");
        return;
    }

    queue[++rear] = data;
}

int dequeue()
{
    if(isEmpty()){
        printf("\nQueue underflow\n");
        return -255;
    }

    return queue[front++];
}

int peek()
{
    if(isEmpty()){
        printf("\nQueue underflow\n");
        return -255;
    }

    return queue[front];
}

void printList()
{
    int i;

    if(isEmpty()){
        printf("\nQueue is empty\n");
        return;
    }

    printf("\nList is\n");

    for(i=front; i<= rear; i++)
        printf("%d ", queue[i]);

    printf("\n\n");

}

int isFull()
{
    return (rear == (MAX - 1));
}

int isEmpty()
{
    return (rear == -1 || front == (rear + 1));
}







