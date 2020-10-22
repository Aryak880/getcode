#include<stdio.h>
#define MAX 20
int arr[MAX];
int rear = -1;
int front = -1;


void printList();
void insert_rearEnd(int item);
void insert_frontEnd(int item);
int delete_rearEnd();
int delete_frontEnd();
int isEmpty();
int isFull();


int main()
{
    int choice, item;

    while(3){
        printf("\n\n1. Insert element to front\n");
        printf("2. Insert element to rear\n");
        printf("3. Print list\n");
        printf("4. Delete element from front\n");
        printf("5. Delete element from rear\n");
        printf("0. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch(choice){
            case 0:
                break;

            case 1:
                printf("Enter the element: ");
                scanf("%d", &item);
                insert_frontEnd(item);
                break;

            case 2:
                printf("Enter the element: ");
                scanf("%d", &item);
                insert_rearEnd(item);
                break;

            case 3:
                printList();
                break;

            case 4:
                item = delete_frontEnd();
                printf("Deleted element data: %d", item);
                break;

            case 5:
                item = delete_rearEnd();
                printf("Deleted element data: %d", item);
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

void insert_rearEnd(int item)
{
    if(isFull()){
        printf("Queue overflow\n");
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

void insert_frontEnd(int item)
{
    if(isFull()){
        printf("Queue overflow\n");
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

int delete_rearEnd()
{
    int item;
    if(isEmpty()){
        printf("Queue is underflow\n");
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

int delete_frontEnd()
{
    int item;

    if(isEmpty()){
        printf("Queue underflow\n");
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

int isEmpty()
{
    return (rear == -1 || front == -1);
}

int isFull()
{
    return ((front == 0 && rear == MAX-1) || (front == rear + 1));
}
