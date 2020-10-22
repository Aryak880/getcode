#include<stdio.h>
#include<stdlib.h>

struct node
{
    int data;
    struct node *next;
} *rear = NULL;

void enqueue(int data);
int dequeue();
int peek();
int isEmpty();
void printList();


int main()
{
    int choice, data;

    while(3){
        printf("1. Insert element\n");
        printf("2. Dequeue element\n");
        printf("3. Peek element\n");
        printf("4. Print list\n");
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
                printf("Dequeued element: %d\n", dequeue());
                break;

            case 3:
                printf("Peeked element: %d\n", peek());
                break;

            case 4:
                printList();
                break;

            default:
                printf("\nWrong choice\n");

        }

        if(choice == 0)
            break;

    }

    return 0;
}

void enqueue(int data)
{
    struct node *temp;
    temp = (struct node *)malloc(sizeof(struct node));

    if(temp == NULL){
        printf("\nQueue overflow\n");
        return;
    }

    temp->data = data;

    if(isEmpty()){
        rear = temp;
        rear->next = rear;
        return;
    }

    temp->next = rear->next;
    rear->next = temp;
    rear = temp;
}

int dequeue()
{
    int data;
    struct node *temp;

    if(isEmpty()){
        printf("\nQueue underflow\n");
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

int peek()
{
    if(isEmpty()){
        printf("\nQueue underflow\n");
        return -255;
    }

    return rear->next->data;
}

int isEmpty()
{
    return (rear == NULL);
}

void printList()
{
    struct node *p;
    if(isEmpty()){
        printf("List is empty\n");
        return;
    }

    p = rear->next;
    printf("List is\n");

    do{
        printf("%d ", p->data);
        p = p->next;
    }while(p != rear->next);

    printf("\n\n");
}
