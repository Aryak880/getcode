#include<stdio.h>
#define MAX 20
int arr[MAX];
int rear = -1;
int front = -1;


void printList();
void insert(int item);
int del();
int peek();
int isEmpty();
int isFull();


int main()
{
    int choice, item;

    while(3){
        printf("\n\n1. Insert element\n");
        printf("2. Print list\n");
        printf("3. Delete element\n");
        printf("4. Peek element\n");
        printf("0. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch(choice){
            case 0:
                break;

            case 1:
                printf("Enter the element: ");
                scanf("%d", &item);
                insert(item);
                break;

            case 2:
                printList();
                break;

            case 3:
                item = del();
                printf("Deleted element data: %d", item);
                break;

            case 4:
                item = peek();
                printf("Peek element data: %d", item);
                break;

            default:
                printf("Wrong Input\n");
        }

        if(choice == 0)
            break;
    }
    return 0;
}


void printList()
{
    int i;
    if(isEmpty()){
        printf("Queue underflow\n");
        return;
    }

    i = front;

    printf("List elements are\n");
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
    printf("\n\n");
}

void insert(int item)
{
    if(isFull()){
        printf("Queue overflow\n");
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

int del()
{
    int item;

    if(isEmpty()){
        printf("Queue underflow\n");
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

int peek()
{
   if(isEmpty()){
        printf("Queue underflow\n");
        return -225;
    }

    return arr[front];
}


int isEmpty()
{
    return (front == -1);
}

int isFull()
{
    return ((rear == MAX-1 && front == 0) || (front == rear+1));
}

